import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS files/SignUp.css';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignUp() {
    const [user, setUser] = useState({
        userName: '',
        name: '',
        img: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const validateForm = () => {
        const errors = {};

        if (!user.userName || user.userName === '') {
            errors.userName = 'User Name is required';
        }

        if (!user.name || user.name === '') {
            errors.name = 'Name is required';
        }

        if (!user.img || user.img === '') {
            errors.img = 'Avatar URL is required';
        }

        if (!user.email || user.email === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'Email is invalid';
        }

        if (!user.password || user.password === '') {
            errors.password = 'Password is required';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post("https://trounle-engines.onrender.com/user", user)
                .then(res => {
                    console.log(res.data);
                    const { token , user } = res.data
                    console.log('User: ',user)
                    console.log('Token: ',token)
                    Cookies.set("userData", user);
                    Cookies.set("dataToken", token); 
                    navigate('/post');
                    alert("Welcome to Trouble Engines. Go to our Home Page")
                })
                .catch(err => {
                    console.error(err);
                });

        }
    };

    return (
        <div className='signUp'>
            <div>
                <header>
                    <Link to='/'>
                        <h1>Trouble Engines</h1>
                        <img src="https://cdn.bmwblog.com/wp-content/uploads/2021/01/2021_bmw_m5_cs_engine_01-768x512.jpg" alt="" />
                    </Link>
                </header>
            </div>
            <div>
                <form className='newUser' onSubmit={handleSubmit}>
                    <div><h1>Create a New Account</h1></div>
                    <div className='userInfo'>
                        <label>User Name:</label>
                        <input type="text" name="userName" onChange={handleChange} />
                        {errors.userName && <span className="error">{errors.userName}</span>}
                    </div>
                    <div className='userInfo'>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className='userInfo'>
                        <label>Avatar URL:</label>
                        <input type="text" name="img" onChange={handleChange} />
                        {errors.img && <span className="error">{errors.img}</span>}
                    </div>
                    <div className='userInfo'>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className='userInfo'>
                        <label>Password:</label>
                        <input type="password" name="password" onChange={handleChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className='login'>
                        <p>Already a Car enthusiast?
                            <Link to='/post'>
                                <span>Log-In</span>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <button className='signUpBtn'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
