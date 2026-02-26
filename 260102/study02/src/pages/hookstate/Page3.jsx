import { useState } from "react"

const Page3 = () => {
    const [array, setArray] = useState([])
    const [txt, setTxt] = useState('')
    const SubmitEvent = e => {
        e.preventDefault()          // form의 기본 성질 event를 방지해줌. 작성해야 다음 행들 작동
        if(txt === '') return       // 빈칸 패스
        setArray([txt, ...array])
        setTxt('')                  //input창 초기화
    }
    
    return (
        <form onSubmit={SubmitEvent}>
            <input className="m-2" type='text' placeholder="글을 작성하세요." 
                value={txt} onChange={e => {setTxt(e.target.value)}} />
            <button className="btn btn-primary m-2" type='submit'>입력</button>
            <div className="ms-2">
                {
                    array.toReversed().map((v,i) => <p key={i}>{v}</p>)
                }
            </div>
        </form>
    )
}

export default Page3