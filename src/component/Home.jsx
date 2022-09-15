import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0">
                
                <img src="https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg" className="card-img" alt="Background" height="550px" />

                <div className="card-img-overlay d-flex flex-column justify-content-around-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
                <Products />
            </div>

        </div>
    )
}

export default Home;