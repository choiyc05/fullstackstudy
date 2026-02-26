import { useNavigate } from "react-router";
import { list } from "@/data.js";
import { useEffect, useState } from "react";

const Main = () => {
    const navigate = useNavigate();
    const navigateSignin = () => navigate(`/signin`);
    const navigateSignup = () => navigate(`/signup`);
    const navigateUser = i => navigate(`/user/${i}`)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...list]);
    }, [])
    return (
        <div className="container mt-3">
            <h1 className="text-center bg-success text-dark bg-opacity-50">MAIN</h1>
            <div className="btn-group">
                <button type="button" className="btn btn-warning" onClick={navigateSignin}>SignIn</button >
                <button type="button" className="btn btn-primary" onClick={navigateSignup}>SignUp</button >
            </div>
            <div className="row mt-2">
                {
                    data.map((v, i) =>
                        <div key={i} className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <img className="card-img-top" src={`/images/img_avatar${v.gender}.png`} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{v.name}</h4>
                                    <p className="card-text">{v.job}</p>
                                    <button type="button" onClick={() => navigateUser(i+1)} className="btn btn-primary">See Profile</button >
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Main;