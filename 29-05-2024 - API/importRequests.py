import requests

x = requests.get('https://www.bankofbaroda.in')

print(x.text)