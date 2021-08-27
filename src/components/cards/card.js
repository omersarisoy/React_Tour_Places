import React from "react";
import "./card.css";
import { data } from "../../helper/data";

const Card = (props) => {

  return (
    <div className="container" >
      
      {data.map((item) => {
        return (
          <div className="cards" onClick={props.onClick} key={item.id}>
              
            <div className="title">
              <h1> {item.title} </h1>
            </div>

            <div className="image">
              <img src={item.image}/>
            </div>

            <div className= {props.IsVisible ? "description-click" : "description"} >
              <p> {item.desc} </p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Card;
