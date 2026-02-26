import axios from "axios"
import { jwtDecode } from "jwt-decode"

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
})

const Login = () => {
    const submitEvent = e => {
        e.preventDefault()
        const params = { "email": e.target.email.value, "pwd": e.target.pwd.value }
        console.log("확인", params)
        // api.post('/login', params)
        // .then(res => {
        //     console.log(res.data)
        //     if(res.data.status) {
        //         console.log(jwtDecode(res.data.access_token))
        //     } 
        // })
        // .catch(err => console.log(err))
        api.post('/login', params)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    const meEvent = () => {
        api.get("/me")
            .then(res => {
                console.log(res)
                if (res.data.status) alert(res.data.me)
            })
    }

    return (
        <div className="container mt-3">
            <h1 className="display-1 text-center">로그인</h1>
            <form onSubmit={submitEvent}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" required={true} autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">비밀번호</label>
                    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" required={true} autoComplete="off" />
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill d-grid">
                        <button type="submit" className="btn btn-primary">로그인</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" className="btn btn-primary" onClick={meEvent}>취소가 아니라 현재 로그인 정보</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login