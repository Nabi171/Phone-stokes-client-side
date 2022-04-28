import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';

const SignUp = () => {
    //use firebase github hooks for create user
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);

    //use firebase github hooks for email verification
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const [confirmPassword, SetConfirnPassword] = useState();
    const [error, setError] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const navigate = useNavigate();

    // if (loading) {
    //     <Loading />
    // }
    if (user) {
        navigate('/home')
    }
    const handlePassword = e => {
        SetPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        SetConfirnPassword(e.target.value);
    }
    const handleUser = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('your password didnt match');

        }
        if (password.length < 6) {
            setError('your password is too short');
        }

        if (email && password && confirmPassword) {

            await createUserWithEmailAndPassword(email, password);
        }
        await sendEmailVerification()
        alert('Sent email for verification');
    }
    return (
        <div className='form-all mx-auto container mt-4' >
            <form className="container-form text-center form-all" onClick={handleUser}>
                <div className="form-title">Sign Up</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" required />
                    <label className='form-label'>PASSWORD</label>
                    <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" required />
                    <label onBlur={handleConfirmPassword} className='form-label'>CONFIRM PASSWORD</label>
                    <input className="form-input" type="password" placeholder="Min 6 charaters long" required />
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <button className='form-btn' type="submit">SIGN UP</button>
                </div>
            </form>
            <br />
            <p className='fw bold'>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none fw-bold'>Please Login</Link></p>
        </div>
    );
};
export default SignUp;


