import urllib.request
import re

def scrape():
    url = "https://www.magicbricks.com/galaxy-blue-sapphire-plaza-greater-noida-west-greater-noida-pdpid-4d4235303434313237"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        images = re.findall(r'https://img\.magicbricks\.com/newprojects/b2c/[^"]+\.(?:jpg|jpeg|png)', html)
        # also try normal img.magicbricks.com
        images += re.findall(r'https://img\.magicbricks\.com/[^"]+\.(?:jpg|jpeg|png)', html)
        for img in list(set(images))[:10]:
            print(img)
    except Exception as e:
        print(f"Error: {e}")
scrape()
