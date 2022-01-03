import React, { useReducer } from "react";
import Reducer from "./Reducer";




export default function UseReducerCom() {

    //we use  usereducer that take  the state  , dispatch to send the click action to reducer 
    //in usereducer we pass the reduceer function , state intial value 
    const [state, dispatch] = useReducer(Reducer, { count: 0 });
    
    function Increment (){
        dispatch({type :'Incre' }) ; 
    }
    function  Decrement(params) {
        dispatch({type : 'Decre'}) ; 
    }
    function Reset ()
    {
        dispatch({type : 'Reset'})
    }

    return (
        <div>
          <p> the Count is  :   {state.count} </p>

          <button onClick={Increment}>Increment </button>
          <button onClick={Decrement}> Decrement </button>
          <button onClick={Reset}> Reset </button>
        </div>
    )

}