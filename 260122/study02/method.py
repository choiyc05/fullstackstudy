from db import findOne, findAll, save

def empty():
    print("함수 정의가 되어 있지 않습니다.")

def userlist(args):
    sql = """
        SELECT  `no`,
                `name`,
                `email`,
                `password`,
                `gender`,
                DATE_FORMAT(`regDate`, '%y%m%d %H:%i:%s') AS regDate,
                DATE_FORMAT(`modDate`, '%y%m%d %H:%i:%s') AS modDate
        FROM edu.ywuser
        """
    list = findAll(sql)
    print(f"번호\t이름\t{'이메일':<25}PW\t성별\t가입날짜\t수정날짜")
    print("-"*80)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]:<25}{row["password"]}\t{row["gender"]}\t{row["regDate"]}\t{row["modDate"]}")