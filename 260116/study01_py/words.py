import json


def getData():
    f = open("./data/words.json", "r", encoding="utf-8")
    result = json.load(f)
    f.close()
    return result

def setData(data):
    f = open("./data/words.json", "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    f.close()
    목록()

def 목록():
    print("목록 호출")
    data = getData()
    if len(data["words"]) > 0:
        line1 = "="*100
        line2 = "-"*100
        print(line1)
        print(f'번호\t내용')
        for i in range(len(data["words"])):
            if i < len(data["words"]):
                print(line2)
            print(f'{data["words"][i]["id"]}\t{data["words"][i]["word"]}')
        print(line1)
    else:
        print("단어가 없습니다.")

def 입력(a):
	print(f'{a.addWord} 단어 추가')
	data=getData()
	id = (max((word["id"] for word in data["words"]), default=0) +1)
	row = { "id" : id , "word" : a.addWord}
	data["words"].append(row)
	setData(data)

def 수정(u):
    print(f'번호 {u.id} -> 단어 {u.word}로 변경')
    data = getData()
    for i in range(len(data["words"])):
        if data["words"][i]["id"] == int(u.id):
            data["words"][i]["word"] = u.word
            break
    setData(data)

def 삭제(id):
    print(f'번호 {id.deleteId} 삭제')
    data = getData()
    for i in range(len(data["words"])):
        if data["words"][i]["id"] == int(id.deleteId):
            del data["words"][i]
            break
    setData(data)
