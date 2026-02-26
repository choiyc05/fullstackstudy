import { useNavigate, useParams } from "react-router";
import { list } from "@/data.js";
import { useEffect, useState } from "react";

const User = () => {
    const navigate = useNavigate();
    const navigateMain = () => navigate(`/`);
    const params = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [job, setJob] = useState("");
    const [gender, setGender] = useState(0);
    const [isedit, setIsedit] = useState(true);
    useEffect(() => {
        const data = list[params.id-1];
        if (data === undefined) return navigateMain();
        setName(data.name);
        setEmail(data.email);
        setPwd(data.pwd);
        setJob(data.job);
        setGender(data.gender)
    }, [])

    const onSubmit = e => {
        e.preventDefault();
        if (isedit === false) return
        const data = { name,email,pwd,job,gender };
        console.log(data);
    }
    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">User</h1>
            <img src={`/images/img_avatar${gender}.png`} className="d-block mx-auto mt-3 profile-image" />
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required readOnly={isedit} 
                    value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required readOnly={isedit} 
                    value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required readOnly={isedit}
                    value={pwd} onChange={e => setPwd(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="job">Job:</label>
                    <input type="text" className="form-control" id="job" placeholder="Enter job" name="job" readOnly={isedit} value={job} 
                    onChange={e => setJob(e.target.value)}/>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="gender1" name="gender" checked={gender===1} disabled={isedit} onChange={() => setGender(1)}/>남성
                            <label className="form-check-label" htmlFor="gender1"></label>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="gender2" name="gender" checked={gender===2} disabled={isedit} onChange={() => setGender(2)}/>여성
                            <label className="form-check-label" htmlFor="gender2"></label>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill d-grid">
                        <button type="submit" className="btn btn-success" onClick={()=>setIsedit(!isedit)}>{isedit===true?"edit":"confirm"}</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" onClick={navigateMain} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default User