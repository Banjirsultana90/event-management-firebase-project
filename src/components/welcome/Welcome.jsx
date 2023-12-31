
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
const Welcome = () => {
  useEffect(() => {
    AOS.init({duration:2000}); 
  }, []);

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-5'>
        <div className='my-5'>
          <h3 className='text-center text-3xl font-extrabold text-indigo-600 mb-5'>Welcome to Event Sajai</h3>
          <p className='text-center mb-3'>
            From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions
            <br />
            We offer a full range of Events Management Services that scale to your needs & budget.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-3'>
          <div className="card bg-red-100 shadow-xl" data-aos="fade-up" data-aos-delay="300">
            <div className="card-body">
              <h2 className="card-title">Great Services</h2>
              <p>
                Our commitment to providing exceptional service means that every detail of your event
                is handled with the utmost care and attention, ensuring a flawless and memorable
                experience for you and your guests.
              </p>
            </div>
          </div>

          <div className="card bg-orange-300 shadow-xl" data-aos="fade-left" data-aos-delay="600">
            <div className="card-body">
              <h2 className="card-title">Great People</h2>
              <p>
                Our team of dedicated professionals is not just experienced; they are passionate
                about making your event extraordinary. With their expertise and friendly approach,
                you can trust that your event is in the best hands.
              </p>
            </div>
          </div>

          <div className="card bg-blue-400 shadow-xl" data-aos="fade-right" data-aos-delay="900">
            <div className="card-body">
              <h2 className="card-title">Unique Ideas</h2>
              <p>
                We pride ourselves on bringing fresh and innovative ideas to the table. From
                imaginative themes to one-of-a-kind experiences, we aim to make your event truly
                unique and unforgettable, setting it apart from the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
