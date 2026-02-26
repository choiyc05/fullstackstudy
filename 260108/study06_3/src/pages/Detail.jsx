import { list } from "@/data.js"
import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";

const Detail = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/');
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [accept, setAccept] = useState(0);
    const [isEdit, setIsEdit] = useState(true);
    const params = useParams();
    const onSubmit = e => {
        e.preventDefault()
    }

    useEffect (()=>{
        const data = list[params.id];
        if (data === undefined) return navigateList();
        setTitle(data.title);
        setContent(data.content);
        setAccept(data.accept);
    },[])


    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" required autoComplete="off" 
                value={title} readOnly={isEdit} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="content" className="form-label">Content:</label>
                <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autoComplete="off" 
                value={content} readOnly={isEdit} onChange={e=>setContent(e.target.value)} /> 
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="submit" onClick={()=>setIsEdit(!isEdit)}>{ isEdit === true ? "수정" : "저장" }</button>
                    {/* <!-- 승인 & 미승인 교차 하여 화면 표현 하시오. --> */}
                    <button className="btn btn-success" type="button">승인</button>
                    <button className="btn btn-warning" type="button">미승인</button>
                    <button type="button" className="btn btn-secondary" onClick={navigateList}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default Detail;