import json
import pandas as pd
data = json.load(open('CoronaInfo.json' , encoding="utf8"))
# df = pd.read_json('CoronaInfo.json')
allData = pd.DataFrame(data["features"])


for key, value in data.items():
        print(key)


# properties = pd.DataFrame(data[""])
# print(properties['OBJECTID'])
# print(type(data))


