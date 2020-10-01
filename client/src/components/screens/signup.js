import React from 'react'
import {Link} from 'react-router-dom'

const Signup = ()=>{

    return(
        <div className="mycard">
            <div className="card auth-card">
                <span className="brand-logo"><h2>Instagram</h2></span>
                <input 
                type="text"
                placeholder="Name"
                />
                
                <input
                type="text" 
                placeholder="Email"
                />
                
                <input
                type="text" 
                placeholder="Password"
                />

                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
                    Signup
                </button>
                
                <h6>
                    Already have an account ?<Link  to="/signin"><cite style={{color: "blue"}}>Click Here</cite></Link>
                </h6>

            </div>
        </div>
    );
}

export default Signup