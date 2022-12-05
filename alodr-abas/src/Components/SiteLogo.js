import React, { Component } from "react"; 
import img1 from '../Adds/imgs/alo dr logo.png';
// import img1 from '../Adds/imgs/white alo dr.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";


class SiteLogo extends Component {

    render (){
        return(
            <div className="logoWrapper"> 
                <div className="logo-pics">
                    <img src={img1} />
                </div>
                <div className="logo-bannerWrapper">
                    <h1 className="logo-banner">
                        الو دکتر
                    </h1>
                    <h3 className="logo-subBanner">
                        تخصصی ترین سایت رتبه بندی پزشکان
                    </h3>
                </div>



            </div>
        )
    }
}




export default SiteLogo;