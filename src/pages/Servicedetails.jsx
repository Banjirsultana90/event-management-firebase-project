import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Servicedetails = () => {
  const services=useLoaderData()

   const {id}= useParams()
  //  const idint=parseInt(id)
   const service=services.find(service=>service.id===id)

  //  console.log(service);

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={service.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{service.name}</h1>
            <p className="py-6">{service.description}</p>
           <Link to='/'> <button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Servicedetails;