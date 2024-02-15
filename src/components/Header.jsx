import React from 'react';
import banner from './../assets/images/banner.png'

const Header = () => {
    return (
        <>
           <header className="bg-dark">
            <div className="">
                    <div className="text-center text-white">
                        <img className="img-fluid" style={{ height: "200px",objectFit:"fill" }} src={banner} alt="banner-style" />
                    {/* <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p> */}
                </div>
            </div>
        </header> 
        </>
    );
};

export default Header;