import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Servicecard = ({ services }) => {
    const { id, name, buttonText, description, price, image } = services;
  
    useEffect(() => {
      AOS.init({
        duration: 2000, 
        once: true, 
      });
    }, []);
  
    return (
      <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-up">
        <figure>
          <img src={image} alt="Service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions">
            <Link to={`/services/${id}`} className="btn btn-primary w-full">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Servicecard;
  
