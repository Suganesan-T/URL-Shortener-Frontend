import React from 'react'
import userService from './services/userInstance'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Activated() {
    let { token } = useParams();
    const navigate = useNavigate()

    // axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(token)
        axios.get(`https://url-shortener-backend-l2je.onrender.com/activatelink/${token}`)
        .then(responce => {
            alert(responce.data.message)
    
            //redirect to login page
            setTimeout(() => {
              navigate("/")
            }, 500);
          })
          .catch(error => {
            alert(error.response.data.message);
        })
    }

  return (
    <div className="my-5">

            <div className="container py-5" style={{ backgroundColor: "pink" }}>
                <div className="text-center">
                    <h1 className="text-body-emphasis">Two Step Verification</h1>
                </div>
                <p className="col-lg-8 mx-auto lead">
                    You have registered your account successfully, to login your account complete activation process<br/>
                    Click Activate Account to activate your account 
                </p>
                <button className="btn btn-primary" onClick={handleSubmit}>Activate Account</button>
            </div>
        </div>
  )
}

export default Activated