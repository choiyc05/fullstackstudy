from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from settings import settings

origins = [ settings.react_url ]

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
  return { "status": True }

class backUp(BaseModel):
    title: str = ""
    content: str = ""

@app.post("/backup")
def backup(backup: backUp):
    if backup.title or backup.content:
        return { "backup": True, "title": backup.title, "content": backup.content }
    return {"backup": False}