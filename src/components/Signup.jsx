import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
      try {
        const userInfo = {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
          phonenumber: data.phonenumber,
        };
  
        const response = await axios.post('http://localhost:4001/user/signup', userInfo);
        const { token, user } = response.data;
  
        // Token ve kullanıcı bilgilerini localStorage'a sakla
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
  
        toast.success('Üyelik Oluşturuldu');
        navigate('/login'); // Signup işlemi başarılı olduğunda login sayfasına yönlendirme
  
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
          toast.error('Hata: ' + error.response.data.message);
        } else {
          console.error(error);
          toast.error('Bir şeyler yanlış gitti. Lütfen tekrar deneyin.');
        }
      }
    };
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
                <div className="flex flex-col md:flex-row bg-white border rounded-sm p-8 w-full max-w-3xl mt-10 mr-16">
                    {/* Üye Ol Formu */}
                    <div className="w-full p-6">
                        <h2 className="text-2xl  mb-6">Üye Ol</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="fullname" className="block text-gray-700">Adı</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                                        placeholder="Yazınız"
                                        {...register("fullname", { required: true })}
                                    />
                                    {errors.fullname && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700">Soyadı</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                                        placeholder="Yazınız"
                                        {...register("lastname", { required: true })}
                                    />
                                    {errors.lastname && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="email" className="block text-gray-700">E-posta adresi</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                                        placeholder="Yazınız"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label htmlFor="password" className="block text-gray-700">Şifre</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                                        placeholder="Yazınız"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
                                    <p className="text-gray-600 text-sm mt-1">Şifreniz en az 6 karakter uzunluğunda olmalıdır</p>
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label htmlFor="phoneNumber" className="block text-gray-700">Telefon Numarası</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                                        placeholder="(5__) ___ ____"
                                        {...register("phonenumber", { required: true })}
                                    />
                                    {errors.phonenumber && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-2">Brisa Bridgestone Sabancı Lastik Sanayi ve Ticaret A.Ş.'nin reklam, tanıtım ve kampanyalarından haberdar olmak için aşağıda iletişim tercihlerinizi işaretleyebilirsiniz.</p>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-1/2 md:w-1/4 px-2 mb-2">
                                        <label className="flex items-center text-gray-700">
                                            <input type="checkbox" className="h-4 w-4 text-customOrange border-gray-300 rounded" />
                                            <span className="ml-2">Tümünü Seç</span>
                                        </label>
                                    </div>
                                    <div className="w-1/2 md:w-1/4 px-2 mb-2">
                                        <label className="flex items-center text-gray-700">
                                            <input type="checkbox" className="h-4 w-4 text-customOrange border-gray-300 rounded" />
                                            <span className="ml-2">SMS</span>
                                        </label>
                                    </div>
                                    <div className="w-1/2 md:w-1/4 px-2 mb-2">
                                        <label className="flex items-center text-gray-700">
                                            <input type="checkbox" className="h-4 w-4 text-customOrange border-gray-300 rounded" />
                                            <span className="ml-2">E-Posta</span>
                                        </label>
                                    </div>
                                    <div className="w-1/2 md:w-1/4 px-2 mb-2">
                                        <label className="flex items-center text-gray-700">
                                            <input type="checkbox" className="h-4 w-4 text-customOrange border-gray-300 rounded" />
                                            <span className="ml-2">Arama</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700">Kişisel verilerin işlenmesi hakkında <a href="#" className="text-blue-600 underline">Aydınlatma Metni</a>'ni okudum.</p>
                                <p className="text-gray-700">Hesap oluşturarak <a href="#" className="text-blue-600 underline">Üyelik Sözleşmesi</a>'ni okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.</p>
                            </div>
                            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-sm">Üyelik Oluştur</button>
                        </form>
                    </div>

                </div>
                <div className="w-full md:w-1/5 p-4 bg-gray-100 border rounded md:ml-6">
                    <h2 className="text-2xl mb-4">Zaten üye misiniz?</h2>
                    <p className="mb-6 text-gray-700">Hesabınıza giriş yapın.</p>
                    <a href="/Login"><button type="submit" className="w-full border border-customOrange bg-white text-customOrange py-2 rounded-sm">Üye Girişi</button></a>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup
