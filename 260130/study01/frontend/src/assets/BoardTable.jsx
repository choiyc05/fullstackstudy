const BoardTable = props => {

    return (
        <table className="table table-hover mt-3 text-center">
            <thead className="table-dark">
                <tr>
                    <th>no</th>
                    <th>게시글</th>
                    <th>작성자</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((v, i) => {
                        return (
                            <tr key={i} style={{ "cursor": "pointer" }} className="cursor-pointer" onClick={props.onClick}>
                                <td>{v.no}</td>
                                <td>{v.title}</td>
                                <td>{v.editor}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default BoardTable