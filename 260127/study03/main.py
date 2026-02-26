from fastapi import FastAPI, Query
import requests

app = FastAPI()

REST_API_KEY = "342b504de6e4e180d8a739d0a4503130"
REDIRECT_URI = "http://localhost:8000/callback"

@app.get("/callback")
async def kakao_callback(code: str = Query(None)):
    if not code:
        return {"error": "인가 코드를 받지 못했습니다."}

    # 1. 인가 코드를 카카오에 주고 '액세스 토큰' 받아오기 (POST 요청)
    token_url = "https://kauth.kakao.com/oauth/token"
    token_data = {
        "grant_type": "authorization_code",
        "client_id": REST_API_KEY,
        "redirect_uri": REDIRECT_URI,
        "code": code
    }
    token_res = requests.post(token_url, data=token_data)
    tokens = token_res.json()
    
    # 2. 받아온 '액세스 토큰'으로 내 프로필 정보 가져오기 (GET 요청)
    access_token = tokens.get("access_token")
    user_info_url = "https://kapi.kakao.com/v2/user/me"
    user_res = requests.get(
        user_info_url, 
        headers={"Authorization": f"Bearer {access_token}"}
    )
    
    # 브라우저에 결과 출력
    return {
        "received_tokens": tokens,
        "my_profile": user_res.json()
    }

if __name__ == "__main__":
    import uvicorn
    # 서버 실행: 8000번 포트에서 기다립니다.
    uvicorn.run(app, host="0.0.0.0", port=8000)