import { list } from "@/data.js"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react";


const List = () => {
    const navigate = useNavigate();
    const navigateDetail = i => navigate(`/detail/${i}`);
    const [state, setState] = useState(0);
    const [arrs, setArrs] = useState([]);
    useEffect (()=>{
        if ( state === 1 ) setArrs(list.filter(v=>v.accept === 1 ))
        else if ( state === 2 ) setArrs(list.filter(v=> v.accept === 2 ))
        else setArrs([...list])
    },[state])
    

    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">LIST</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" onClick={()=>setState(0)} className="btn btn-secondary">전체</button>
                <button type="button" onClick={()=>setState(1)} className="btn btn-success">승인</button>
                <button type="button" onClick={()=>setState(2)} className="btn btn-warning">미승인</button>
                <button type="button" onClick={()=>navigate('/new')} className="btn btn-primary">추가</button>
            </div>
            <div className="list-group mt-2 text-center">
                {
                    arrs.map((v,i)=>
                        <button key={i} type="button" className={`list-group-item m-1 display-6 
                            ${v.accept === 1 ? "list-group-item-success" : "list-group-item-warning"}`} onClick={()=>navigateDetail(i)}>{v.title}</button>
                    )
                }
            </div>
        </div>  
        
    )
}

export default List;