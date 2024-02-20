import React from 'react';
import './CSS files/homeCss.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container'>
            <header>
                <h1>WELCOME TO <br /> TROUBLE ENGINES</h1>
                <p>A platform for exploring cars with bad engines in the car market.</p>
            </header>
            <Link to={'/post'}>
                <button className='btn'>Get Started  →</button>
            </Link>

            <footer>
                <p>Join Trouble Engines today and explore the world of cars which has troubled engines!</p>
            </footer>
        </div>
    );
}

export default Home;
