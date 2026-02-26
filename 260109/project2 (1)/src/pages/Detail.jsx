import { useState, useEffect } from 'react'
import { list } from '@/data.js'
import { useNavigate, useParams } from 'react-router'

const Detail = () => {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [accept, setAccept] = useState(1);
  const nav = useNavigate()

  useEffect(() => {

    const data = list[params.id]
    if (data === undefined) nav('/')
      console.log(data)
    setTitle(data.title);
    setContent(data.content);
    setAccept(data.accept);
  }, [])


  return (
    <div className="container mt-3">
      <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} name="title" required autoComplete="off" onChange={(e)=>setTitle(e.target.value)}/> 
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autoComplete="off" value={content} onChange={(e)=>setContent(e.target.value)} />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="submit">수정</button>
          {/*<!-- 승인 & 미승인 교차 하여 화면현//시오. -->/*/}
          <button className="btn btn-success" type="button">승인</button>
          <button className="btn btn-warning" type="button">미승인</button>
          <a className="btn btn-secondary" href="list.html">취소</a>
        </div>
      </form>
    </div>
  )
}
export default Detail