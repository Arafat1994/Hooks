
import React, { useEffect, useLayoutEffect, useState } from 'react' ; 

export default function UselayoutEffectHook()
{
    const [ data , setdata] = useState('you can improve your code ....................') ; 
    const [loading , setloading ] = useState(false)
 
    // here he will render first then updat value from  hello using effect to welcome
   /* useEffect(()=>{
        console.log('use effect ')
        setloading(true) ; 
        if(!loading){setdata('  hello using effect   ')}
        else {setdata('welcome ')}

    },[loading]);*/

    //here he will print welcome dierect not hello using effectayoot
    //value will be fixed to welcome 
    useLayoutEffect(()=>{
        console.log('use effect') ; 
        setloading(true) ; 
        if(!loading) {setdata('hello using effectayoot ')} 
        else{ setdata('  welcome  ')}

    } , [loading])



    return(
        <div>
            <p> Use the layout effect  </p>
            <br/> 
            <br/> 
            {data}
        </div> 
    )
}