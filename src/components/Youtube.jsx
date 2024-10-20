import React from 'react'
const categories = [
    {
        image: 'https://medias89k.azureedge.net/sys-master-hybris-image-prod/banners/lastikcom-boyutlar_660x466px-09.jpg', 
        url: 'https://www.youtube.com/watch?v=nhpetDd_0s0'
    },
    {
        image: 'https://medias89k.azureedge.net/sys-master-hybris-image-prod/banners/lastikcom-boyutlar_660x466px-12.jpg', 
        url: 'https://www.youtube.com/watch?v=y5dHfSO-fxs'
    },
    {
        image: 'https://medias89k.azureedge.net/sys-master-hybris-image-prod/banners/lastikcom-boyutlar_660x466px-10.jpg', 
        url: 'https://www.youtube.com/watch?v=gmcxpFeoeK8'
    },
    {
        image: 'https://medias89k.azureedge.net/sys-master-hybris-image-prod/banners/lastikcom-boyutlar_660x466px-11.jpg', 
        url: 'https://www.youtube.com/watch?v=7FvGlk7x-BM'
    },
];
function Youtube() {
    return (
        <div>
            <>
                <div className="container mx-auto py-8 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <a  target="_blank"
                                key={index}
                                href={category.url}
                                className="relative block bg-gray-800 text-white rounded overflow-hidden shadow-lg"
                            >
                                <img
                                    src={category.image}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
                                        
                                        <br /><br />
                                </div>
                            </a>
                        ))}
                    </div>
                    <br /><br />
                </div>
            </>
        </div>
    )
}

export default Youtube
