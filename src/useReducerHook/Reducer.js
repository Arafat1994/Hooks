//import React  from "react";

//let intialState={count : 0 }

//here we create the redux reducer that have (state , action ) 
//state tha have the value 
//action based on it's type  it will do function on data 
export default function Reducer(state , action){

    if(action.type==='Incre')
    {
        return {count: state.count + 1 }
    }

    if(action.type === 'Decre')
    {
        //make if condotion to make sure that it always stop at 0 value not less than 0 
        // stop at  0  
        if(state.count !== 0 )
        {
            return { count : state.count-1 }
        }
        else
        {
            return{count : 0 }
        }
        
        
    }

    if(action.type === 'Reset')
    {
        return {count : 0 }
    }


}