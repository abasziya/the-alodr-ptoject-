import React, { Component } from "react";
import Sami from '../Adds/imgs/sami.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";


class TopDocCard extends Component {
    render (){
        return (
            <>
                <div className="card">
                    <div className="card-rate">                   
                         1
                    </div>
                    <div className="card-prof">
                        <img src={Sami} />
                    </div>
                    <div className="card-name">
                        <h3>دکتر سمیعی</h3>
                    </div>
                    <div className="card-sub">
                        <p>متخصص اطفال</p>
                    </div>
                    <div className="card-soccor">
                        <FontAwesomeIcon  icon={faStar} />
                        <FontAwesomeIcon  icon={faStar} />
                        <FontAwesomeIcon  icon={faStarHalf} />
                    </div>
                </div>
            </>
        )
    }
}




export default TopDocCard;