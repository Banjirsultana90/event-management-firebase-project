
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/context/AuthProvider';
import toast from 'react-hot-toast';
import Sociallogin from '../components/social/Sociallogin';

const Register = () => {
    const { createuser ,handleupdateprofile} = useContext(AuthContext);

    const formRef = useRef(null);
    const handleregister = (e) => {
        e.preventDefault();
        const form = new FormData(formRef.current);
        const name = form.get('name');
        const photo=form.get('photo')
        const email = form.get('email');
        const password = form.get('password');

        if (!/^(?=.*[a-z])(?!.*[A-Z])(?!.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]).{6,}$/.test(password)) {
            toast.error('Password should be at least 6 characters, no uppercase letters, and no special characters.');
            return;
        }

        createuser(email, password, name)
            .then((result) => {
                handleupdateprofile(name,photo)
                .then(()=>{
                    toast.success('Registration successful!');
                })
                
               
            })
            .catch((error) => {
                console.log(error);
              
                toast.error(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form ref={formRef} onSubmit={handleregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="photourl" name="photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
                <p className='text-center'>
                    Already registered? Please <Link to='/Login'> <span className='text-red-600'>Login</span></Link>
                </p>
                <Sociallogin></Sociallogin>
            </div>
        </div>
    );
};

export default Register;
