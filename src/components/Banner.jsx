import React from 'react'

function Banner() {
    return (
        <>
            <div style={{
                backgroundImage: "url('home-slide.png')",
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}>
                <div className="max-w-screen-2x-1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20">
                    <div className="w-4/5 bg-customGreen mt-12 ml-16 mr-10 " style={{ borderRadius: 4, position: 'relative', padding: 24 }}>
                        <p className='text-xl text-white '>
                            <h1 >Aracınız için en uygun lastiği bulun</h1>
                        </p>
                        <form className="mt-5">
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <div className="flex items-center mr-4  custom-radio">
                                        <input id="subscribe-yes" type="radio" name="subscription" value="yes" className="form-radio text-white focus:ring-white" />
                                        <label htmlFor="subscribe-yes" className="ml-2 text-white">Lastik Ebatı</label>
                                    </div>
                                    <div className="flex items-center  ml-4 custom-radio">
                                        <input id="subscribe-no" type="radio" name="subscription" value="no" className="form-radio text-white focus:ring-white focus:border-white" />
                                        <label htmlFor="subscribe-no" className="ml-2 text-white">Araç Modeli</label>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="flex flex-wrap ">

                            <div className="w-full md:w-full mb-6 md:mb-0 mt-5 mr-2" style={{ width: 210 }}>
                                <label className="block uppercase tracking-wide text-white text-xs mb-2" >
                                    Marka
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="" disabled selected >Seçiniz</option>
                                        <option>ASTON MARTIN</option>
                                        <option>AUDI</option>
                                        <option>BMW</option>
                                        <option>CITROEN</option>
                                        <option>DACIA</option>
                                        <option>FERRARİ</option>
                                        <option>HYUNDAI</option>
                                        <option>MERCEDES-BENZ</option>
                                        <option>PORSCHE</option>
                                        <option>VOLVO</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full md:w-full mb-6 md:mb-0 mt-5 ml-2 " style={{ width: 210 }}>
                                <label className="block uppercase tracking-wide text-white text-xs  mb-2" >
                                    Model
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="" disabled selected>Seçiniz</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="flex flex-wrap">

                            <div className="w-full md:w-4/12 mb-6 md:mb-0 mt-5 mr-2">
                                <label className="block uppercase tracking-wide text-white text-xs  mb-2" >
                                    Yıl
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="" disabled selected>Seçiniz</option>
                                        <option>2001</option>
                                        <option>2003</option>
                                        <option>2005</option>
                                        <option>2007</option>
                                        <option>2009</option>
                                        <option>2011</option>
                                        <option>2013</option>
                                        <option>2015</option>
                                        <option>2017</option>
                                        <option>2019</option>
                                        <option>2021</option>
                                        <option>2023</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full md:w-3/12 mb-6 md:mb-0 mt-5 mr-2 ml-2">
                                <label className="block uppercase tracking-wide text-white text-xs  mb-2" >
                                    Versiyon
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="" disabled selected>Seçiniz</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full md:w-4/12 mb-6 md:mb-0 mt-5 ml-2">
                                <label className="block uppercase tracking-wide text-white text-xs  mb-2" >
                                    Lastik Ebatı
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value="" disabled selected>Seçiniz</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>

                            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src="https://www.lastik.com.tr/_ui/responsive/theme-brisa/assets/icons/tire2.svg" alt="lastik foto" />
                                <button className="w-full bg-customOrange text-white py-3 px-4 border border-customOrange rounded shadow">
                                    Sonuçları Listele
                                </button>
                            </div>

                            <div className="w-full mt-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <button className="w-full  text-white py-3 px-4 border border-white rounded shadow">
                                    Tümünü Temizle
                                </button>
                            </div>


                        </div>

                    </div>

                    <div className="w-full w-1/2 mr-52 mt-44">
                        <div className='space-y-4'>
                            <div className='w-1/2 '>
                                <h1 className="text-4xl leading-relaxed">Lassa ve Bridgestone Lastiklerde <br /><span className='font-bold'>4 al 3 öde!</span></h1>
                            </div>
                            <p>
                                Üstelik Türkiye geneli ücretsiz montaj seçenekleri
                            </p>

                            <button className="btn btn-outline w-64 text-white">Detaylı Bilgi</button>
                        </div>
                    </div>
                </div>


                <div className="w-1/2 flex justify-center">
                    <div className=" p-3 rounded-lg flex items-center ml-44">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.28C9.78256 1.28 11.4912 1.98813 12.7518 3.24816C14.0118 4.50878 14.72 6.2176 14.72 8C14.72 9.7824 14.0119 11.4912 12.7518 12.7518C11.4912 14.0118 9.7824 14.72 8 14.72C6.2176 14.72 4.5088 14.0119 3.24816 12.7518C1.98816 11.4912 1.28 9.7824 1.28 8C1.28 6.2176 1.98813 4.5088 3.24816 3.24816C4.50878 1.98816 6.2176 1.28 8 1.28ZM8 0C5.87808 0 3.8432 0.84312 2.3432 2.3432C0.8432 3.84328 0 5.87824 0 8C0 10.1218 0.84312 12.1568 2.3432 13.6568C3.84328 15.1568 5.87824 16 8 16C10.1218 16 12.1568 15.1569 13.6568 13.6568C15.1568 12.1567 16 10.1218 16 8C16 5.87824 15.1569 3.8432 13.6568 2.3432C12.1567 0.8432 10.1218 0 8 0Z" fill="white" />
                            <path d="M8.07378 3.75995L8.24628 3.7762C8.67441 3.80307 9.09316 3.91182 9.48002 4.0962C9.82566 4.25495 10.1206 4.50682 10.3313 4.8237C10.4919 5.0737 10.5913 5.35745 10.6206 5.65245C10.6544 5.90809 10.6338 6.16746 10.56 6.41433C10.4688 6.70869 10.31 6.97807 10.0963 7.19996C9.85129 7.44495 9.58378 7.66495 9.29628 7.85746C9.13628 7.96809 8.99378 8.08309 8.84378 8.19809H8.84316C8.70691 8.31058 8.60503 8.45871 8.54753 8.62559C8.51565 8.71184 8.47878 8.79809 8.44503 8.88497C8.36065 9.11997 8.13815 9.27809 7.88815 9.27997C7.75002 9.29497 7.61002 9.2731 7.48315 9.21622C7.28815 9.1206 7.15253 8.93622 7.12003 8.72186C7.06878 8.42435 7.13816 8.11936 7.31191 7.87373C7.45066 7.67123 7.62003 7.49186 7.8144 7.34248C8.02378 7.17123 8.24003 7.00811 8.4544 6.83685C8.63253 6.7006 8.78128 6.53059 8.89253 6.33622C9.07003 5.99872 9.02566 5.5881 8.78066 5.29622C8.65378 5.15747 8.48565 5.06435 8.30066 5.03059C8.05502 4.97309 7.79878 4.97747 7.55502 5.04309C7.30253 5.11246 7.0919 5.28746 6.97752 5.52309C6.90252 5.66372 6.83689 5.80808 6.76627 5.95059C6.71502 6.0581 6.64502 6.15623 6.56002 6.23997C6.41126 6.3706 6.21502 6.43371 6.01752 6.41434C5.89752 6.41121 5.78002 6.37934 5.67502 6.32184C5.47814 6.21934 5.3544 6.01558 5.35502 5.79371C5.3469 5.43997 5.46002 5.09496 5.67502 4.81434C5.9244 4.47808 6.2544 4.21059 6.63502 4.03683C6.92253 3.90058 7.23003 3.81184 7.54565 3.77434L7.72502 3.75684L8.07378 3.75995Z" fill="white" />
                            <path d="M7.75507 12.2402C7.70694 12.2308 7.65882 12.2227 7.61257 12.2096C7.17569 12.0952 6.89444 11.6702 6.9607 11.2227C7.02632 10.7752 7.41883 10.4496 7.8707 10.4664C8.32257 10.4833 8.68883 10.8377 8.72132 11.2889C8.75382 11.7396 8.44132 12.1427 7.99695 12.224L7.91883 12.2402L7.75507 12.2402Z" fill="white" />
                        </svg>
                        <a href="#" className="text-white ml-1">Lastik Seçim Rehberi</a>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Banner
