import React from 'react';
import '../src/App.css'

function Home() {
    return (
        <div className='container'>
            <h1>S50_Trouble_Engines</h1>
            <div className='description'>
                <h1>DESCRIPTION</h1>
                <p>
                    Trouble Engines is a platform where users can compile a list of cars with notoriously bad engines. Users log in by providing their Name and setting a unique username. The main page showcases images of cars alongside the names of their engines and provides the below additional features.
                </p>
            </div>
            <div className='features'>
                <h2>Additional Features:</h2>
                <ol>
                    <li><strong>User Profiles:</strong> Allow users to create and customize their profiles and add additional information.</li>
                    <li><strong>Comments and Ratings:</strong> Enable users to leave comments and ratings on listed cars, sharing their experiences or insights.</li>
                    <li><strong>Dark and Light Mode:</strong> Implement a toggle switch or button that allows users to switch between dark and light modes for optimal viewing comfort.</li>
                </ol>

                <p>
                    With these features, Trouble Engines provides users with a user-friendly experience and enhances their ability to interact with the platform.
                    This website aims to provide a comprehensive resource for automotive enthusiasts and consumers to share knowledge about cars with below-average engine performance.
                </p>
            </div>
        </div>
    );
}

export default Home;
