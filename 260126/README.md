# 260126

  ## UV 설치 Windows
    powershell -c "irm https://astral.sh/uv/install.ps1 | more"

  ## UV 프로젝트 초기화 프로젝트 폴더 생성 후 실행
    uv init .

  ## FastAPI 모듈 추가
    uv add fastapi --extra standard

  ## FastAPI 기본 설정 main.py
```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```
  ## FastAPI 실행 Service Run
    uv run fastapi dev

  ## http methods와 비교
| HTTP 메서드 | FastAPI 데코레이터 | 주요 용도 (REST API 관습) | 데이터 전달 방식 (일반적) |
| :--- | :--- | :--- | :--- |
| **GET** | `@app.get()` | 리소스 조회 (Read) | Query Parameter, Path Variable |
| **POST** | `@app.post()` | 새로운 리소스 생성 (Create) | Request Body (JSON 등) |
| **PUT** | `@app.put()` | 리소스 전체 수정 (Update) | Request Body, Path Variable |
| **PATCH** | `@app.patch()` | 리소스 일부 수정 (Partial Update) | Request Body, Path Variable |
| **DELETE** | `@app.delete()` | 리소스 삭제 (Delete) | Path Variable |

  ## 기본
```py
@app.get("/")
def read_root():
    return {"Hello": "World"}
```
  한 세트로 맵핑 개념 포함

  ## APIRouter class
    Here's the reference information for the APIRouter class, with all its parameters, attributes and methods.
    You can import the APIRouter class directly from fastapi:

```py
from fastapi import APIRouter
 fastapi.APIRouter

APIRouter(
    *,
    prefix="",                                                       # 공통 주소 설정
    tags=None,
    dependencies=None,
    default_response_class=Default(JSONResponse),
    responses=None,
    callbacks=None,
    routes=None,
    redirect_slashes=True,
    default=None,
    dependency_overrides_provider=None,
    route_class=APIRoute,
    on_startup=None,
    on_shutdown=None,
    lifespan=None,
    deprecated=None,
    include_in_schema=True,
    generate_unique_id_function=Default(generate_unique_id)
)
```