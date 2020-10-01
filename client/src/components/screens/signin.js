import React from 'react'

const Signin = ()=>{

    return(
        <div className="mycard">
            <div className="card auth-card">
                <span className="brand-logo"><h2>Instagram</h2></span>                
                <input 
                type="text"
                placeholder="Username"
                />
                
                <input
                type="text" 
                placeholder="Password"
                />

                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Signin
                </button>
                
            </div>
        </div>

    )
}

export default Signin