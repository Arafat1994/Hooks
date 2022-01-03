
import React from "react";

export const randomColor= ()=> '#'+ ( (Math.random() * 0xffffffff >> 0 ).toString(16)  );


//{props.children} => that enable you to set the content of button where you call it 
 function BtnFC(props) {
    const randomColor= ()=> '#'+ ( (Math.random() * 0xffffffff >> 0 ).toString(16)  );
    return(
        <div> 
            <p> that is your random color :  {randomColor()} </p>
            <button onClick={props.onClick} style={{backgroundColor:randomColor()}}> 
        {props.children} 
        </button>
        </div>
        
    )
    
}
//that code will make pure component to not reload color in every click 
export default React.memo(BtnFC) ;