import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../firebase/firebase.config';

const RegisterBS = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth(app)

const handleFormBS = (event) => {
    event.preventDefault();

    setSuccess('')
    setError('')

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)

   if (!/(?=.*[A-Z])/.test(password)){
    setError('Please add at least one uppercase')
    return;
   }
   else if (!/(?=.*[0-9])/.test(password)) {
    setError('Please add at least one number')
    return;
   }
   else if (password.length<6) {
    setError('Password will more than 6 character')
    return;
   }

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const loginUser = result.user;
        console.log(loginUser)
        setError('')
        event.target.reset();
        setSuccess('User created successfully')
    })
    .catch(error => {
        console.log(error.message)
        setError(error.message)

    })
}

    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
        <form onSubmit={handleFormBS}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<p className='text-danger'>{error}</p>
<p className='text-success'>{success}</p>
        </div>
    );
};

export default RegisterBS;