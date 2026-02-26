import json


def getData():
    f = open("./data/memo.json", "r", encoding="utf-8")
    return json.load(f)


def add(a, b):
    data = getData()
    result = int(a) + int(b)
    data["list"].append(result)
    print(data, result)
    f = open("./data/memo.json", "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)


def list():
    print("list() 호출 됨")
    f = open("./data/memo.json", "r", encoding="utf-8")
    data = json.load(f)
    print(data)
    print(data["테스트으"])
    print(type(data))
    arr = data["list"]
    for v in arr:
        print(v)
