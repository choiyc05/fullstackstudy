from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from settings import settings
import base64
import urllib.parse

def base64Decode(data):
  encoded = urllib.parse.unquote(data)
  return base64.b64decode(encoded).decode("utf-8")

origins = [ settings.react_url ]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/board")
def board(request: Request):
  print(f"전체 쿠키: {request.cookies}")
  encoded_boardNo = request.cookies.get("boardNo")
  print(encoded_boardNo, base64Decode(encoded_boardNo))
  boardNo = int(base64Decode(encoded_boardNo))
  return {"boardNo":boardNo}


# boardNo = request.cookies.get("boardNo")
#   print(boardNo, base64Decode(boardNo))
#   boardNo = int(base64Decode(boardNo))
#   return {"boardNo": boardNo}