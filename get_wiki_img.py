import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def search():
    # Search for Galaxy Blue Sapphire on Wikimedia
    url = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=Greater%20Noida%20West&utf8=&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        print(html)
    except Exception as e:
        print(e)
search()
