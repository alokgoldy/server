import React,{useState} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const Signin = ()=>{

    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const postData = ()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }

        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
            {
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else
            {
                M.toast({html: "signed in success",classes:"#388e3c green darken-2"})
                history.push('/')
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
                placeholder="Username"
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                
                <input
                type="text" 
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />

                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>postData()}>
                    Signin
                </button>
                
            </div>
        </div>

    )
}

export default Signin