import React from "react";
import { useNavigate } from "react-router-dom";

const Home=(props)=>{
    const { email , isloggedIn } =props()
    const navigate=useNavigate()
    const onButtonClick=() => {
        //button click function 
    }


return (
   <div className="mainContainer">
    <div className="titleContainer">
        <div>Welcome!</div>
    </div>
    <div>This is Home Page</div>
    <div className={'buttonContainer'}>
        <input
        type="button"
        className={'inputButton'}
        onClick={onButtonClick}
        value={isloggedIn?'Log out':'Log in'}
        />

    isloggedIn?<div>Your email address is:{email}</div> :<div/>
    
    </div>

   </div>
)


}

export default Home