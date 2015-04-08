import urllib2
import json


url = 'http://pilas-engine.tumblr.com/api/read/json?callback=tumblrBadge().listItems&num=5'

response = urllib2.urlopen(url)
data = response.read().decode('utf-8')

#data = data.replace('tumblrBadge.listItems(', '').replace(");", '')
string = data
json_obj = json.loads(string)

print data

for post in json_obj['posts']:
    #print post['regular-body']
    print post['slug']

with open('data.json', 'w') as outfile:
    json.dump(json_obj, outfile)
