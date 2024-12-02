import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext (AuthContext);
    
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log (email, password);

        createUser(email, password)
        .then((result) => {
            // Signed up 
            console.log (result.user);
            const createdAt = result.user.metadata.creationTime;

            const newUser = {
                name, email, createdAt
            }
            // Save newuser info to the database

            fetch ('http://localhost:5000/users', {
                method: 'POST', 
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newUser),

            })
            .then (res => res.json())
            .then (data => {
                if (data.insertedId) {
                    alert ('Your accrount registered sucessfully');
                }
            })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log (errorCode)
            // ..
          });



    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Your Account!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignup}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;