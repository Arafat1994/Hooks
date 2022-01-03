import React from "react";
import { Link } from "react-router-dom";
import './products.css';


export default function ProductComponent(props) {
    console.log(props.data)
    const Data = props.data;
    const returneddata = Data.map((card, index) => {
        return (
            <div key={index} className="cardD">
                <h3> {card.header} </h3>
                <p> {card.discription}</p>
                <Link to={`/product/${card.header}`}> View More   </Link>
            </div>
        )
    })
    return (
        <div>
            <h1> all our products here   </h1>
            <div className="card">
                {
                    returneddata
                }

            </div>


        </div>
    )
}