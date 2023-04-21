import React, { useState } from 'react';


const Register = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }

    const handleEmailField = (event) => {
       console.log(event.target.value);
       setEmail(event.target.value);
    }

    const handlePasswordField = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit} >
                <input onChange={handleEmailField} type="email" name="email" id="email" placeholder='Your Email Here' /> <br />
                <input onBlur={handlePasswordField} type="password" name="password" id="password" placeholder='Your Password Here'/> <br />
                <input type="submit" value="Register" />
            </form>
            
        </div>
    );
};

export default Register;