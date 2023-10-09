import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Sociallogin = () => {
    const {user,googlelogin}=useContext(AuthContext)
   const handlelogin=()=>{
    googlelogin()
    .then((result) => {
        
        console.log(result.user);
    })
    .catch((error) => {
       
        console.error(error);
    });
    
   }
    return (
        <div>
            <button onClick={handlelogin} className='btn'>Google Login</button>
        </div>
    );
};

export default Sociallogin;