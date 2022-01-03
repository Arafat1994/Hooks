import React from "react";
import HeaderCopm from "./Header";
import LoginComp from "./loginpageComp";
import { Themeprovider } from "./ThemeContext";
import ToggleTheme from "./toggletheme";

export default function UsecontextFC() {

    const mystyle={padding:'10px 20px'  }
    return (
        
        //theme provider he will contailn all the component (children )
        <Themeprovider>
            <div className="p-5" >
                <p> using Context Api for passing data instead of props </p>
                <HeaderCopm style={mystyle}/>
                
                <LoginComp style={mystyle} />

                <ToggleTheme /> 



            </div>
        </Themeprovider>

    )
}