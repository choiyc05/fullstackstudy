from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse

app = FastAPI()

arr = []


@app.get("/")
def root(txt: str = ""):
    return {"status": True, "txt": txt}

# Query Parameter(쿼리 매개변수), form data, path variable
@app.post("/{var}")             # 주소 변수 path variable
def root(
    var: str = "",
    id: str = Form(""),
    pwd: str = Form("")
):                              # Form()안에 초기값 입력 가능, 빈값이면 무조건 값 입력이 되어야 한다.
    return {"status": True, "id": id, "pwd": pwd, "var": var}


@app.get("/view", response_class=HTMLResponse)
def view():
    return f"""
        <body>
            <form action="/1" method="post">
                <input type="text" name="id" />
                <input type="password" name="pwd" />
                <button type="submit">요청</button>
            </form>
        </body>
        """
