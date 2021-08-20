import React from 'react';
import "./card.css"
import { data } from '../../helper/data';

const card = () =>{
    return(
    <div className="container">
        {data.map(item =>  {

            return(
                
                <div className="cards">
                    <div className="title">
                    <h1>{item.title}</h1>
                    </div>

                    <div className="image">
                    <img src={item.image}></img>
                    </div>

                    <div className="desc">
                    <p>{item.desc}</p>
                    </div>
                </div>

            )
          } )
        }
    </div>
    )
}

export default card;