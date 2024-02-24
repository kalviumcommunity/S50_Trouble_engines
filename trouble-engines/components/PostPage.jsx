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


    const handleDelete = (id) => {
        axios.delete('http://localhost:1926/post/' + id)
            .then(res => {
                alert('Post Deleted Succesfully')
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log('Error in deleting the post', err))
    }

    return (
        <div className='postPage'>
            <header>
                <Link to={'/'}>
                    <h1>Trouble Engines</h1>
                </Link>
                <div className='buttns'>
                    <Link to={'/signUp'}>
                        <button>Sign In</button>
                    </Link>
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
                                    <button className='delete' onClick={(e) => handleDelete(data._id)}>Delete ⌫</button>
                                </div>
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
                                <Link to={`/updatePost/${data._id}`}>
                                    <button className='update'>📝 Update</button>
                                </Link>
                                <button className='like'>{data.likes} Likes ♡</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostPage;


// mCR100 Diesel Engine
// Mahindra Quanto
// oil leaks, A/C failure, gear box break down
// Mahindra
// https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Mahindra-Quanto/2102/1544532691816/front-left-side-47.jpg