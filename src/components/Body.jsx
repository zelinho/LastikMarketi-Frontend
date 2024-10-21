import React from 'react'

const categories = [
    {
        title: 'Hafif ticari araçlar için lastikler',
        image: '/image/staticPage4.png', 
        url: '/Ticari'
    },
    {
        title: '4x4 araçlar için lastikler',
        image: '/image/staticPage2.png', 
        url: '/Dortxdort'
    },
    {
        title: 'Binek araçlar için lastikler',
        image: '/image/staticPage1.png', 
        url: '/Binek'
    },
    {
        title: 'Performans araçları için lastikler',
        image: '/image/staticPage3.png', 
        url: '/Rft'
    },
];

function Body() {
    return (
        <div>
            <>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                href={category.url}
                                className="relative block bg-gray-800 text-white rounded overflow-hidden shadow-lg"
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
                                    <h3 className="text-lg  flex items-center">
                                        {category.title}
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                        <br /><br />
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </>
        </div>
    )
}

export default Body
