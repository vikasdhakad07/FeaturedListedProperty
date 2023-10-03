import { useState } from "react";


function Card({id, image,info1,p1,info2,p2,info3,p3,info4,p4,price,name, removeTour})  {

    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                <h4 className="tour-name">{name}</h4>
                    <img src={info1} className="info1" />
                    <img src={info2} className="info2" />
                    <img src={info3} className="info3" />
                    <img src={info4} className="info4" />
                    <h2 className="para1">{p1}</h2>
                    <h2 className="para1">{p2}</h2>
                    <h2 className="para1">{p3}</h2>
                    <h2 className="para1">{p4}</h2>
                    <h4 className="tour-price">₹ {price}</h4>
                </div>

            </div>

            <button className="btn-red">
                Read More
            </button>
        </div>
        
    );
}

export default Card;