import { useNavigate } from "react-router"

const Button = props => 
    <div className="p-2 flex-fill d-grid">
        <button onClick={props.onClick} className="btn btn-primary">{props.label}</button>
    </div>

const Create = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/')
    const navigateSelect = () => navigate('/select')

    return (
        <div className="container mt-3">
        <h1 className="display-1 text-center">사용자 등록</h1>
            <form>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">이름:</label>
                <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">이메일:</label>
                <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">비밀번호:</label>
                <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" />
            </div>
                <div className="d-flex">
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="gender" value="1" defaultChecked />남성
                        <label className="form-check-label" htmlFor="radio1"></label>
                    </div>
                </div>
                <div className="p-2 flex-fill">
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="gender" value="2" />여성
                        <label className="form-check-label" htmlFor="radio2"></label>
                    </div>
                </div>
                </div>
            </form>
            <div className="d-flex">
            <Button onClick={navigateSelect} label={"생성"} />
            <Button onClick={navigateList} label={"취소"} />
            </div>
        </div>
    )
}

export default Create