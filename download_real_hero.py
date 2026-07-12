import urllib.request
import json
import re

def search_duckduckgo_images(query):
    # This uses DuckDuckGo HTML to grab the vqd and then hits the image API
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Find vqd
        vqd_match = re.search(r'vqd=([\d-]+)', html)
        if not vqd_match:
            print("No vqd found")
            return
        vqd = vqd_match.group(1)
        
        api_url = f"https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={vqd}&f=,,,,"
        req2 = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req2).read().decode('utf-8')
        data = json.loads(res)
        
        results = data.get('results', [])
        for i, r in enumerate(results[:5]):
            print(f"Result {i}: {r['image']}")
            
    except Exception as e:
        print(f"Error: {e}")

search_duckduckgo_images("Galaxy Blue Sapphire Plaza Greater Noida West building exterior real")
