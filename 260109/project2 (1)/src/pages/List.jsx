import { useState, useEffect } from 'react'
import { list } from '@/data.js'
import { useNavigate } from 'react-router'

const List = () => {
  const [state, setState] = useState(0)
  const [arrs, setArrs] = useState([])
  const navigate = useNavigate()
  /*const navi = navigate(`/detail/:${i}`)*/

  useEffect(() => {
    if (state === 1 || state === 2) setArrs(list.filter(v => v.accept === state))
    else setArrs([...list])
  }, [state])


  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">LIST</h1>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-secondary" onClick={() => setState(0)} >전체</button>
        <button className="btn btn-success" onClick={() => setState(1)}>승인</button>
        <button className="btn btn-warning" onClick={() => setState(2)}>미승인</button>
        <button onClick={() => navigate('/new')} className="btn btn-primary">추가</button>
      </div>
      <div className="list-group mt-2 text-center">
        {
          arrs.map((v, i) =>
            <button key={i} onClick={() => navigate(`/detail/${i}`)}
              className={`list-group-item m-1 display-6 ${v.accept === 1 ? "list-group-item-success" : "list-group-item-warning"}`}>{v.title}</button>
          )
        }
      </div>
    </div>
  )
}
export default List