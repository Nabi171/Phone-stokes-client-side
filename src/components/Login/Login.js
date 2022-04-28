import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import '../Login/Login.css'
// import OthersLogin from '../OthersLogin/OthersLogin';
const Login = () => {

    return (
        <div className='row'>
            <div className='col-lg-6'>
                <h1>jdsfh</h1>
            </div>
            <div className='col-lg-6'>
                <div className='form-all mx-auto container' >
                    <br />
                    <form className="container-form text-center form-all">
                        <div className="form-title">LOGIN</div>
                        <div className="inputs-form">
                            <label className='form-label'>EMAIL</label>
                            <input className="form-input" type="email" placeholder="example@test.com" />
                            {/* {emailError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {emailError}</p>} */}

                            <label className='form-label'>PASSWORD</label>
                            <input className="form-input" type="password" placeholder="Min 6 charaters long" />
                            {/* {passwordError && <p className='text-danger mt-2'><AiOutlineExclamationCircle className='mb-1' /> {passwordError}</p>} */}
                            <br />
                            <button className='form-btn' type="submit">LOGIN</button>
                        </div>











                        <p>You are new user!please signup. <Link to='/signup' className='text-danger pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
                        <p>
                            if forget password then reset password?
              <button className='btn btn-info'

                            >   Reset password
            </button></p>
                        <br />
                        {/* <OthersLogin></OthersLogin> */}
                    </form>
                    {/* {error && <p className='text-danger mb-0 mt-3'>{error.message}</p>}
            <br /> */}

                </div>

            </div>
        </div>
    );
};

export default Login;