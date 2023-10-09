// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
//            <img className='h-[80vh] w-full' src="/src/assets/antique-gold-flower-light-candle.jpg" alt="" />
//         </div>
//     );
// };

// export default Banner;
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import the AOS library

const Banner = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <img
        className='h-[80vh] w-full'
        src="/src/assets/antique-gold-flower-light-candle.jpg"
        alt=""
        data-aos="rotate" // Specify the rotation animation
        data-aos-duration="1000" // Set the animation duration (in milliseconds)
      />
    </div>
  );
};

export default Banner;
