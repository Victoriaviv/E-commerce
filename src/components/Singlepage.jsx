import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from "./Homepage";

function Singlepage(){
    const { id } = useParams();
    console.log("productlist",id);

    
    const card = productlist.find((card) =>card.id == id);

    return(
        <div className="card">
          <div><img src={card.image}/></div> 
          <div>{card.cardTitle} </div>
             </div>
    )
}
export default Singlepage