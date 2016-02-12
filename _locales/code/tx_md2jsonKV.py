import os
import sys
from yaml import load
import json
import jq
import codecs
import pprint

import config
import yaml2json as f

print config.keys
print config.subkeys
rootdir = '../../_posts'

def openFileRead(d):
	temp = open(os.path.join(subdir, d), "r")
	return temp 

def getBoundary(d): 
	temp = openFileRead(d)
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

def getText(d,h):
	temp = openFileRead(d)
	text =[]
	for k,v in enumerate(temp):
		if k > h:
			if len(v)>0:
				text.append(v)


	abc = "".join(text)
	return abc

def writeText(file):
	num = getBoundary(file)
	text = getText(file,num)

	textF = "temp/"+file+".txt"
	with open(textF, 'w') as f:
		f.write(text)

	print "wrote text to" + textF

def yamlJSON(yamlf,d):
	print yamlf
	jsonf = "temp/"+file+".json.orig"
	s = f.yaml2json(yamlf)
	
	with open(jsonf,'w') as n:
		n.write(s)

def createFullJSON(d):
	num = getBoundary(d)
	yaml = []
	temp = openFileRead(d)

	for k,v in enumerate(temp):
		if 0<k<num:
			yaml.append(v)

	yaml = "".join(yaml).lstrip()
	yamlf = "temp/"+file+".yml"
	with open(yamlf, 'w') as f: 
		f.write(yaml)
	f.close()

	yamlJSON(yamlf,d)

def createFilteredJSON(d):
	new = {}
	with open("temp/"+d+".json.orig") as f: 
		e = json.load(f)
	
	keys = config.keys + config.subkeys
	#new = { key: e[key] for key in keys }
	print new



for subdir, dirs, files in os.walk(rootdir): 
	for file in files: 

		#stupid macbook
		if file != ".DS_Store":
			
			#First create .md.txt file with all markdown
			writeText(file)

			#Next create .json.orig file with no keys filtered out for translation
			createFullJSON(file)

			#Next, create .json.tmp file with filtered keys

			createFilteredJSON(file)

			#Finally, collate all files into one file, content.json



