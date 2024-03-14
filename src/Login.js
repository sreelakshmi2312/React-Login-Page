import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login=(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[emailError,setEmailError]=useState('')
    const[passwordError,setPasswordError]=useState('')

    const navigate=useNavigate()

    const onButtonClick=()=>{

    }


return(

    <div className="mainContainer">
        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br/>
        <div className="inputContainer">
            <input 
             className={'inputBox'}
             value={email}
             placeholder="Enter your email here"
             onChange={(ev)=> setEmail(ev.target.value)}
             />
             <label className="errorLabel">{emailError}</label>
        </div>
        <br/>
        <div className="inputContainer">
            <input 
             className={'inputBox'}
             value={password}
             placeholder="Enter your password here"
             onChange={(ev)=> setPassword(ev.target.value)}
             />
             <label className="errorLabel">{passwordError}</label>
        </div>
        <br/>
        <div className="inputContainer">
            <input
            type="button"
            onClick={onButtonClick}
            value={'Log In'}
            />
        </div>
        

        

    </div>

)
}

export default Login