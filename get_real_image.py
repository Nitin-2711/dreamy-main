import urllib.request
import urllib.parse
import json
import re

def fetch_bing_image():
    # Use a dummy RapidAPI key or similar, or just try to scrape Bing Images
    # Actually, let's use Wikipedia's API for any building in Greater Noida
    url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Galaxy%20Blue%20Sapphire%20Plaza&utf8=&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        print("Wiki:", json.dumps(data, indent=2))
    except Exception as e:
        print(f"Error: {e}")

fetch_bing_image()
