
import React from "react";
import { useParams , useNavigate} from "react-router-dom";
export default function ProductDetails(props)
{
    let data=props.data ; 
    const header = useParams();
    const navigate = useNavigate();
    //console.log(header.header)
    const filtereddata=data.filter(card =>header.header===card.header )
   // console.log(filtereddata)
   const GobackHandle =()=>{
       navigate('/Home')
   }
    return(
        
        <div> 
            <h1> that is products details  </h1>
            {
                filtereddata.map((cards , index)=>{
                    
                    return(
                        <div key={index}>
                            <h3> {cards.header}</h3>
                            <p>
                                {cards.discription}
                            </p>
                            <button onClick={GobackHandle}> go back home </button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}