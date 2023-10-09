import React from 'react';
import img1 from '../../assets/pexels-deepak-khirodwala-3865895.jpg'
import img2 from '../../assets/pexels-ivan-samkov-8104206.jpg'
import img3 from '../../assets/pexels-kampus-production-7802428.jpg'
import img4 from '../../assets/pexels-trung-nguyen-1751682.jpg'

const Gallery = () =>  {
    return (
        <div className=' max-w-screen-xl mx-auto px-8 md:px-16 lg:px-48 py-5 my-5' >
            <h3 className='text-center text-3xl font-extrabold text-indigo-600 mb-10'>Our Gallery</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 '>
                <div className=' '>
                    <img className='h-80 rounded-3xl  w-full' src={img1} alt="Shoes" />

                </div>
                <div className=" grid gap-1">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                        <div className=''>
                            <img className=' rounded-3xl ' src={img2} alt="Shoes" />
                        </div>
                        <div className=''>
                            <img className=' rounded-3xl ' src={img3} alt="Shoes" />
                        </div>
                    </div>
                    <div className=' grid row-span-2'>
                        <img className='h-44 w-full  rounded-3xl ' src={img4} alt="Shoes" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gallery;
// import React, { useEffect } from 'react';
// import 'aos/dist/aos.css'; // Import the AOS styles
// import AOS from 'aos'; // Import the AOS library

// const Gallery = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//   }, []);

//   return (
//     <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-48 py-5 my-5'>
//       Our gallery

//       <div className='grid grid-cols-2 gap-3'>
//         <div className='' data-aos='fade-up'>
//           <img className='h-80 rounded-3xl w-full' src="/src/assets/pexels-deepak-khirodwala-3865895.jpg" alt="Shoes" />
//         </div>
//         <div className="grid gap-1">
//           <div className='grid grid-cols-2 gap-3'>
//             <div className='' data-aos='fade-up'>
//               <img className='rounded-3xl' src="/src/assets/pexels-ivan-samkov-8104206.jpg" alt="Shoes" />
//             </div>
//             <div className='' data-aos='fade-up'>
//               <img className='rounded-3xl' src="/src/assets/pexels-kampus-production-7802428.jpg" alt="Shoes" />
//             </div>
//           </div>
//           <div className='grid row-span-2' data-aos='fade-up'>
//             <img className='h-44 w-full rounded-3xl' src="/src/assets/pexels-trung-nguyen-1751682.jpg" alt="Shoes" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
