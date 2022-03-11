import React from "react"


const Card=({city})=>{
    return(
            <div className="card">
                <div className="maininfo">
                
                    <img src="https://openweathermap.org/img/wn/04d@2x.png"  alt="" />
                    <div className="title">{city}</div>
                   
                    <div>cloude</div>
                    <div className="temperature">20°</div>
                </div>
                <div className="infarmation">
                   
                    <div>Humid:15</div>
                    <div>leki:19</div>
                </div>
            </div>
    )
}
export default Card;