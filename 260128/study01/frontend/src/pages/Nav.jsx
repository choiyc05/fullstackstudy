import { useNavigate } from "react-router";
import { useAuth } from '@hooks/AuthProvider.jsx'

const Nav = () => {
    const navigate = useNavigate();
    const { isLogin, removeAuth } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a style={{"cursor":"pointer"}} className="navbar-brand" onClick={() => navigate("/")}>TEAM2</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" me-auto="true">
                        {
                            !isLogin &&
                            <>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" onClick={() => navigate("/login")}>로그인</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" onClick={() => navigate("/signup")}>회원가입</button>
                                </li>
                            </>
                        }
                        {
                            isLogin &&
                            <>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" onClick={() => removeAuth()}>로그아웃</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" onClick={() => navigate("/userview")}>회원정보</button>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;