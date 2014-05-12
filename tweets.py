import tweepy
import os
import json
import secrets

q = '#imetdiva'
q = '#love'

json_file = 'photos.json'
json_data = open(json_file)
photos = json.load(json_data)
json_data.close()

auth = tweepy.OAuthHandler(secrets.consumer_key, secrets.consumer_secret)
auth.set_access_token(secrets.access_token, secrets.access_token_secret)

api = tweepy.API(auth)

tweets = api.search(q=q, count=100)
for tweet in tweets:
	id = tweet.id_str
	try:
		url = tweet.entities['media'][0]['media_url']
		photos[id] = url
		print 'updated ' + id
	except:
		print 'ignoring '+ id

print photos
with open(json_file, 'w') as outfile:
	  json.dump(photos, outfile)
