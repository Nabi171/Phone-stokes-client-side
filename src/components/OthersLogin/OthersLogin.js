import React from 'react';
import goggle from '../OthersLogin/gogle.png'
import github from '../OthersLogin/github.png'
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
const OthersLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorhandleing;
    if (error || error1) {
        errorhandleing =
            <p className='text-danger'>Error: {error ?.message} {error1 ?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='mt-2'>
                <h4>or</h4>
                <hr />
                <div >
                    <button
                        onClick={() => signInWithGithub()}
                        className='btn bg-container2 mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src={github} alt="" /> <span className='px-2'>Github Sign In</span></button>
                    <br />
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn  mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src={goggle} alt="" /> <span className='px-2'>Goggle Sign In</span></button>
                </div>
                {errorhandleing}
            </div>
        </div>
    );
};

export default OthersLogin;


