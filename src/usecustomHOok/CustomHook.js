import  { useState } from 'react';

export default function UseCustomHook()
{
    const [count , setCount] = useState(0) ;

    function increment()
    {
        setCount(c => c +1 )

    }
    //here we use the function of decrement 
    function decrement()
    {
        setCount(c=> c > 0 ? c - 1 : c ) ; 
    }
    // here we must return with the values  of count and the name of function to use it where we want to use it 
    return { count , increment , decrement }

}