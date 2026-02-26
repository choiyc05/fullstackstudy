import { useNavigate, useLocation } from "react-router"

const Div = props => {
    return (
        <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">이름:</label>
            <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" value={selectedUser?.name || ""} readOnly="readonly" />
        </div>
    )
}

const Button = props => 
    <div className="p-2 flex-fill d-grid">
        <button onClick={props.onClick} className="btn btn-primary">{props.label}</button>
    </div>

const Select = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/')
    const location = useLocation();
    const userKey = location.state?.userKey;
    const userdata = [{ key : 1, name : "스티븐", email : "jobs@shellfolder.com", pwd : "111", gender : 1 },
                    { key : 2, name : "에브릴", email : "lavigne@shellfolder.com", pwd : "222", gender : 2 }]
    const selectedUser = userdata.find( v => v.key === userKey)

    return (
        <div className="container mt-3">
        <h1 className="display-1 text-center">사용자 정보</h1>
            <form>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">이름:</label>
                <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" value={selectedUser?.name || ""} readOnly="readonly" />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">이메일:</label>
                <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={selectedUser?.email || ""} readOnly="readonly" />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">비밀번호:</label>
                <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={selectedUser?.pwd || ""} readOnly="readonly" />
            </div>
                <div className="d-flex">
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="gender1" name="gender" defaultChecked={selectedUser?.gender === 1} />남성
                        <label className="form-check-label" htmlFor="radio1"></label>
                    </div>
                </div>
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="gender2" name="gender" defaultChecked={selectedUser?.gender === 2} />여성
                        <label className="form-check-label" htmlFor="radio2"></label>
                    </div>
                </div>
                </div>
            </form>
            <div className="d-flex">
            <Button onClick={navigateList} label={"수정"} />
            <Button onClick={navigateList} label={"삭제"} />
            <Button onClick={navigateList} label={"취소"} />
            </div>
        </div>
        
    )
}

export default Select