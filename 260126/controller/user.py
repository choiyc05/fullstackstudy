from fastapi import APIRouter
from configs.db import getConn
import mariadb

router = APIRouter(prefix="/user", tags=["사용자"])

@router.get(
        path="",
        summary="사용자 목록",
        description = "edu.userinfo 테이블 전체 가져오기"
        )
def user():
    try:
        conn = getConn()
        if conn:
            conn = getConn()
            cur = conn.cursor()
            sql = "select * from edu.userinfo"
            cur.execute(sql)
            columns = [desc[0] for desc in cur.description]
            rows = cur.fetchall()
            result = [dict(zip(columns, row)) for row in rows]
            return {"status": True, "result" : result}
    except mariadb.Error as e:
        print(f"sql 오류 : {e}")   
    return {"status": False} 
    

@router.post("")
def user():
    return {"Hello": "World"}

@router.put("")
def user():
    return {"Hello": "World"}

@router.delete("")
def user():
    return {"Hello": "World"}