
import React, { useEffect , useState } from "react";

export default function UseRefFC()
{

    //write use state to save data inside it 
    const [Fname , setFname] =useState(''); 
    const [Lname , setLname] =useState('');

    // here we create a references for every form elememt  
    const FnameRef=React.useRef();  const LnameREf = React.useRef() ; const BtnRef=React.useRef();

    //on mount he will focus on ele fnameREf input 
    useEffect((e)=>{
        FnameRef.current.focus()  ; 
    },[])

    function focusFromFnameToLname(e)
    {
        if(e.key==='Enter'){LnameREf.current.focus(); }
    }

    function FocusFromLnameToBtn(e){
        if(e.key==='Enter'){ BtnRef.current.focus(); }
    }

    function SaveFun()
    {
        console.log({Fname , Lname }) ; 
    }

    

return(
    <div> 
        <p> here we use the use_reference to link form element with function or </p>
        <input type='text' ref={FnameRef} value={Fname} placeholder='Enter your Fname' onKeyDown={focusFromFnameToLname} onChange={(e)=>{setFname(e.target.value)}} /> 
        <br/>
        <input type='text' ref={LnameREf}  value={Lname} placeholder='Enter your Lname' onKeyDown={FocusFromLnameToBtn}  onChange={(e)=>{setLname(e.target.value)}} />
        <br/>
        <button ref={BtnRef}  onClick={SaveFun}> Save   </button>
    </div>
)
}