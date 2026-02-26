import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";
import { data } from "@/data.js"

const Detail = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/');
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [accept, setAccept] = useState(0);
    const params = useParams();
    const [isEdit, setIsedit] = useState(true);
    const onSubmit = e => {
        e.preventDefault();
        const chosenuser = { title, content, accept };
        console.log(chosenuser);
    }
    useEffect(() => {
        const chosenuser = data[params.key];
        if (chosenuser === undefined) return navigateList();
        setTitle(chosenuser?.title);
        setContent(chosenuser?.content);
        setAccept(chosenuser?.accept);
    }, []);
    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" required autoComplete="off"
                        value={title} readOnly={isEdit} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content:</label>
                    <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autoComplete="off"
                        value={content} readOnly={isEdit} onChange={e => setContent(e.target.value)} />
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="submit" onClick={() => setIsedit(!isEdit)}>{isEdit === true ? "수정 상태로 변경" : "저장 상태로 변경"}</button>
                    {
                        accept === 1 ?
                            <button className="btn btn-success" type="button" onClick={() => setAccept(2)}>미승인으로 변경</button> :
                            <button className="btn btn-warning" type="button" onClick={() => setAccept(1)}>승인으로 변경</button>
                    }
                    <button type="button" className="btn btn-secondary" onClick={navigateList}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default Detail;