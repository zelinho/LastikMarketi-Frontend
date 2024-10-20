import React from 'react';

function Navbar() {
    const navItems = (
        <>
            <li>
                <details>
                    <summary>Lastikler</summary>
                    <ul className="p-2 bg-customOrange rounded-md text-white" style={{width : 200}}>
                        <li><a href='/Binek'>Binek</a></li>
                        <li><a href='/Dortxdort'>4x4</a></li>
                        <li><a href='/Ticari'>Hafif Ticari</a></li>
                        <li><a href='/Rft'>RFT</a></li>

                    </ul>
                </details>
            </li>
            <li>
                <a >Kampanyalar</a>
            </li>
            <li>
                <a href="/Hakkında">Lastik Hakkında</a>
            </li>
        </>
    );
    return (
        <>
        <div className='fixed top-0 left-0 right-0 bg-white  z-50'>
            <div className=" max-w-screen-2x-1 container mx-auto md:px-20 px-4">
                <div className="navbar bg-base-100">
                    <div className="navbar-start px-10">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a href="/" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-link"><img src="https://www.lastik.com.tr/medias/lastik-logo.svg?context=bWFzdGVyfGltYWdlc3wzOTk5OHxpbWFnZS9zdmcreG1sfGFHSTJMMmcxWVM4NE9EUXdOREExTmpRM016a3dMMnhoYzNScGF5MXNiMmR2TG5OMlp3fGY2ZjRjOGUzMjI2OTg4MDU1ODhhNTFiZjhlNGRlY2VjMzAyYTg4MzcyZDQzMDEyMDczZTY4NjRiN2VmZmNkMmE" alt="" className='h-26 w-26 lg:h-26 lg:w-32' /></a>

                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-10 z-50">
                                {navItems}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li>
                                <a className='text-customGrey'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.997 10.974H21C21.551 10.974 21.999 11.42 22 11.971C22.008 14.642 20.975 17.157 19.091 19.051C17.208 20.945 14.7 21.992 12.029 22H12C9.339 22 6.836 20.968 4.949 19.091C3.055 17.208 2.008 14.7 2 12.029C1.992 9.357 3.025 6.843 4.909 4.949C6.792 3.055 9.3 2.008 11.971 2C12.766 2.012 13.576 2.092 14.352 2.278C14.888 2.408 15.219 2.948 15.089 3.485C14.96 4.021 14.417 4.351 13.883 4.223C13.262 4.073 12.603 4.01 11.977 4C9.84 4.006 7.833 4.844 6.327 6.359C4.82 7.874 3.994 9.886 4 12.023C4.006 14.16 4.844 16.166 6.359 17.673C7.869 19.174 9.871 20 12 20H12.023C14.16 19.994 16.167 19.156 17.673 17.641C19.18 16.125 20.006 14.114 20 11.977C19.999 11.425 20.445 10.975 20.997 10.974ZM8.293 11.2929C8.684 10.9019 9.316 10.9019 9.707 11.2929L11.951 13.5369L18.248 6.3409C18.612 5.9279 19.243 5.8839 19.659 6.2479C20.074 6.6109 20.116 7.2429 19.752 7.6589L12.752 15.6589C12.57 15.8669 12.31 15.9899 12.033 15.9999H12C11.735 15.9999 11.481 15.8949 11.293 15.7069L8.293 12.7069C7.902 12.3159 7.902 11.6839 8.293 11.2929Z" fill="#2E343B" fill-opacity="0.48" />
                                    </svg>

                                    Sipariş Takibi</a>
                            </li>
                            <li>
                                <a  href="/Login" className='text-customOrange'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM19 20C19 20.552 18.553 21 18 21H6C5.447 21 5 20.552 5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20Z" fill="#231F20" />
                                        <mask id="mask0"  maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                                            <path  d="M16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM19 20C19 20.552 18.553 21 18 21H6C5.447 21 5 20.552 5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0)">
                                            <rect width="24" height="24" fill="#E76E3C" />
                                        </g>
                                    </svg>

                                    Giriş Yap | Üye Ol</a>
                            </li>
                        </ul>
                    </div>


                    <div className="dropdown dropdown-end pr-16">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">0 Ürün</span>
                                <span className="text-info">Toplam: ₺0</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">Ödemeye Geç</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar
