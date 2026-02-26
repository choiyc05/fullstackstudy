import { useNavigate } from "react-router";

const BoardView = () => {
	const navigate = useNavigate();

	return (
		<div className="container mt-3">
			<h1 className="display-1 text-center">게시글 상세</h1>
			<form>
				<div className="mb-3 mt-3">
					<label htmlFor="title" className="form-label">제목</label>
					<input type="text" className="form-control" id="title" name="title" readOnly="readonly" value="제목" />
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="name" className="form-label">작성자</label>
					<input type="text" className="form-control" id="name" name="name" readOnly="readonly" value="이름" />
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="content" className="form-label">내용</label>
					<textarea type="text" className="form-control h-50" rows="10" id="content" name="content" value="내용" readOnly="readonly"></textarea>
				</div>
				<div className="d-flex">
					<div className="p-2 flex-fill d-grid">
						<button type="submit" onClick={()=>navigate("/board/boardedit")} className="btn btn-primary">수정</button>
					</div>
					<div className="p-2 flex-fill d-grid">
						<button type="submit" className="btn btn-primary">삭제</button>
					</div>
					<div className="p-2 flex-fill d-grid">
						<button type="button" onClick={()=>navigate("/")} className="btn btn-primary">취소</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default BoardView