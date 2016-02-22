#python2.7

#config file with whitelisted keys and subkeys for transifex conversion process

#TODO: What is the best way to store this data? Where does the user input it? Should it be a YAML file? 
#Needs: Import keys into JQ and Python --> should prob be yaml -> json ? 
#could also pass into jq via "arg" -- can this happen multiple times? 

keys=['title', 'introduction', 'fail', 'heading', 'bio', 'organisation', 'need', 'happen', 'talent', 'power', 'hard_mode', 'description', 'token', 'captions', 'alert', 'warning', 'goals', 'remember', 'materials', 'methodology', 'timeSpan', 'caption', 'content', 'answer', 'feature', 'download', 'label', 'confirmation']

subkeys=['action','checklist','status','items', 'image', 'questions', 'content', 'answers', 'features', 'downloads', 'parent']

helperElem = ['link', 'status', 'src', 'id']

#this could stay in python 
lang=['fr','de','es']


