import React, { useState } from "react";

export default function LoginFormFC()
{
    let [email , setEmail]=useState('');
    let [password , setPassword] = useState('' ) ; 
    function handleEmail(e)
    {
        setEmail( e.target.value ) ;
        if(e.key==='Enter')
        {
            console.log( "your email is " +  email);
            e.target.value='' ; 
            
        } 
    }
    function handlePassword(e){
        setPassword(e.target.value); 
        if (e.key==='Enter')
        {
            console.log( ' your password is'  + password)
            e.target.value=''; 
        } 
    }

    return(
        <div>
            hi from Function component 
            <p> this is my email  {email} </p>
            <p> this is my password {password}</p> 
            <input type='email'  onChange={handleEmail} onKeyDown={handleEmail}/>
            <input type='password' onChange={handlePassword} onKeyDown={handlePassword}/>

        </div>
    )
}