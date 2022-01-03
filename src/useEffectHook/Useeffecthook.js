import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
        if(e.key==='Enter')
        {
            console.log( "your email is " +  email);
            e.target.value='' ; 
            
        }
    }
    function handlePassword(e) {
        setPassword(e.target.value);
        if(e.key==='Enter')
        {
            console.log( "your email is " +  password);
            e.target.value='' ; 
            
        }
    }
    // this will run on mount only (not in update ot unmount )
    useEffect(()=>{
        console.log("component did mount only  ") ; 
    },[])

    //==componentdidupdate() ==> i linked it on update email only 
    //also run in first time of mount 
    useEffect( ()=>{
        console.log('component did update ( email only ) ') ; 
    } , [email ] ) ; 
    useEffect( ()=>{
        console.log('component did update ( password only ) ') ; 
    } , [password ] ) ; 
 
    //without [] it will be running on every update and mount 
    useEffect( ()=>{
        console.log('component did mount and update ')
    } )



    return (
        <div>
            <p> this is from useeffect hook </p>
            <p> this is my email  {email} </p>
            <p> this is my password {password}</p>
            <input type='email'  name='email' onChange={handleEmail} onKeyDown={handleEmail}  />
            <input type='password' name='password' onChange={handlePassword} onKeyDown={handlePassword}  />


        </div>
    )
}