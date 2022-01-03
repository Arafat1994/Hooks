import axios  from 'axios';
import   { useEffect, useState } from 'react' ; 
 

 function UseFetch(url) {

    const [data , setdata]=useState(null);
    const [loading , setloading] =useState (false) ;
    const [ error , seterror] =useState(null) ; 

    useEffect(()=> {
        setloading(true) ;
        axios.get(url).then((response)=> { setdata(response.data ); })
        .catch((error)=>{ seterror(error)})
        .finally(()=>{ setloading(false) })

    },[url])  ; 
   
    return{data , loading , error }

}

export default  UseFetch ; 

