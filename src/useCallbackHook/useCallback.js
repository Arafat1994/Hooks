
import React, { useCallback, useState } from "react";
import BtnFC from "./buttonFC";

export default function UseCallbackFC (props) {


    
    const [count, setCount]=useState(0); 

    //usecallback it will stop the re rendering of function when we make update 
    //he will make it once with every change 
    function increment()
    {
        setCount (count => count + 1 ) ; 
    } 

    const  invrementcallback = useCallback(increment,[])
    return(
        <div>
            {// with every clcik he will mount the other page and change the color 
            //with call back or without it he will change color on every time 
            }
            <p> use callback Hook   </p>
            <p> that is your count : { count } </p>
            <BtnFC onClick={invrementcallback} > Increment  </BtnFC>
            
        </div>
    )
    
}

