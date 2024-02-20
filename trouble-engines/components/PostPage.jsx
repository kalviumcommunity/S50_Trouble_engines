import React, { useState, useEffect } from 'react';
import './CSS files/PostPage.css';
import postData from './postData.json'
import { Link } from 'react-router-dom';


function PostPage() {
    const [postdata, setPostData] = useState([]);

    useEffect(() => {
        setPostData(postData)
    }, []);
    console.log(setPostData)

    return (
        <div className='postPage'>
            <header>
                <Link to={'/'}>
                    <h1>Trouble Engines</h1>
                </Link>
                <div className='buttns'>
                    <button>Sign In</button>
                    <button>Log In</button>
                    <button>Profile</button>
                </div>
            </header>
            {postdata.map((data, index) => (
                <div key={index}>
                    <div className='posts'>
                        <div className='main-container'>
                            <div>
                                <img src={data.carImage} alt="Image of the car" className='image' />
                            </div>
                            <div className='texts'>
                                <h1><span>Engine Type:</span> {data.engineType}</h1>
                                <h6><span>Car Name:</span> {data.carName}</h6>
                                <p><span>Engine Issue:</span> {data.engineIssue}</p>
                                <p><span>Company:</span> {data.company}</p>
                            </div>
                        </div>
                        <div>
                            <button>{data.likes} Likes ♡</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostPage;
