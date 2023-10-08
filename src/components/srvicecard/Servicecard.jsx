import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ services }) => {
    const { id, name, buttonText, description, price, image } = services
    return (
        <>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${id}`} className="btn btn-primary"> {buttonText}</Link>
                    </div>
                </div>
            </div></>
        // <div className="card bg-base-100 shadow-xl">
        //     <figure><img className='h-40 w-full' src={image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="">{name}</h2>
        //         <p>{description}</p>
        //         <p>{price}</p>
        //         <div className="card-actions justify-end">

        //             <Link to={`/services/${id}`} className="btn btn-primary"> {buttonText}</Link>

        //         </div>
        //     </div>
        // </div>
    );
};

export default Servicecard;