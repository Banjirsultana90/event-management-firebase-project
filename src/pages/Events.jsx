import React from 'react';

const Events = () => {
    return (
        <div>
           <h3 className='text-center text-3xl mt-10 font-bold text-black'>Our upcoming events</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-5'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/src/assets/262x390_1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">CountDown Event</h2>
                        <p>December 29 2023 , 11.55 PM</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/src/assets/262x390_3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Engagement party</h2>
                        <p>October 28 2023 , 08 PM</p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/src/assets/262x390_2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SEO Conference</h2>
                        <p>October 21 2023 , 08 AM</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;