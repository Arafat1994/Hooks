import React from 'react' ; 
import { Link } from 'react-router-dom';


export default function  Navbarcomponent()
{
    let key = "About key "
    let  stateAbout = {from:'About Component'}
    return(
        <div> 
            <ul>
            <li>  <Link to="/Home" > Home</Link>  </li>
            <li>  <Link to="/Contact" > Contact</Link>  </li>
            <li>  <Link to={{pathname:"/About"} } state={stateAbout} key={key} > About</Link>  </li>
            <li>  <Link to="/Pages" > Pages</Link>  </li>
            </ul>
        </div>
    )
}