import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import imageSrc from './Image/image.png'
function Home() {
    return (
        <div>
            <Header />
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">QuickLink: Instant URL Shortener</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"> QuickLink is your go-to solution for instantly shortening long URLs into concise and shareable links. With a simple and intuitive interface, QuickLink makes it effortless to create shortened URLs, perfect for social media, messaging, and more. Say goodbye to lengthy URLs and hello to convenience with QuickLink!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <Link to="/create-url"><button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Create Your URL</button></Link>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
                    <div className="container px-5">
                        <img src={imageSrc} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home