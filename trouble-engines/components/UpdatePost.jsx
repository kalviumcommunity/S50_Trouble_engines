import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import './CSS files/PostPage.css';

function UpdatePost() {
    const { id } = useParams()
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
        axios.put("https://trounle-engines.onrender.com/post/" + id, formData)
            .then(res => {
                console.log(res);
                navigate('/post');
            })
            .catch(err => {
                console.error('Failed to update item', err);
            });
    };

    useEffect(() => {
        axios.get('https://trounle-engines.onrender.com/post/' + id)
            .then(res => setFormData(res.data))
            .catch(err => {
                console.error('Error fetching posts:', err);
            });
    }, []);


    return (
        <form onSubmit={handleSubmit} >
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
    )
}

export default UpdatePost


// 🗑️❌🗑⌫ | Copy & Paste
