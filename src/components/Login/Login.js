import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import '../Login/Login.css'
import OthersLogin from '../OthersLogin/OthersLogin';
import img from '../Login/keki.png';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router';

const Login = () => {
    //for reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    // for sign in with email
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const handlePassword = e => {
        SetPassword(e.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    if (loading) {
        <Loading />
    }
    const handleUser = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='row bg-container align-items-center'>
            <div className='col-lg-6 col-sm-12 col-md-12 align-items-center'>
                <img src={img} className='img fluid p-4' alt="" />

            </div>
            <div className='col-lg-6 col-sm-12 col-md-12'>
                <div className='form-all mx-auto container' >
                    <br />
                    <form onSubmit={handleUser} className="container-form text-center form-all">
                        <div className="form-title">LOGIN</div>
                        <div className="inputs-form">
                            <label className='form-label'>EMAIL</label>
                            <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" />
                            {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>}

                            <label className='form-label'>PASSWORD</label>
                            <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" />
                            {passwordError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordError}</p>}
                            <br />
                            <button className='form-btn' type="submit">LOGIN</button>
                        </div>
                        <div>
                            <br />
                            <p>You are new user!please signup. <Link to='/signup' className='text-danger pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
                            <br />
                            <p>
                                if forget password then reset password?
                                 <button className='btn btn-reset'
                                >   Reset password
                               </button></p>
                            <OthersLogin></OthersLogin>
                        </div>
                    </form>
                    {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
                    <br />
                </div>

            </div>
        </div >

    );
};

export default Login;










// <div className='form-all mx-auto container' >
//     <br />
//     <form onSubmit={handleUser} className="container-form text-center form-all">
//         <div className="form-title">LOGIN</div>
//         <div className="inputs-form">
//             <label className='form-label'>EMAIL</label>
//             <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" />
//             {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>}

//             <label className='form-label'>PASSWORD</label>
//             <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" />
//             {passwordError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordError}</p>}
//             <br />
//             <button className='form-btn' type="submit">LOGIN</button>
//         </div>

//     </form>
//     {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
//     <br />
//     <p>You are new user!please signup. <Link to='/signup' className='text-danger pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
//     <p>
//         if forget password then reset password?
//     <button className='btn btn-info'
//             onClick={async () => {
//                 await sendPasswordResetEmail(email);
//                 alert('Sent email');
//             }}
//         >   Reset password
//     </button></p>
//     <br />
//     <OthersLogin></OthersLogin>
// </div>