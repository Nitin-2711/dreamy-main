import urllib.request
import urllib.parse
import json

def search_image():
    url = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=Galaxy%20Blue%20Sapphire&utf8=&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        print(json.dumps(data, indent=2))
    except Exception as e:
        print(f"Error: {e}")

search_image()
