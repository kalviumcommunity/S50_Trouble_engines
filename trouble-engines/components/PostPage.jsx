import './CSS files/PostPage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PostPage() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1926/post')
            .then(res => setPosts(res.data))
            .catch(err => {
                console.error('Error fetching posts:', err);
            });
    }, []);


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
            <div>
                <Link to={'/createPost'}>
                    <button className='new-post'>New Post</button>
                </Link>
            </div>
            <div className='fullPost'>
                {posts && posts.map((data, index) => (
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
        </div>
    );
}

export default PostPage;
