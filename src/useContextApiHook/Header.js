import React, { useContext } from "react";
import myimage from './.../../../logo.svg' ; 
import { ThemeContext } from "./ThemeContext";

export default function HeaderCopm()
{
    //usecontext => here we defind the 
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
        <div>
           <div style={sty}> 
               <p> this is the header component </p>
               <br/>
               <img src={myimage}  alt='myimage ' style={{height:'200px' , width:'100px'}} /> 
               
           </div>
        </div>
    )
}