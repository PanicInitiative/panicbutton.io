import os
import sys
import json
import codecs
import config
import functools
import re

#TODO : Comment file 
#class
class jsonObj(object):
	obj_dict = {}
	pass

#helpers
def loadJSON(d):
	with open(d) as f: 
		data = json.load(f)
	return data

def getFile(k,f):
	jsonn = []
	jsonn += [each for each in os.listdir("../"+k+"/temp") if each.endswith(f)]
	return jsonn

def writeText(h, key):
	for k,v in jsonObj.obj_dict.items():
		d = v.__dict__
		for e,f in d.items():
			if e == "content":
				with codecs.open("../"+key+"/temp/"+k+"_translated.txt", 'w', 'utf-8') as y:
					y.write(f)

def rsetattr(obj, attr, val):
    pre, _, post = attr.rpartition('.')
    return setattr(rgetattr(obj, pre) if pre else obj, post, val)

def rgetattr(obj, attr):
	return functools.reduce(getattr, [obj]+attr.split('.'))

def rhasattr(obj, attr):
	try:
		rgetattr(obj, attr)
		return True
	except AttributeError: 
		return False

def getFromDict(dataDict, mapList):
	return reduce(lambda d, k: d[k], mapList, dataDict)

def deepLists(lst, mapList, i):
	for x in lst: 
		d = x.keys()
		if mapList[i] in d:
			b = lst.index(x)
			return b

def distillToUnicode(lst, mapList, i, larr):
	if type(lst) == list: 
		c = deepLists(lst, mapList, i)
		larr.append(c)
		larr.append(mapList[i])
		b = lst[c][mapList[i]]
		distillToUnicode(b, mapList, i+1, larr)
		return larr
	
	return larr

def setInDict(dataDict, mapList, value):
	try: 
		getFromDict(dataDict, mapList[:-1])[mapList[-1]] = value
	except:
		a = dataDict[mapList[0]]
		larr = []
		larr.append(mapList[0])
		c = distillToUnicode(a, mapList, 1, larr)
		getFromDict(dataDict, c[:-1])[c[-1]] = value

def parseObj(n, u, r):
	for p,q in u.__dict__.items():
		f = []
		for x in r: 
			f.append(x)
		f.append(p)
		
		if type(q) == unicode: 
			setInDict(n, f, q)
		else: 
			parseObj(n, q, f)

#main functions
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
				setattr(n, h[1], v)
		else:
			num = len(h) 
			i = 1
			for x in range(1, num-1):
				if x == 1: 
					attrstr = h[1]
				else: 
					attrstr = attrstr + "." + h[x]
				if rhasattr(n, attrstr):
					continue
				else: 
					e = jsonObj()
					rsetattr(n, attrstr, e)
			
			attrstr = attrstr + "." + h[num-1]
			rsetattr(n, attrstr, v)
			

def createJSON(key):
	for k,v in jsonObj.obj_dict.items():
		x = "temp/"+k+".json.orig"
		n = loadJSON(x)
		h = v.__dict__
		i = 0
		for t,u in h.items():
			if t == "content":
				writeText(t, key)
			else:
				if type(u) == unicode: 
					n[t] = u
				else: 
					r = []
					r.append(t)
					parseObj(n,u,r)

		with codecs.open("../"+key+"/temp/"+k+".trans.json", 'w', 'utf-8') as g:
			json.dump(n, g, sort_keys=True,indent=4)
			g.close()
			
def makeYAML(k):
	jsonn = getFile(k,'.json')

	for j in jsonn: 
		os.system("json2yaml -d 5 -i 4 -s ../"+k+"/temp/"+j)

def makeMarkdown(k):
	yaml = getFile(k, '.yaml')
	
	for y in yaml: 
		n = y[:-11]

		yamlf = "../../_posts/fr/"+n

		yam = open(yamlf, 'w')
		yam.write("---\n")

		temp = open("../"+k+"/temp/"+y, "r")
		kk = "none"
		for line in temp:
			d = re.match(r'\s*-\s*$', line)
			if d: 
				kk = d.group(0)
			else: 
				if kk !="none":
					line = re.sub(r'([\s]{6})([\s]*)(K[0-9]+-)(\w+:)', r'\2'+ '- ' + r'\4', line, count=1)
					yam.write(line)
					kk = "none"
				else: 
					line = re.sub(r'([\s]{4})([\s-]*)(K[0-9]+-)(\w+:)', r'\2' + r'\4', line, count=1)
					yam.write(line)
					kk = "none"

		yam.write("\n---\n\n")
		yam.close()

		txtfile = "../"+k+"/temp/"+n+"_translated.txt"

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
		breakFiles(g)

		print "Creating temporary json and text files in _locales/%s/temp/" % (key)
		createJSON(key)

		print "Creating temporary YAML files in _locales/%s/temp/ " % (key)
		makeYAML(key)

		print "Creating final markdown files in _posts/%s/" % (key)
		makeMarkdown(key)


	except IOError as e:
		print "I/O error({0}): {1}".format(e.errno, e.strerror)
		print "It's possible that no such file exists for language %s" % (key)


