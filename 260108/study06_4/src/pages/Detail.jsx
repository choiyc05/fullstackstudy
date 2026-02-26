import { useNavigate, useParams } from "react-router"
import { list } from "@/data.js"
import { useState, useEffect } from "react";

const Detail = () => {
    const navigate = useNavigate();
    const navigateList = () => navigate('/');
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [accept,setAccept] = useState(0);
    const params = useParams();
    const [isedit, setIsedit] = useState(true);
    const onSubmit = e => {
        e.preventDefault();
        const data = {title, content, accept};
        console.log(data);
    }
    useEffect (()=>{
        const data = list[params.id];
        if ( data === undefined ) return navigateList();
        setTitle(data.title);
        setContent(data.content);
        setAccept(data.accept);
    },[]);

    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" required autoComplete="off" 
                value={title} readOnly={isedit} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="content" className="form-label">Content:</label>
                <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autoComplete="off" 
                value={content} readOnly={isedit} onChange={e=>setContent(e.target.value)} />
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="submit" onClick={()=>setIsedit(!isedit)}>{isedit === true ? "수정" : "저장"}</button>
                    <button className={` ${accept === 1 ? "btn btn-success" : "btn btn-warning"}`} type="button" 
                    onClick={()=>setAccept( accept ===1 ? 2 : 1)} >{accept === 1 ? "승인" : "미승인"}</button>
                    <button type="button" className="btn btn-secondary" onClick={navigateList}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default Detail;