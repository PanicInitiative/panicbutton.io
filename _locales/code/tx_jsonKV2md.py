import os
import sys
import json
import codecs
import config

#TODO : Comment file 
#TODO : make certain parts of this dynamic (eg link/status hard-coding, to match hardcoding in md->JSON jq conversion )
#TODO : code should be able to handle json of n depth; currently works for given whitelisted keys, but not

class jsonObj(object):
	obj_dict = {}
	pass

def loadJSON(d):
	with open(d) as f: 
		data = json.load(f)
	return data

def getFile(k,f):
	jsonn = []
	jsonn += [each for each in os.listdir("../"+k+"/temp") if each.endswith(f)]
	return jsonn

def writeText(h):
	for k,v in jsonObj.obj_dict.items():
		d = v.__dict__
		for e,f in d.items():
			if e == "content":
				with codecs.open("../fr/temp/"+k+"_translated.txt", 'w', 'utf-8') as y:
					y.write(f)

def breakFiles(f):
	for k,v in f.items():
		h = k.split('---')
		if h[0] not in jsonObj.obj_dict:
			d = jsonObj()
			jsonObj.obj_dict[h[0]] = d

		n = jsonObj.obj_dict[h[0]]

		if len(h) == 2: 
			if h[1] == "content":
				n.content = v
			else: 
				for key in config.keys:
					if h[1] == key:
						setattr(n, key, v)
		else:	
			if hasattr(n, h[1]):
				f = getattr(n, h[1])				
				setattr(f, h[2], v)
				setattr(n, h[1], f)

			else:
				e = jsonObj()
				setattr(e, h[2], v)
				setattr(n, h[1], e)
	return jsonObj.obj_dict


def createJSON(h):
	for k,v in jsonObj.obj_dict.items():
		x = "temp/"+k+".json.orig"
		n = loadJSON(x)
		h = v.__dict__

		i = 0 
		for t,u in h.items():
			if t == "content":
				writeText(t)
			elif type(u) is unicode: 
				n[t] = u
				#test
				#n[t] = "change from unicode catch"
			else: 
				y = u.__dict__
				for s in n[t]:
			 		for p,q in s.items():
						if p == "link" and len(q) > 1:							
							if q in y:
								b = y[q]
								s['title'] = b
								#test
								#s['title'] = "change from link"
			 			elif p == "status":
			 				if q in y:
								b = y[q]
								s['title'] = b
								#test
								#s['title'] = "change from status"
					
					#TODO: there must be a better way of doing this; currently need to break twice to get correct results in affected files when assigned to jsonKV with iterator. Problem would be eliminated by creating ID's for each translatable string, or code refactoring (?)
					for p,q in s.items(): 
						if p != "link" and p !="status":
							for a,b in y.items():
								if a == str(i):
									s['title'] = b
									#s['title'] = "change fr iterator"
									i = i+1
									break
						break

			with codecs.open("../fr/temp/"+k+".trans.json", 'w', 'utf-8') as g:
				json.dump(n, g, indent=4)
				g.close()
	

def makeYAML(k):
	print k
	jsonn = getFile(k,'.json')

	for j in jsonn: 
		#using command line node json2yaml tool
		#TODO: in order to get this to convert yaml to the correct depth, it's necessary to set "d" to 5 -->this will differ from project to project and also injects \n at beginning of bullet point "-" lists. Is there a better way to do this json -> yaml conversion? 
		os.system("json2yaml -d 5 -i 4 -s ../"+key+"/temp/"+j)


def makeMarkdown(k):
	yaml = getFile(k, '.yaml')
	print yaml
	
	for y in yaml: 
		n = y[:-11]

		yamlf = "../../_posts/fr/"+n

		yam = open(yamlf, 'w')
		yam.write("---\n")

		temp = open("../fr/temp/"+y, "r")
		for line in temp:
			yam.write(line)

		yam.write("\n---\n\n")
		yam.close()

		txtfile = "../fr/temp/"+n+"_translated.txt"

		try: 
			yam = open(yamlf, 'a')
			with open(txtfile, 'r') as txt: 
				for line in txt: 
					yam.write(line)

		except IOError as e:
			print "I/O error({0}): {1}".format(e.errno, e.strerror)
			print "No markdown exists for file %s!" % (n)
	

		

# access each language's file
# idea is that with each TXGH push of .json KV file back into the git repo, each language's md files are rebuilt
# is there a better way to do this? if a language's .jsonKV file has not changed, identical files will just be written anew, wasted computational energy but no problem

for key in config.lang:
	print "Beginning conversion for language %s" % (key)
	try: 
		n = "../"+key+"/tx_jsonKV_"+key+".json"

		print "Creating json array from master json file"
		g = loadJSON(n)

		print "Cutting master json file back into component files" 
		h = breakFiles(g)

		print "Creating temporary json and text files in _locales/%s/temp/" % (key)
		createJSON(h)

		print "Creating temporary YAML files in _locales/%s/temp/ " % (key)
		makeYAML(key)

		print "Creating final markdown files in _posts/%s/" % (key)
		makeMarkdown(key)


	except IOError as e:
		print "I/O error({0}): {1}".format(e.errno, e.strerror)
		print "It's possible that no such file exists for language %s" % (key)


