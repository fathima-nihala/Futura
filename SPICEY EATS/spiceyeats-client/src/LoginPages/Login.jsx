import React, { useContext, useState } from 'react';
import Modal from '../Modal/Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLockOpen } from "react-icons/md";
import './login.css';
import { ImGoogle3 } from "react-icons/im";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';

const Login = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUpWithGmail, login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        login(email, password).then((result) => {
            const user = result.user;
            alert("Login successful");
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage("Provide a correct email and password!");
        });
    };

    const handleLogin = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            alert("Login Successful");
        }).catch((errors) => {
            console.log(errors);
        });
    };

    return (
        <div>
            <Modal hideHandler={props.orderHideHandler}>
                <div className='log-head'>
                    <h4>Sign In</h4>
                </div>
                <div className="log-body">
                    <div className="log-body-one">
                        <div className='log-body-cntnt'>
                            <HiOutlineMail className='log-icon' />
                            <input type="email" placeholder="Email" {...register("email")} />
                        </div>
                        {errors.email && <p>{errors.email.message}</p>}
                        <div className='log-body-cntnt'>
                            <MdOutlineLockOpen className='log-icon' />
                            <input type="password" placeholder="Password" {...register("password")} />
                        </div>
                        {errors.password && <p>{errors.password.message}</p>}
                        <div className='log-frgt'>
                            <p>Forget Password?</p>
                        </div>
                        <div className='log-btn'>
                            <button className='end' onClick={handleSubmit(onSubmit)}>Sign In</button>
                        </div>
                        <div className='log-para'>
                            <p className='end-para'>Don't have an account? <Link to='/register' className='end-link'>Signup Now</Link></p>
                        </div>
                        <div className='ico-goo' onClick={handleLogin}>
                            <ImGoogle3 className='google' />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Login;
