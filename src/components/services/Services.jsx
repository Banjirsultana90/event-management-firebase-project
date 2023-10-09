import React, { useEffect, useState } from 'react';
import Servicecard from '../srvicecard/Servicecard';

const Services = () => {
    const [services,setsrvices]=useState([])
    useEffect(()=>{
        fetch('/data/data.json')
        .then(res=>res.json())
        .then(data=>setsrvices(data))
    },[])
    return (
        <><h3 className='font-extrabold text-indigo-600 text-center text-3xl'>Our Services</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  max-w-screen-xl mx
        -auto px-8 md:px-16 lg:px-24 py-5 my-5 '>

            {services.map(service => <Servicecard key={services.id} services={service}></Servicecard>)}
        </div></>
    );
};

export default Services;