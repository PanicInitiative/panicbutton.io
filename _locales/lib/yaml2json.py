"""
Convert YAML file to JSON with identical structure (as a python dict)
"""
import sys
import yaml
import simplejson as json
import unittest

class Yaml2JsonTest(unittest.TestCase):
    """
    unittest suite for yaml2json
    """
    def testLoad(self):
        c = load("yaml2json.py")
        self.assertTrue(len(c) > 0)
        self.assertTrue(c.find("Yaml2JsonTest") != -1)
    def testSaveLoad(self):
        c1 = "hello world"
        save("deleteme.txt", c1)
        c2 = load("deleteme.txt")
        self.assertEqual(c1, c2)
    def testConvertArrays(self):
        o1 = {"foo":"bar", "sub": {0: "first", 1: "second"}}
        o2 = {"foo":"bar", "sub": {1: "first", 2: "second"}}
        otarget = {"foo":"bar", "sub": ["first", "second"]}
        self.assertEqual(convertArrays(o1), otarget)
        self.assertEqual(convertArrays(o2), otarget)

    def c(self, truth, o1, o2):
        #print(o1, o2)
        self.assertEqual(truth, compare(o1, o2))
    def ct(self, o1, o2):
        self.c(True, o1, o2)
    def cf(self, o1, o2):
        self.c(False, o1, o2)
    def testCompare(self):
        self.ct("1", "1")
        self.cf("1", "one")
        self.ct({}, {})
        self.ct([], [])
        self.cf({"x":[]}, {"x": None})
        self.ct({"x":[]}, {"x": []})
        self.ct({"x":{}}, {"x": {}})
        self.ct([{}, {}], [{}, {}])
        self.cf([{}, {}], [{}])
        self.ct({"foo":"bar"}, {"foo":"bar"})
        self.ct({"foo":"bar", "one":"1"}, {"foo":"bar", "one":"1"})
        self.ct({"foo":"bar", "one":"1"}, {"one":"1", "foo":"bar"})
        self.cf({"foo":"bar", "one":"1"}, {"one":1, "foo":"bar"})
        self.ct(["one"], ["one"])
        self.cf(["one"], ["1"])
        self.cf(["1"], [1])
        self.ct([1], [1])
        self.ct(["one", "two", "three"], ["one", "two", "three"])
        self.cf(["one", "two", "three"], ["one", "three", "two"])
        self.cf(["one", "two", "three"], ["one", "two"])

    exampleYaml = """
Projects:
  C/C++ Libraries:
  - libyaml       # "C" Fast YAML 1.1
  - Syck          # (dated) "C" YAML 1.0
  - yaml-cpp      # C++ YAML 1.1 implementation
  Ruby:
  - psych         # libyaml wrapper (in Ruby core for 1.9.2)
  - RbYaml        # YAML 1.1 (PyYaml Port)
  - yaml4r        # YAML 1.0, standard library syck binding
  Python:
  - PyYaml        # YAML 1.1, pure python and libyaml binding
  - PySyck        # YAML 1.0, syck binding
        """
    def testConvert(self):
        obj = yaml.load(self.exampleYaml)
        obj = convertArrays(obj)
        outputContent = json.dumps(obj)
        obj2 = json.loads(outputContent)
        self.assertEqual(obj, obj2)

def load(f):
    try:
        return (open(f, 'r')).read()
    except IOError:
        return None

def save(f, b): (open(f, 'w')).write(b)

def convertArrays(o):
    """
    The YAML parser will take a list of substructures all named with an ints
    and create a python sub dict using those ints as keys. In JSON you can't
    have keys be anything other than strings even though that is valid in a
    python dict. This function recursively converts a python dict tree into
    one where any dicts where all the keys are ints are made into arrays. It
    makes sure the order is preserved.    
    """
    allNums = True
    if type(o) == type([]):
        for i in range(len(o)):
            o[i] = convertArrays(o[i])
        return o
    if type(o) == type({}):
        # make sure each key is an int
        for i in o:
            o[i] = convertArrays(o[i])
            if type(i) != type(1):
                allNums = False
        # if so, convert it to an array
        if allNums:
            k = o.keys()
            k.sort()
            arr = []
            for i in k:
                arr.append(o[i])
            return arr
    return o

def compare(o1, o2):
    """
    Recursively compares each item in a python dict tree to make sure they are
    the same.
    """
    if o1 == o2:
        return True # shortcut if they're the same primitive
    if type(o1) != type(o2):
        return False # shortcut if they're not the same type
    if type(o1) == type({}):
        k1 = o1.keys()
        k1.sort()
        k2 = o2.keys()
        k2.sort()
        if k1 == k2: # make sure the sorted keys of the 2 dicts match
            for i in o1: # recursively compare each sub item
                if not compare(o1[i], o2[i]):
                    return False
        else:
            return False
    if type(o1) == type([]): # compare each item in an array
        if len(o1) != len(o2):
            return False
        for i in range(len(o1)):
            if not compare(o1[i], o2[i]):
                return False
    return (o1 == o2)

def yaml2json(file):
    """
    Main function, first arg is the input file, optional second one is the output
    file. If no output file is specified then the output is written to stdout.
    The input file is parsed as YAML and converted to a python dict tree, then
    that tree is converted to the JSON output. There is a check to make sure the 
    two dict trees are structurally identical.
    """

    obj = yaml.load(load(file))
    obj = convertArrays(obj)
    outputContent = json.dumps(obj, indent=2)
    obj2 = json.loads(outputContent)
    
    if not compare(obj, obj2):
        print("error: they dont match structure")
        print("")
        print(str(obj))
        print("")
        print(str(obj2))
    else:

        s = outputContent
        return s

if __name__ == '__main__':
    yaml2json()
