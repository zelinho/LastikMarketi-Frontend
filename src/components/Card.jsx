import React from 'react'

function Card({ item }) {

    return (
        <>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mb-10 hover:scale-105 duration-200">
                    <figure className="px-10 pt-10">
                        <a href="#">
                            <img src={item.image} alt="" />
                        </a>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}
                            <div className='badge badge-secondary'>
                                {item.category}
                            </div>
                        </h2>
                        <p>{item.title}</p>
                        <div className='text-customOrange'>
                            <p>{item.price},00 TL</p>
                        </div>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-warning rounded">Sepete Ekle</button>
                        </div>
                    </div>
                </div>          
            </div>
        </>
    )
}

export default Card
