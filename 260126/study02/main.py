from fastapi import FastAPI, Query
from fastapi.staticfiles import StaticFiles
import os
import requests

app = FastAPI()

static_dir = os.path.join(os.path.dirname(__file__), "update")
app.mount("/update", StaticFiles(directory=static_dir), name="update")

REST_API_KEY = "d1eb0499f38d184756f4bcaa6937fed2"
REDIRECT_URI = "http://localhost:8000/auth/kakao"

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/auth/kakao")
async def kakao_callback(code: str = Query(None)):
    # 1. 토큰 요청
    token_url = "https://kauth.kakao.com/oauth/token"
    data = {
        "grant_type": "authorization_code",
        "client_id": REST_API_KEY,
        "redirect_uri": REDIRECT_URI,
        "code": code,
    }
    token_res = requests.post(token_url, data=data).json()
    access_token = token_res.get("access_token")

    # 2. 사용자 정보 요청
    user_info_url = "https://kapi.kakao.com/v2/user/me"
    headers = {"Authorization": f"Bearer {access_token}"}
    user_info = requests.get(user_info_url, headers=headers).json()

    return {"user_info": user_info}