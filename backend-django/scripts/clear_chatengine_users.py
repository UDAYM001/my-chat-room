import requests
import os, json

PRIVATE_KEY = os.environ['PRIVATE_KEY']

users = requests.get(
    'https://api.chatengine.io/users/',
    headers={"Private-Key": PRIVATE_KEY}
)

for user in json.loads(users.content):
    response = requests.delete(
        'https://api.chatengine.io/users/{}/'.format(user['id']),
        headers={"Private-Key": PRIVATE_KEY}
    )
    print(response.status_code)
