from fastapi import FastAPI, Request, Response, Depends, Cookie
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from datetime import datetime, timedelta, timezone
from jose import jwt, JWTError
from db import findOne, findAll, save
from settings import settings
import mariadb
import uuid

SECRET_KEY = "your-extremely-secure-random-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class LoginModel(BaseModel):
    email: str = Field(..., title="이메일주소", description="로그인을 위한 이메일 주소")
    pwd: str = Field(..., title="비밀번호", description="로그인을 위한 비밀번호")

origins = [
    "http://localhost:5173"
]

def set_token(no: int, email: str):
    try:
        iat = datetime.now(timezone.utc) + (timedelta(hours=7))         # Claim설정
        exp = iat + (timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        data = {
            "email": email,
            "iss": "EDU",
            "sub": str(no),
            "iat": iat,
            "exp": exp
        }
        id = uuid.uuid4().hex
        token = jwt.encode(data, SECRET_KEY, ALGORITHM)
        sql = f'''
            INSERT INTO team2.login
            (`id`,`userNo`,`token`)
            VALUE
            ('{id}',{no},'{token}')
            ;
            '''
        if save(sql): return id
    except JWTError as e:
        print(f"JWT ERROR : {e}")
    return None

def get_user(user: str = Cookie(None)):
    if user:
        sql = f"select * from team2.login where `id`= '{user}'"
        result = findOne(sql)
        if result:
            return jwt.decode(result["token"], SECRET_KEY, algorithms=ALGORITHM)
    return None


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": True, "msg": "Hello World"}

# @app.post("/login")
# def login(model: LoginModel):
#     sql = f"""
#         select * from team2.user where `email` = '{model.email}' and `password` = '{model.pwd}'
#         """
#     data = findOne(sql)
#     if data:
#         access_token = set_token(data["no"], data["email"])
#     return {"status": True, "model": model, "access_token": access_token}

# @app.post("/token")
# def token():
#     result = set_token(1,"asdf@asdf")
#     return {"status": True, "token" : result}

@app.post("/login")
def login(model: LoginModel, response: Response):
    sql = settings.login_sql.replace("{email}", model.email).replace("{pwd}", model.pwd)
    data = findOne(sql)
    if data:
        access_token = set_token(data["no"], data["email"])
        print(access_token)
        response.set_cookie(
        key="user",
        value=access_token,
        max_age=3600,        
        expires=3600,        
        path="/",
        domain="localhost",
        secure=True,            # HTTPS에서만 전송
        httponly=True,          # JS 접근 차단 (⭐ 보안 중요)
        samesite="lax",         # 'lax' | 'strict' | 'none'
      )
        return {"status": True}
    else: 
        return {"status": False}
    
@app.get("/me")
def me(payload = Depends(get_user)):
    if payload:
        return {"status":True, "me": payload["email"]}
    else:
        return {"status":False}

@app.post("/logout")
def logout(response: Response):
    response.delete_cookie(key="user")
    return {"status": True}
