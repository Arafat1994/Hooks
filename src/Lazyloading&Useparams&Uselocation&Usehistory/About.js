
import React from "react";
import { useLocation } from "react-router-dom";
export default function AboutComponent() {
    const location = useLocation();
    console.log(location)

    return (
        <div>
            
           <p> this is about page </p>
           {
               location.state ? <div>
                   <div>pathname is  {location.pathname} </div>
                   <div>state from {location.state.from} </div> 
                   <div> {location.key} </div>
                   </div>
                   :
                   <p> no state found  </p>

           }


        </div>
    );
}