import './CSS files/PostPage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PostPage() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sortedPosts, setSortedPosts] = useState(posts);

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

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    useEffect(() => {
        const filterPosts = () => {
            if (filter === 'all') {
                setSortedPosts(posts);
            } else {
                setSortedPosts(posts.filter(post => post.userName === filter));
            }
        };

        filterPosts();
    }, [filter, posts]);

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
                    <Link to={'/userPage'}>
                        <button>Users</button>
                    </Link>
                    <Link to={'/logIn'}>
                        <button>Log In</button>
                    </Link>
                    {/* <button>Profile</button> */}
                </div>
            </header>
            <div>
                <Link to={'/createPost'}>
                    <button className='new-post'>New Post</button>
                </Link>
            </div>
            <div className='flex'>
                <div>
                    <h1>
                        Filter by Users:-
                    </h1>
                </div>
                <div className='dropdown'>
                    <select name="mostLiked" onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="Sammy26">Samarth</option>
                        <option value="Mustu1221">Musthafa</option>
                        <option value="Sarah123">Sarah</option>
                        <option value="Michael456">Michael</option>
                        <option value="Jessica_85">Emily</option>
                        <option value="Matt86">Matthew</option>
                        <option value="Rachel00">Rachel</option>
                        <option value="Chris22">Chris</option>
                    </select>
                </div>
            </div>

            <div className='fullPost'>
                {sortedPosts && sortedPosts.map((data, index) => (
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

