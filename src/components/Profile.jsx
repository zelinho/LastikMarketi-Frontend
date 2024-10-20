import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 1. Adım: useNavigate'i ekleyin
import LoginNavbar from './LoginNavbar';
import Footer from './Footer';
import toast from "react-hot-toast";

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false); 
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
  });

  const navigate = useNavigate(); // 1. Adım: useNavigate hook'unu kullanın

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
      setFormData({
        fullname: response.data.fullname,
        email: response.data.email,
        phonenumber: response.data.phonenumber,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:4001/user/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      toast.success('Profil güncelleme işlemi başarılı.');
      setEditing(false); 
      fetchUserData();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Profil güncelleme işlemi başarısız.');
    }
  };

  // 2. Adım: Çıkış yap fonksiyonunu yazın
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Ana sayfaya yönlendirin
  };

  return (
    <>
      <LoginNavbar />
      <div className=" flex flex-col items-center justify-center min-h-screen ">
        <div className="container mx-auto py-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-4 font-bold ">Profil Bilgileri</h1>
          {user ? (
            editing ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block text-gray-700">
                    Adı
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    E-posta adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phonenumber" className="block text-gray-700">
                    Telefon Numarası
                  </label>
                  <input
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded-sm"
                >
                  Kaydet
                </button>
              </form>
            ) : (
              <div>
                <p className='text-2xl flex'>Adı:&nbsp;<p className='text-red-400'>{user.fullname}</p> </p>
                <p className='text-2xl flex'>E-posta:&nbsp;<p className='text-red-400'>{user.email}</p>  </p>
                <p className='text-2xl flex'>Telefon Numarası:&nbsp;<p className='text-red-400'>{user.phonenumber}</p></p>
                <div className="space-x-1">
                <button
                  onClick={handleEdit}
                  className="bg-customGreen text-white py-4 px-11 rounded-sm"
                >
                  Profili Düzenle
                </button>
                
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white py-4 px-11 rounded-sm mt-4"
                >
                  Çıkış Yap
                </button>
                </div>
              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;