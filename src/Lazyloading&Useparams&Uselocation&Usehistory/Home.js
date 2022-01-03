
import React, { lazy, Suspense } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import { faSpinner } from '@fortawesome/free-solid-svg-icons' ;
/// before Lazy Loading >> import Lazycomponet from './lazycomponent'
//After LAzy 
const Lazycomponet = lazy(() => import('./lazycomponent')) ; 
const ProductComponent= lazy(()=>import('./products.js'))
export default function HomeComponent(props) {
   
    let data = props.data ; 
    console.log(data)
    return (
        <div>
            <p> this is Home  Component</p>
            <Suspense fallback={<FontAwesomeIcon icon={faSpinner} className="spinner d-block "  style={{fontSize:"30px" , color:"red"}} /> } >
                {
                 // we add the lazy component inside suspend inside here 
                 //here we make lazzy at component 
                 
                }
                <Lazycomponet />
                <ProductComponent data={data}/>
                
            </Suspense>

        </div>
    );
}