import { useState } from "react"


const Page1 = () => {
    const [data, setData] = useState(1)
    let 변수 = 0
    // console.log(data, 변수)

    const event = () => {
        setData(data + 1)
        변수 += 1
    }

    return (
        <>
            <button type="button" onClick={event}>증가</button>
        </>
    )
}

export default Page1