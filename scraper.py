from bs4 import BeautifulSoup as bs
import requests
# url =  "https://www.amazon.com/s?k=opencv&ref=nb_sb_noss"
# url = "https://www.amazon.com/s?k=opencv&page=2&qid=1577620751&ref=sr_pg_2"
url = "https://www.amazon.com/s?k=opencv&page=3&qid=1577620806&ref=sr_pg_3"
try:
  html = requests.get(url)
except Exception as e:
  print(e)
else:
  bsobj = bs(html.text, "html.parser")
  items = bsobj.findAll("div",{"class":"sg-col-20-of-24 s-result-item sg-col-0-of-12 sg-col-28-of-32 sg-col-16-of-20 sg-col sg-col-32-of-36 sg-col-12-of-16 sg-col-24-of-28"})
  if len(items) == 0:
    print ("Failed")
    exit()
  d = {}
  for i in items:
    im = i.find("img",{"class":"s-image"})
    d['imurl'] = im.attrs["src"]
    title = i.find("span", {"dir":"auto"})
    d["title"] = title.get_text()
    d["price"] = i.find("span",{"class":"a-offscreen"}).get_text()
    with open("products.json","a") as f:
      f.write(str(d) + "\n")
    print(d)
    d = {}
  
  
