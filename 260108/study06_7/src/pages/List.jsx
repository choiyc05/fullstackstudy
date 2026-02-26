import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { list } from "@/data.js";

const List = () => {
    const navigate = useNavigate();
    const navigateDetail = i => navigate(`/detail/${i}`);
    const navigateCreate = () => navigate(`/new`);
    const [state, setState] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (state === 1 || state === 2) setData(list.filter(v => v.accept === state))
        else setData([...list]);
    
    }, [state]);

    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">LIST</h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" onClick={() => setState(0)} className="btn btn-secondary">전체</button>
                <button type="button" onClick={() => setState(1)} className="btn btn-success">승인</button>
                <button type="button" onClick={() => setState(2)} className="btn btn-warning">미승인</button>
                <button type="button" onClick={navigateCreate} className="btn btn-primary">추가</button>
            </div>
            <div className="list-group mt-2 text-center">
                {
                    data.map((v, i) =>
                        <button key={i} type="button" className={`list-group-item m-1 display-6 
                            ${v.accept === 1 ? "list-group-item-success" : "list-group-item-warning"}`} onClick={() => navigateDetail(i)}>{v.title}</button>
                    )
                }
            </div>
        </div>
    )
}

export default List;