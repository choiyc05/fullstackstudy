const Create = () => {
  return (
    <div className="container mt-3">
        <h1 className="text-center bg-success text-dark bg-opacity-50">CREATE</h1>
        <form action="detail.html">
            <div className="mb-3 mt-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" required autoComplete="off" />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content:</label>
              <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autoComplete="off" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2" type="submit">생성</button>
                <button type="button" className="btn btn-warning" href="list.html">취소</button>
            </div>
        </form>
    </div>
  )
}

export default Create;