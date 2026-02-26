import { useNavigate } from "react-router";
import { useAuth } from '@hooks/AuthProvider.jsx'
import { useState } from "react";


const Login = () => {
	const navigate = useNavigate();
	const navigateMain = () => navigate("/")
	const { setAuth } = useAuth()
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const submitEvent = e => {
		e.preventDefault()
		console.log("이메일 : ", email, "비밀번호 : ", pwd)
		setAuth(true)
	}

	return (
		<div className="container mt-3">
			<h1 className="display-1 text-center">로그인</h1>
			<form onSubmit={submitEvent}>
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">이메일</label>
					<input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" required={true} autoComplete="off" onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="mb-3">
					<label htmlFor="pwd" className="form-label">비밀번호</label>
					<input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" required={true} autoComplete="off" onChange={e => setPwd(e.target.value)} />
				</div>
				<div className="d-flex">
					<div className="p-2 flex-fill d-grid">
						<button type="submit" className="btn btn-primary">로그인</button>
					</div>
					<div className="p-2 flex-fill d-grid">
						<button type="button" onClick={navigateMain} className="btn btn-primary">취소</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login