import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useRef } from 'react';
import { AuthContext } from "../components/context/AuthProvider";


const Login = () => {
    const {signin}=useContext(AuthContext)
    const location=useLocation()
    const navigate =useNavigate()
    const formRef = useRef(null);
    const handlesubmit=(e)=>{
       
        e.preventDefault()
        const form=new FormData(formRef.current)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)
        signin(email,password)
        .then(result=>{

            console.log(result.user);
            navigate(location?.state? location.state:'/')


        })
        .catch(error=>{
            console.log(error)})
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  ref={formRef} onSubmit={handlesubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handlesubmit} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Not register yet!please <Link to='/Register'> <span className='text-red-600'>Register</span></Link></p>
                </div>
            
        </div>
    );
};

export default Login;