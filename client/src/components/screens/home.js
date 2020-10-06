import React from 'react'


const Home = ()=>{

    // const history = useHistory()
    // const {state,dispatch} = useContext(UserContext)

    // const user = JSON.parse(localStorage.getItem("user"))
    // if(user)
    // {
    //   dispatch({type:"USER",payload:user})
    //   history.push('/')
    // }else{
    //   history.push('./signin')
    // }

    return(

        <div className="home">
            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1601387647047-be137b4dcd49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>this is the post </p>
                    <input type="text" placeholder="type your comment" />
                </div>
            </div>

            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1601387647047-be137b4dcd49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>this is the post </p>
                    <input type="text" placeholder="type your comment" />
                </div>
            </div>

            <div className="card home-card">
                <h5>Ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1601387647047-be137b4dcd49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>this is the post </p>
                    <input type="text" placeholder="type your comment" />
                </div>
            </div>

        </div>
    )
}

export default Home