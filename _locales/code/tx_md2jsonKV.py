import os
import sys
import json
import jq

import config
import yaml2json as f

#TODO : move keys listed in pre-tx-push.jq into config.py file and make pre-tx-push.jq key selection dynamic

#TODO: comment file

rootdir = "../../_posts"

def getBoundary(): 
	temp = open(os.path.join(subdir, file), "r")
	i = 0 
	h = 0
	for k,v in enumerate(temp):
		if "---" in v: 
			i = i + 1			
			if i == 2:
				h = k
				break	

	temp.close()
	return h

def getText(h):
	temp = open(os.path.join(subdir, file), "r")
	text =[]
	for k,v in enumerate(temp):
		if k > h:
			if len(v)>0:
				text.append(v)
	abc = "".join(text)
	temp.close()
	return abc

def writeText():
	num = getBoundary()
	text = getText(num)

	textF = "temp/"+file+".txt"
	with open(textF, 'w') as f:
		f.write(text)

	f.close()
	print "wrote text to" + textF


def createYAML():
	num = getBoundary()
	temp = open(os.path.join(subdir, file), "r")

	yaml = []

	for k,v in enumerate(temp):
		if 0<k<num:
			yaml.append(v)

	yaml = "".join(yaml).lstrip()
	yamlf = "temp/"+file+".yml"
	with open(yamlf, 'w') as f: 
		f.write(yaml)
	f.close()

def yamlJSON():
	yamlf = "temp/"+file+".yml"
	s = f.yaml2json(yamlf)	
	jsonf = "temp/"+file+".json.orig"
	with open(jsonf,'w') as n:
		n.write(s)
	n.close()

def yamlFiltered():
	jsonf = "temp/"+file+".json.orig"
	print "HERE"


	os.system('''cat '''+jsonf+''' | jq --arg file `basename '''+file+'''` -f pre-tx-push.jq > temp/`basename '''+file+'''`.json.tmp''')


def textToJSON():
	md = "temp/"+file+".txt"
	#prevent non-significant content value -- only take content > 3 chars
	if os.stat(md).st_size > 3:
		os.system('''jq '$json[0] * { ("'''+file+'''---content"): . }' --arg file ''' + file + ''' --slurpfile json temp/'''+ file + '''.json.tmp -sR '''+md+''' > temp/'''+ file +'''.json''')
	else:
		os.system("cp temp/"+file+".json.tmp temp/"+file+".json")

def jsonCompile():
	os.system("jq 'add' -s temp/*.json > tx_mdtoJSON.en.json")



for subdir, dirs, files in os.walk(rootdir): 
	for file in files: 

		#macbook :/ 
		if file != ".DS_Store":
			
			#First create .md.txt file with all markdown
			writeText()
			print "Writing markdown text to .txt for file %s" % (file)

			# then create yaml files for front-matter
			createYAML()
			print "Writing YAML to .yml for file %s" % (file)

			#convert yaml to full json
			yamlJSON()
			print "Writing JSON of YAML to .json.orig for file %s" % (file)

			#convert yaml to filtered json
			yamlFiltered()
			print "Filtering YAML to specific keys and writing JSON for file %s" % (file)

			#add markdown text to filtered json
			textToJSON()
			print "Writing markdown text into final JSON array for file %s" % (file)

#create final, large json file, tx_mdtoJSON.json
print "Compiling master JSON document, tx_mdtoJSON.json"
jsonCompile()


print "Processing completed"


			