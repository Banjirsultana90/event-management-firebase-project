import React from 'react';

const Gallery = () => {
    return (
        <div className=' max-w-screen-xl mx-auto px-8 md:px-16 lg:px-48 py-5 my-5' >
            Our gallery

            <div className='grid grid-cols-2 gap-3 '>
                <div className=' '>
                    <img className='h-80 rounded-3xl  w-full' src="/src/assets/pexels-deepak-khirodwala-3865895.jpg" alt="Shoes" />

                </div>
                <div className=" grid gap-1">
                    <div className='grid grid-cols-2 gap-3'>
                        <div className=''>
                            <img className=' rounded-3xl ' src="/src/assets/pexels-ivan-samkov-8104206.jpg" alt="Shoes" />
                        </div>
                        <div className=''>
                            <img className=' rounded-3xl ' src="/src/assets/pexels-kampus-production-7802428.jpg" alt="Shoes" />
                        </div>
                    </div>
                    <div className=' grid row-span-2'>
                        <img className='h-44 w-full  rounded-3xl ' src="/src/assets/pexels-trung-nguyen-1751682.jpg" alt="Shoes" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gallery;