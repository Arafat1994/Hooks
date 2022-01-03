import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function LoginComp()
{

    
    const themecontext = useContext(ThemeContext) ; 
     let sty={};
     //here we take the theme value from theme context without props 
    if(themecontext.theme==='dark'){
        sty={backgroundColor:'black' , color:'white ' ,border:'4px dotted white ' , padding:'4px' } 
    }
    else{
        sty={backgroundColor:'white' , color:'black', border:'4px dotted black ' , padding:'4px'}
    }

    return (
        <div >
           <div style={sty}> 
               <p> this is the login Form  </p>
               <br/>
               <input type='text' /> 
               <button> save  </button>
           </div>
        </div>
    )
}