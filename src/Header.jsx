import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        alert("User Logged out!!")
        setTimeout(() => {
            navigate("/")
        }, 500);

    }
    return (
        <div className="container-fluid  ">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
                <div className="col-md-3 mb-2 mb-md-0">
                    <h5>URL Shortener APP</h5>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/create-url" className="nav-link px-2">Create URL</Link></li>
                    <li><Link to="/created-url" className="nav-link px-2">Created URL</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            </header>
        </div>
    )
}

export default Header