import { useNavigate, useLocation } from 'react-router'

const Div = props => {
    return (
        <div className="mb-3 mt-3">
        <label htmlFor={props.for} className="form-label">{props.label}</label>
        <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} value={props.value} readOnly="readonly" />
        </div>
    )
}
const Gender = props => {
    return (
        <div className="p-2 flex-fill">
        <div className="form-check">
        <input type="radio" className="form-check-input" name="gender" checked={props.checked} readOnly/>{props.label}
        <label className="form-check-label" htmlFor="radio1"></label>
        </div>
        </div> 
    )
}
const Button = props => {
    return (
        <div className="p-2 flex-fill d-grid">
        <button onClick={props.onClick} className="btn btn-primary">{props.label}</button>
        </div>
    )
}
const Select = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/');
    const location = useLocation();
    const userKey = location.state?.userKey;

    const userdata = [{ key : 1, name : "스티븐", email : "jobs@shellfolder.com", pwd : "111", gender : true },
               		 { key : 2, name : "에브릴", email : "lavigne@shellfolder.com", pwd : "222", gender : false }];
	
	const user = userdata.find(v=> v.key === userKey); 

    return (
    <div className="container mt-3">
        <h1 className="display-1 text-center">사용자 정보</h1>
        <form>
            <Div for={"name"} label={"이름:"} type={"text"} id={"name"} placeholder={"이름을 입력하세요."} value={user?.name || ""} />
            <Div for={"email"} label={"이메일:"} type={"email"} id={"email"} placeholder={"이메일를 입력하세요."} value={user?.email || ""} />
            <Div for={"pwd"} label={"비밀번호:"} type={"password"} id={"pwd"} placeholder={"비밀번호를 입력하세요."} value={user?.pwd || ""} />
            <div className="d-flex">
            <Gender checked={user?.gender === true} label={"남성"} />
            <Gender checked={user?.gender === false} label={"여성"} />
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