import urllib.request
import re

def search():
    url = "https://html.duckduckgo.com/html/?q=Galaxy+Blue+Sapphire+Plaza+exterior+photo+real"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'href="([^"]+)"', html)
        for link in links:
            if 'http' in link and 'duckduckgo' not in link:
                print(link)
    except Exception as e:
        print(e)
search()
