from db import findOne, findAll, save

def empty():
  print("함수 정의가 되어 있지 않습니다.")

def userList(args):
    sql = """
          SELECT  `no`, `name`, `email`, `password`, `gender`, `regDate`, `modDate`
          FROM team2.user
          WHERE `delYn` = 0
          ;
          """
    list = findAll(sql)
    print(f"번호\t이름\t이메일\tPW\t성별\t가입날짜\t수정날짜")
    print("-"*80)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["regDate"]}\t{row["modDate"]}")

def userAdd(args):
    sql = f"""
          INSERT INTO team2.`user`
          (`name`,`email`,`password`,`gender`)
          VALUE 
          ('{args.name}','{args.email}',{args.password},{args.gender})
          ;
          """
    save(sql)
    userList(None)

def userDetail(args):
    sql = f"""
          SELECT  `no`, `name`, `email`, `password`, `gender`, `delYn`, `regDate`, `modDate`
          FROM team2.user
          where `no` = {args.no}
          ;
          """
    list = findAll(sql)
    print(f"번호\t이름\t이메일\tPW\t성별\t탈퇴여부\t가입날짜\t수정날짜")
    print("-"*80)
    for row in list:
        print(f"{row["no"]}\t{row["name"]}\t{row["email"]}\t{row["password"]}\t{row["gender"]}\t{row["delYn"]}\t{row["regDate"]}\t{row["modDate"]}")

def userEdit(args):
    sql = f"""
          UPDATE team2.`user` 
          SET `{args.key}` = '{args.value}'
          WHERE `no` = {args.no}
          ;
          """
    save(sql)
    userList(None)

def userDelete(args):
    sql = f"""
          UPDATE team2.`user` 
          SET `delYn` = 1
          WHERE `no` = {args.no}
          ;
          """
    save(sql)
    userList(None)

def boardList(args):
    sql="""
        SELECT p.no , p.title, p.content , u.`name`, p.regDate, p.modDate
        FROM team2.post AS p
        INNER JOIN team2.user AS u
        ON (p.user_no = u.no)
        WHERE p.delYn = 0
        ;
        """
    list = findAll(sql)
    print(f'번호\t제목\t내용\t작성자이름\t작성날짜\t수정날짜')
    print("-"*80)
    for row in list:
        print(f"{row["no"]}\t{row["title"]}\t{row["content"]}\t{row["name"]}\t{row["regDate"]}\t{row["modDate"]}")

def boardAdd(args):
    sql = f"""
          INSERT INTO team2.post
          (`title`,`content`,`user_no`)
          VALUE 
          ('{args.title}','{args.content}',{args.no})
          ;
          """
    save(sql)
    boardList(None)

def boardDetail(args):
    sql=f"""
        SELECT p.no , p.title, p.content, u.`name`, p.delYn, p.regDate, p.modDate
        FROM team2.post AS p
        INNER JOIN team2.user AS u
        ON (p.user_no = u.no)
        WHERE p.no = {args.no}
        ;
        """
    list = findAll(sql)
    print(f'번호\t제목\t내용\t작성자이름\t삭제여부\t작성날짜\t수정날짜')
    print("-"*80)
    for row in list:
        print(f"{row["no"]}\t{row["title"]}\t{row["content"]}\t{row["name"]}\t{row["delYn"]}\t{row["regDate"]}\t{row["modDate"]}")

def boardEdit(args):
    sql = f"""
          UPDATE team2.`post` 
          SET `{args.key}` = '{args.value}'
          WHERE `no` = {args.no}
          ;
          """
    save(sql)
    boardList(None)

def boardDelete(args):
    sql = f"""
          UPDATE team2.`post` 
          SET `delYn` = 1
          WHERE `no` = {args.no}
          ;
          """
    save(sql)
    boardList(None)