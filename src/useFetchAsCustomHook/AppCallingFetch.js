import  UseFetch from "./useFetchHook";
import React from 'react' ;


export default function CallFetch()
{
    const {data : fake , loading , error } = UseFetch('https://v2.jokeapi.dev/joke/Any') ; 

    if(loading) return <h1> loading ......... </h1>
    if(error) console.log(' error  '+ error)
    return(
        <div> 
            the data from Api  :
            <br/>
             {fake?.setup} 
             <br/>
             {fake?.id}
        </div>
    )
}