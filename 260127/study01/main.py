from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

arr = []

@app.get("/", response_class=HTMLResponse)
def root(txt: str = ""):
    print(f"전역 배열 : {arr}")
    print(f"전달 받은 변수 : {txt}")
    if txt == "":
        return """
        <body>
            <form>
                <input type="text" name="txt" />
                <button type="submit">전송</button>
            </form>
        </body>
        """
    else:
        arr.append(txt)
        html = ""
        for v in arr:
            html += f"<li>{v}</li>"
        return f"""
        <body>
            {html}
            <a href="/">돌아가기</a>
        </body>
        """
    
