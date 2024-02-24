import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div>
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

            <form >
                <div>
                    <label >Name:-</label>
                    <input type="text" />
                </div>
                <div>
                    <label >User Name:-</label>
                    <input type="text" />
                </div>
                <div>
                    <label >E mail:-</label>
                    <input type="text" />
                </div>
                <div>
                    <label >Password:-</label>
                    <input type="text" />
                </div>
                <div>
                    <label >Confirm Password:-</label>
                    <input type="text" />
                </div>

            </form>
        </div>
    )
}

export default SignUp
