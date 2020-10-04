import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = ()=>{

    const history = useHistory();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const postData = ()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }

        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else
            {
                M.toast({html: data.message,classes:"#388e3c green darken-2"})
                history.push('./signin')
            }
            
        }).catch(error=>{
            console.log(error)
        })
    }



    return(
        <div className="mycard">
            <div className="card auth-card">
                <span className="brand-logo"><h2>Instagram</h2></span>
                <input 
                type="text"
                placeholder="Name"
                onChange={(e)=>{setName(e.target.value)}}
                />
                
                <input
                type="text" 
                placeholder="Email"
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                
                <input
                type="text" 
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                onClick={()=>postData()}>
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