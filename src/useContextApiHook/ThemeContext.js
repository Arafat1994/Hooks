import React, { useState } from "react";

export const ThemeContext = React.createContext();

export  function Themeprovider(props){
    
    const [theme , settheme] = useState('dark') ; 
    function toggletheme()
    {
        settheme(theme==='dark'? 'light' : 'dark')
    }  
    

    return(
        //pass to them the value the we pass through the components  ()
        <ThemeContext.Provider value={{theme , settheme , toggletheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}