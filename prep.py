import json
import requests, os
with open("products.json", "r") as f:
  content = f.read()
imgs = []
ds = []
items = [i.strip() for i in content.split("\n") if i != "" ]
requests.adapters.DEFAULT_RETRIES = 5
l = [i for i in os.listdir("images/items") if i.endswith(".jpg")]
for i in items:
  d = eval(i)
  imgs.append(d['imurl'])
  d['imurl'] = d['imurl'].split("/")[-1]
  if d['imurl'] in l:
    ds.append(d)
with open("items.json","w")as f:
  f.write(str(ds))
def get_imgs():
  requests.adapters.DEFAULT_RETRIES = 5
  s = requests.session()
  s.keep_alive =  False
  for i in imgs:
    print("Fetching img {} ...".format(i), end="")
    try:
      html = requests.get(i)
    except Exception as e:
      print(e)
    else:
      with open(i.split("/")[-1],'wb') as f:
        f.write(html.content)
    print("Finished.")
# get_imgs()