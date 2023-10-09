import React from 'react';

const Contacts = () => {
    return (
        <div className='max-w-screen-xl  mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
            <div className="card w-96 bg-slate-300 shadow-xl ">

                <div className="card-body">
                    <h2 className="card-title">Address</h2>
                    <p>38-2 Hilton Street, California</p>

                </div>
            </div>
            <div className="card w-96 bg-slate-300 shadow-xl ">

                <div className="card-body">
                    <h2 className="card-title">Phone</h2>
                    <p>(+01) 123 456 7890</p>

                </div>
            </div>
            <div className="card w-96 bg-slate-300 shadow-xl ">

                <div className="card-body">
                    <h2 className="card-title">Email</h2>
                    <p>inform@eventsajai.com</p>

                </div>
            </div>
        </div>
    );
};

export default Contacts;