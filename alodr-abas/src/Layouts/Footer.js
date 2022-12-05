import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SiteLogo from "../Components/SiteLogo";
import FormLogo from "../Components/FormLogo";

class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="footer">

                    <div className="footer-ul socialMedia">
                        <div className="footer-ul-title">
                            <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>
                        </div>

                        <div className="footer-ul-list">
                            <ul>
                            <li><a href="#">تلگرام</a></li> 
                            <li><a href="#">اینستاگرام</a></li> 
                            <li><a href="#">فیسبوک</a></li> 
                            <li><a href="#">واتساپ</a></li> 
                            </ul>
                        </div>


                    </div>


                    <div className="footer-ul aboutUs-footer">
                        <div className="footer-ul-title">
                            <h3>درباره ما</h3>
                        </div>
                        
                        <div className="footer-ul-list">
                            <ul>

                                <li><a href="#">برترین های سال</a></li>
                                <li><a href="#">برترین های ماه</a></li>
                                <li><a href="#">همکاری با ما</a></li>
                                <li><a href="#">تیم سازنده</a></li>
                            </ul>
                        </div>

                    </div>


                    <div className="footer-ul branding">
                        <div className="footer-ul-logo">
                            <SiteLogo />
                        </div>

                        <div className="footer-ul-sub">
                            <p>&copy;کپی رایت. تمام حقوق این سایت متعلق به الو دکتر است</p>
                        </div>

                        <div className="footer-ul-enamad">

                        </div>
                    </div>

                </div>
            </footer>
        )
    }
}


export default Footer;