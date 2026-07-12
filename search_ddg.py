import urllib.request
import urllib.parse
import json
import re

def search_ddg():
    url = "https://html.duckduckgo.com/html/?q=Galaxy+Blue+Sapphire+Plaza+Greater+Noida+exterior"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Extract images from the duckduckgo html page
        # In duckduckgo html search, it might not have direct image links, so let's try a different approach.
        pass
    except Exception as e:
        print(f"Error: {e}")

search_ddg()
