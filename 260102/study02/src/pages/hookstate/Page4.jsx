import { useState } from "react"

const Page4 = () => {
    const [txt, setTxt] = useState({ name: "", email: "" });
console.log(1, txt)
    const [savetxt, setSavetxt] = useState([]);
    const SubmitEvent = e => {
        e.preventDefault();
        if ( txt.name === "" && txt.email === "" ) return
        setSavetxt([txt, ...savetxt])
        setTxt({ name : "", email : ""});
console.log(2, txt)
    }

    return (
        <form onSubmit={SubmitEvent}>                               
            <input type='text' placeholder="name" value={txt.name} onChange={e => {setTxt({...txt, name : e.target.value})}} />
            <input type='email' placeholder="email" value={txt.email} onChange={e => {setTxt({...txt, email : e.target.value})} }  />
            <button type="submit">저장</button>
            <div>
                {
                    savetxt.toReversed().map((v,i) => <p key={i}>{v.name} {v.email}</p>)
                }
            </div>
        </form>
    )
}

export default Page4