# 260127

  ## frontend
    - web server
     httpd(아파치)
     nginx **
     iis : 윈도우 기본 설치되어 있음

  ## backend
    - web application server
     django
     flask
     fastapi **

  ## Storage
    - Database Management System
     Oracle
     ms server
     db2 (ibm)
     MySQL 
     MariaDB **
    
    포트 관리 -> front, back, storage 모두 필요 -> env파일 용이

  ## FastAPI 기본 설정 `main.py`
```py
from fastapi import FastAPI
app = FastAPI()     
# Web Application Server 를 키기 위함 # 변수에 담아야 정상적으로 켜짐 
```

    - 포트 변경 원할 시 : uv run fastapi dev --port 8888
    -  uv run fastapi run : 서비스용 > 0.0.0.0:8000 :
    (ip주소):8000로 접속 가능


|방식|위치|주요 용도|필수 여부|
| :--- | :--- | :--- | :--- |
|Path Variable	|URL 경로 |(/items/1)|특정 데이터 식별|필수|
|Query Parameter	|URL 뒤 (?txt=abc)|검색, 필터링|선택 가능 (기본값 설정 시)|
|Form Data	|HTTP Body (숨겨짐)|로그인, 글쓰기|선택 가능|



카카오 rest api
342b504de6e4e180d8a739d0a4503130
인가코드
IUqzDgECSYbYkHELqiFNC6CIAiXa92tfdkmLASYvXEJ0rxly88s9EwAAAAQKFwFQAAABm_700GFDz1szkZmFRA