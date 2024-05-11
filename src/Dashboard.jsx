import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';


function Dashboard() {

    const [longurl, setLongurl] = useState("");
    const [shorturls, setShortUrls] = useState("");
    const [showCard, setShowCard] = useState(false);
    const [enteredLongUrl, setEnteredLongUrl] = useState(""); // Store entered long URL separately
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/createshorturl', { longurl })
            .then(response => {
                console.log(response)
                const newShortUrl = response.data.shorturl;
                const newLongUrl = longurl;
                setShortUrls([...shorturls, { long: newLongUrl, short: newShortUrl }]);
                setShowCard(true); // Show the card
                setEnteredLongUrl(longurl); // Store entered long URL before clearing
                //clear the form
                setLongurl("")
                setError("");

            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='d-flex text-center' style={{ marginTop: "150px" }}>
                    <div className='col-lg-12'>
                        <div className="d-flex justify-content-center">
                            <div className="input-group w-auto">
                                <form onSubmit={handleSubmit} className="input-group w-auto">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter URL"
                                        name='long'
                                        id='long'
                                        aria-label="Example input"
                                        aria-describedby="button-addon1"
                                        style={{ width: "700px" }}
                                        value={longurl}
                                        onChange={(e) => setLongurl(e.target.value)}
                                    />
                                    <button
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-primary"
                                        type="submit"
                                        id="button-addon1"
                                        data-mdb-ripple-color="dark"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Conditional rendering of cards */}
            {showCard && (
                <div className="container mt-4 mb-4 bt-3">
                    <div className="row">
                        {shorturls.map((url, index) => (
                            <div key={index} className='col-lg-12'>
                                <div className="card mt-3" style={{ backgroundColor: "grey" }}>
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            Clicked Count
                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                            <p>Long URL: <a href={url.long} target="_blank">{url.long}</a></p>
                                            <p>Short URL: <a href={url.short} target="_blank">{url.short}</a></p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

}

export default Dashboard