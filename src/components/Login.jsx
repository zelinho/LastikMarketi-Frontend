import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const response = await axios.post('http://localhost:4001/user/login', userInfo);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Giriş Başarılı');
      navigate('/Loginhome'); 

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
      <div className="flex justify-center items-center ml-16 mt-40 mb-32">
        <div className="flex flex-col md:flex-row bg-white shadow-md border rounded-md p-4 w-full max-w-sm">
          <div className="w-full md:w-full p-4">
            <h2 className="text-2xl mb-6">Giriş Yap</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">E-Posta adresi</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500" 
                  placeholder="Yazınız" 
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Şifre</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500" 
                    placeholder="Yazınız" 
                    {...register("password", { required: true })}
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? "Gizle" : "Göster"}
                  </button>
                </div>
                {errors.password && <span className='text-customOrange text-sm'>Bu alan boş bırakılamaz</span>}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-orange-600 border-gray-300 rounded" 
                  />
                  <label htmlFor="remember" className="ml-2 block text-gray-700">Beni Hatırla</label>
                </div>
                <a href="#" className="text-customGreen hover:underline">Şifremi Unuttum</a>
              </div>
              <button type="submit" className="w-full bg-customOrange text-white py-3 rounded- shadow-sm">Üye Girişi</button>
            </form>
          </div>
        </div>
        <div className="w-1/2 md:w-1/2 p-4 bg-white shadow-md ml-5 mb-48 border rounded-md">
          <h2 className="text-2xl mb-4">Hesabınız yok mu?</h2>
          <p className="mb-6 text-gray-700">Üye değil misiniz? Hemen üye olun ve Brisa fırsatlarından yararlanın. Sizi aramızda görmekten mutluluk duyarız.</p>
          <a href="/Signup">
            <button className="w-1/2 text-customOrange py-3 px-4 border border-customOrange rounded shadow">
              Üye Ol
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;
