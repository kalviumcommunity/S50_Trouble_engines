import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS files/userPage.css';
import Cookies from 'js-cookie';

function UserPage() {

    const [users, setUsers] = useState([]);
    const [cookValue, setCookValue] = useState({});


    useEffect(() => {
        axios.get('https://trounle-engines.onrender.com/user')
            .then(res => setUsers(res.data))
            .catch(err => {
                console.log('Error fetching users: ', err)
            })
    })

    useEffect(() => {
        const userDataCookie = Cookies.get("userData");
        setCookValue(userDataCookie);
    }, []);

    return (
        <div className='userPage'>
            <header>
                <Link to={'/'}>
                    <h1>Trouble Engines</h1>
                </Link>
                <div className='buttns'>
                    <Link to={'/signUp'}>
                        <button>Sign In</button>
                    </Link>
                    <Link to={'/post'}>
                        <button>Posts</button>
                    </Link>
                    <button>Cookies</button>
                    {/* <button>Profile</button> */}
                </div>
            </header>
            <div className='fullUsers'>
                {users && users.map((data, index) => (
                    <div key={index}>
                        <div className='users'>
                            {/* add an img tag for the user to add image/ user avatar  */}
                            <img src={data.img} alt="" />
                            <div className='names'>
                                <h1><span>User Name:</span> {data.userName}</h1>
                                <h6><span>Name:</span> {data.name}</h6>
                                <p><span>E-mail:</span> {data.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div> */}
                    {/* <p>hi there these r the Cookies</p> */}
                    {/* <h1>{cookValue.name}</h1> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default UserPage
