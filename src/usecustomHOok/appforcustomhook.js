import React from 'react';
import UseCustomHook from './CustomHook';
import UseCustomHookChangeBGcolor from './changeCOlorhook'
export default function AppforcustomHook() {

    //here we call the the returned values of custom hook function 
    const { count, increment, decrement } = UseCustomHook();
    //const {Color} =UseCustomHookChangeBGcolor();
    //here we use the hook who has the function 
    const {randcolor} = UseCustomHookChangeBGcolor();
   UseCustomHookChangeBGcolor();

    return (
        <div>
            {// here we use them 
            }
            <p> count : {count}  </p> 
            <p> color : {randcolor} </p>
            <button onClick={increment}  > Incremet  </button>
            <button onClick={decrement} > Decrement </button>
        </div>
    );
}