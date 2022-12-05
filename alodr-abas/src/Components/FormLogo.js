import React, { Component } from "react"; 
// import img1 from '../Adds/imgs/alo dr logo.png';
import img1 from '../Adds/imgs/white alo dr.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";


class FormLogo extends Component {

    render (){
        return(
            <>
                <div className="logo-pics">
                    <img src={img1} />
                </div>

            </>
        )
    }
}




export default FormLogo;
