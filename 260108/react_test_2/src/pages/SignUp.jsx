import { useNavigate } from "react-router";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const navigateMain = () => navigate(`/`);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [job, setJob] = useState("");
    const [gender, setGender] = useState(1);
    const onSubmit = e => {
        e.preventDefault();
        const data = { name, email, pwd, job, gender }
        console.log(data);
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">SignUp</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required value={pwd} onChange={e => setPwd(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="job">Job:</label>
                    <input type="text" className="form-control" id="job" placeholder="Enter job" name="job" value={job} onChange={e => setJob(e.target.value)} />
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="gender" value="1" defaultChecked onChange={() => setGender(1)} />남성
                            <label className="form-check-label" htmlFor="radio1"></label>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="gender" value="2" onChange={() => setGender(2)} />여성
                            <label className="form-check-label" htmlFor="radio2"></label>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-fill d-grid">
                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </div>
                    <div className="p-2 flex-fill d-grid">
                        <button type="button" onClick={navigateMain} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;