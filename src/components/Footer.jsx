import React from "react";

function Footer() {
    return (
        <div className="border-b-2 border-blue-800 mb-5">

            <footer className="bg-customGrey2 text-gray-200 text-xs py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <div className="flex">
                                <div className="w-1/3">
                                    <div className="mb-8 text-white">
                                        <h4 className="text-white mb-3 mr-12 border-b border-gray-500 pb-3">Hakkımızda </h4>
                                        <ul>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">Kampanyalar</a></li>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">Sıkça Sorulan Sorular</a></li>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">Hakkımızda</a></li>
                                            <li><a href="#" className="hover:text-gray-100">Hizmetlerimiz</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="mb-8 text-white">
                                        <h4 className="text-white mb-3 mr-12 border-b border-gray-500 pb-3">Yardım</h4>
                                        <ul>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">Ödeme Seçenekleri</a></li>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">Garanti</a></li>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">İade Koşulları</a></li>
                                            <li><a href="#" className="hover:text-gray-100">Kullanım Şartları - Gizlilik</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="text-white">
                                        <h4 className="text-white mb-3 mr-12 border-b border-gray-500 pb-3">Hizmetlerimiz</h4>
                                        <ul>
                                            <li className="mb-1"><a href="#" className="hover:text-gray-100">İletişim</a></li>
                                            <li><a href="#" className="hover:text-gray-100">Bize Sorun</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <p className="text-orange-500 text-xl">Lastik Danışma Hattı</p>
                                <p className="text-white text-xl mb-8">0850 210 12 56</p>
                            </div>
                        </div>
                        <div className="border-l border-gray-500 pl-8 w-1/2">

                            <div>
                                <h4 className="text-white mb-2">Biz Sizi Arayalım!</h4>
                                <p className="text-gray-400 mb-4">
                                    Size özel diğer paketlerimiz, avantajlarımız ve tekliflerimiz için iletişim bilgilerinizi
                                    bırakın, sizinle iletişime geçelim.
                                </p>
                                <form className="flex flex-col space-y-4">
                                    <input
                                        type="email"
                                        placeholder="E-posta Adresiniz"
                                        className="px-4 py-2 rounded bg-customGrey2 text-gray-300 focus:outline-none border-b mr-64"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefon Numaranız"
                                        className="px-4 py-2 rounded bg-customGrey2 text-gray-300 focus:outline-none border-b mr-64"
                                    />
                                    <label className="flex items-center text-gray-400">
                                        <input type="checkbox" className="mr-2" />
                                        Kişisel verilerin işlenmesi hakkında <a href="#" className="text-blue-400 underline"> Aydınlatma Metni'ni </a> okudum.
                                    </label>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                                    >
                                        Kayıt Ol
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <div className="flex mt-5 mb-8">
                                <img src="https://www.lastik.com.tr/_ui/responsive/theme-brisa/assets/icons/logo-brisa-footer.png" alt="" />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex mt-7 mb-5 ml-32 text-xs text-gray-400">
                                <p>Copyright © Brisa Bridgestone Sabanci Lastik Sanayi ve Ticaret A.S</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex justify-center absolute inset-x-0 bottom-0 transform translate-y-6">
                        <img src="https://www.lastik.com.tr/_ui/responsive/theme-brisa/assets/icons/logo-sa.svg" alt="Ortadaki Logo" className="mb-2" />
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Footer