from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os
from controller.urls import router

app = FastAPI()

static_dir = os.path.join(os.path.dirname(__file__), "update")
app.mount("/update", StaticFiles(directory=static_dir), name="update")

app.include_router(router)