from fastapi import APIRouter
from controller import root, user, board

router = APIRouter()

def urls():
    return [root.router, user.router, board.router]

apis = urls()
for r in apis:
    router.include_router(r)
