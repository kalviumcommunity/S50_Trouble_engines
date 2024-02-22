import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './CSS files/PostPage.css';

function NewPost() {
    const [formData, setFormData] = useState({
        carName: '',
        carImage: '',
        company: '',
        engineIssue: '',
        engineType: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:1926/post", formData)
            .then(res => {
                console.log(res);
                navigate('/post');
            })
            .catch(err => {
                console.log(err);
                alert("Sorry, there was an error while submitting your post. Please try again later.");
            });
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <div className='inputs'>
                <label htmlFor="carName">Car Name</label>
                <input type="text" name="carName" placeholder='Write the Car name' value={formData.carName} onChange={handleChange} />
            </div>
            <div className='inputs'>
                <label htmlFor="carImage">Car Image URL</label>
                <input type="text" name="carImage" placeholder='Give the Image URL' value={formData.carImage} onChange={handleChange} />
            </div>
            <div className='inputs'>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" placeholder='Write the Company name' value={formData.company} onChange={handleChange} />
            </div>
            <div className='inputs'>
                <label htmlFor="engineIssue">Engine Issue</label>
                <input type="text" name="engineIssue" placeholder='Describe the Engine' value={formData.engineIssue} onChange={handleChange} />
            </div>
            <div className='inputs'>
                <label htmlFor="engineType">Engine Type</label>
                <input type="text" name="engineType" placeholder='Write the Engine Type' value={formData.engineType} onChange={handleChange} />
            </div>
            <div>
                <Link to='/post'>
                    <button className='back'>Back</button>
                </Link>
                <button className='submit'>Submit</button>
            </div>
        </form>
    );
}

export default NewPost;
