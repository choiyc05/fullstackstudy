import { useNavigate } from "react-router";
import { useState } from "react";
import { list } from "@/data.js";

const SignIn = () => {
    const navigate = useNavigate();
    const navigateMain = () => navigate(`/`);
    const navigateSignup = () => navigate(`/signup`);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const checkUser = list.filter(v => v.email === email && v.pwd === pwd)

        if (checkUser[0] !== undefined) console.log(`${checkUser[0].name}님 환영합니다.`)

        else console.log("로그인에 실패 하였습니다.")
    }
    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">SignIn</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required
                        value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill d-grid">
                        <button type="submit" className="btn btn-warning">SignIn</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" onClick={navigateSignup} className="btn btn-primary">SignUp</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" onClick={navigateMain} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;