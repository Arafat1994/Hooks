import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default  function ToggleTheme()
{

    const themecontext=useContext(ThemeContext) ; 

    return(
        <div > 
            <p> this is the function that will change the theme  </p>
            <br></br>
           <p> your theme is : {themecontext.theme}  </p>
            <button onClick={themecontext.toggletheme} > change Theme  </button>

        </div>
    )
}