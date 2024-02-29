import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:1926/user", user)
            .then(res => {
                console.log(res.data);
                Cookies.set("userData", JSON.stringify(user));
            })
            .catch(err => {
                console.error(err);
            });
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
                        <label>User Name:-</label>
                        <input type="text" name="userName" onChange={handleChange} />
                    </div>
                    <div className='userInfo'>
                        <label>Name:-</label>
                        <input type="text" name="name" onChange={handleChange} />
                    </div>
                    <div className='userInfo'>
                        <label>Avatar URL:-</label>
                        <input type="text" name="img" onChange={handleChange} />
                    </div>
                    <div className='userInfo'>
                        <label>E-mail:-</label>
                        <input type="text" name="email" onChange={handleChange} />
                    </div>
                    <div className='userInfo'>
                        <label>Password:-</label>
                        <input type="password" name="password" onChange={handleChange} />
                    </div>
                    <div className='login'>
                        <p>Already a Car enthusiast?
                            <Link to='/post'>
                                <span>Log-In</span>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <Link to={'/post'}>
                            <button className='signUpBtn'>Sign Up</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
