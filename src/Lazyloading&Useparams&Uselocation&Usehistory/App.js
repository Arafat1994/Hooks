import React, { lazy, Suspense } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navbarcomponent from './Navbar.js'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from "./Home.js";
const ProductDetails = lazy(()=>import ('./productsDetails')) 
//import PagesComponent from "./Pages.js";
const PagesComponent = lazy(() => import('./Pages.js'));
//import ContactComponent from "./Contact.js";
const ContactComponent = lazy(() => import('./Contact.js'));
//import AboutComponent from "./About.js";
const AboutComponent = lazy(() => import('./About.js'));
//import CompontNotFound from "./Compont404.js";
const Compont404 = lazy(() => import('./Compont404.js'));


function AppLazyParamsLocationHistory() {
    const data=[
        {header:"Css3products", discription:" the way to use css in details here "} ,
        {header:"JavaScriptproducts", discription:"  the way to use java Script  in details here "} ,
        {header:"JqueryProducts", discription:" the way to use Jquery in details here"} ,
        {header:"AngularProducts", discription:" the way to use Angular in details here"} ,
        {header:"ReactProducts", discription:" the way to use React in details here"} ,
        {header:"SassProducts", discription:" the way to use Sass  in details here "} ,
        {header:"BootstrapProducts", discription:" the way to use Bootstrap in details here"} ,
        {header:"HtmlProducts", discription:" the way to use Html in details here"} 

    ]

    return (
        <div>

            <h1> LazyLoading - splitingCodeUsingLazy - Useparams  - useLocation - useHistory </h1>

            <Navbarcomponent />
            <Suspense fallback={<FontAwesomeIcon icon={faSpinner} className="spinner d-block " style={{ fontSize: "30px", color: "red" }} />} >
                <Routes>
                    <Route path="/Home" element={<HomeComponent data={data} />} />
                    <Route path="/Pages" element={<PagesComponent />} />
                    <Route path="/Contact" element={<ContactComponent />} />
                    <Route path="/About" element={<AboutComponent />} />
                    <Route path="/product/:header"element={<ProductDetails data={data} />} /> 
                    <Route path="*" element={<Compont404 />} />
                </Routes>
            </Suspense>
        </div>
    )
}


export default AppLazyParamsLocationHistory;