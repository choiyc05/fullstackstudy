from fastapi import APIRouter

router = APIRouter(prefix="/board", tags=["게시판"])

@router.get("")
def board():
    return {"Hello": "World"}

@router.post("")
def board():
    return {"Hello": "World"}

@router.put("")
def board():
    return {"Hello": "World"}

@router.delete("")
def board():
    return {"Hello": "World"}