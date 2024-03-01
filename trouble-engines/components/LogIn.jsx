import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS files/SignUp.css';
import axios from 'axios';

function LogIn() {
    const [user, setUser] = useState({
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
            axios.post("http://localhost:1926/user", user)
                .then(res => {
                    console.log(res.data);
                    navigate('/userPage');
                    alert("Welcome Back to Trouble Engines. Go to your Home Page")
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
                    <div><h1>Hello Folk, Welcome Back to Trouble Engines</h1></div>
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
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
