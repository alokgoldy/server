import React from 'react'

const Profile = ()=>{

    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{display: "flex",justifyContent: "space-around",margin: "18px 0px"}}
            >
                <img style={{width:"160px",height:"160px",borderRadius:"80px" }}
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                />

                <div>
                    <h4>Shael Koffer</h4>

                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 Posts</h6>
                        <h6>280 Followers</h6>
                        <h6>20 Following</h6>
                    </div>
                </div>
            </div>

            <div className="gallery">
                
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>
            <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"/>

            </div>
        </div>
    )
}

export default Profile