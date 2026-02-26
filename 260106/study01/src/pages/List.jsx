import { useNavigate } from 'react-router'

const Div = props => {
    return (
    <>
        <h1 className="display-1 text-center">사용자 목록</h1>
        <div className="btn-group">
            <button onClick={props.onClick} className="btn btn-primary">사용자 추가</button>
        </div>
    </>
    )
}    

const Tbody = props => {
    return (
        <tbody>
            {
                props.userdata.map((v,i)=>
                    <tr key={v.key} style={props.style} onClick={()=>props.onClick(v)}>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        <td>{v.regdate}</td>
                    </tr>
                )
            }  
        </tbody>
    )
}

    const List = () => {
    const navigate = useNavigate();
    const navigateCreate = () => navigate('/Create')
    const navigateSelect = v => navigate('/Select', {state : { userKey : v.key }})
    const styles = { cursor : "pointer" }

    const userdata = [{ key : 1, name : "스티븐", email : "jobs@shellfolder.com", regdate : "2023-02-28" },
               		 { key : 2, name : "에브릴", email : "lavigne@shellfolder.com", regdate : "2023-02-27" }]
    
    return (
        <div className="container mt-3">
        <Div onClick={navigateCreate} />
        <table className="table table-hover mt-3">
            <thead className="table-dark">
            <tr>
                <th>이름</th>
                <th>이메일</th>
                <th>가입날짜</th>
            </tr>
            </thead>
            <Tbody userdata={userdata} style={styles} onClick={navigateSelect}/>
        </table>
        </div>
    )
}

export default List