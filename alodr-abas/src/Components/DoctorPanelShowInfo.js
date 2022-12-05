import React, { Component } from "react";


class DoctorPanelShowInfo extends Component {
    render (){
        return(
            <>
                <div className="doctorPanel-changed-main-title">
                    <span></span><h3>نمایش اطلاعات کاربری</h3><span></span>
                </div>


                <div className="doctorPanel-changed-main-content">
                    <div className="personalInfo-card">
                        <div className="personalInfo-card-title">
                            <h4>اطلاعات شخصی</h4>
                        </div>

                        <div className="personalInfo-card-main">
                            <ul>
                                <li>
                                    <span>نام و نام خانوادگی : </span> <span>{this.props.data.name}</span>
                                </li>

                                <li>
                                    <span> استان :</span> <span>{this.props.data.city}</span>
                                </li>
                                <li>
                                    <span> تخصص :</span> <span>{this.props.data.Speciallity}</span>
                                </li>

                                <li>
                                    <span> شماره مطب :</span> <span>{this.props.data.number}</span>
                                </li>

                                <li>
                                    <span> ایمیل :</span> <span>{this.props.data.email}</span>
                                </li>

                                <li>
                                    <span>  کد پزشکی :</span> <span>{this.props.data.dr_code}</span>
                                </li>

                                <li>
                                    <span> وضعیت بیمه بیماران :</span> <span>{this.props.data.Insurance}</span>
                                </li>

                                <li>
                                    <span>  آدرس :</span> <span>{this.props.data.address}</span>
                                </li>
                            </ul>
                        </div>



                    </div>

                    {
                        this.props.data.Bio 
                        ?
                        (
                            <div className="personalInfo-card aboute-card">
                                <div className="personalInfo-card-title">
                                    <h4>درباره من</h4>
                                </div>
                                <div className="aboutDoctor">
                                    <p>{this.props.data.Bio }</p>
            
                                </div>
                        
    
                            </div>
                        )
                        :
                        (
                            <div className="personalInfo-card aboute-card-empty">
                                <div className="personalInfo-card-title">
                                    <h4>درباره من</h4>
                                </div>
                            
                                <div className="aboutDoctor-empty">
                                    <p>متنی درباره شما اضافه نشده</p>
                                </div>
                            </div>
                        )
                    }



                    <div className="personalInfo-card">
                        <div className="personalInfo-card-title">
                            <h4>اطلاعات کاربری</h4>
                        </div>
                        
                        <div className="personalInfo-card-main">
                            <ul>


                                <li>
                                    <span> نام کاربری :</span> <span>{this.props.data.name}</span>
                                </li>
                                <li>
                                    <span>تعداد بازدید از صفحه : </span> <span>{this.props.data.view}</span>
                                </li>

                                <li>
                                    <span> تعداد نظرات :</span> <span>{this.props.data.comment_count}</span>
                                </li>

                                {/* <li>
                                    <span> تعداد آرا :</span> <span>سمیعی</span>
                                </li> */}




                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}



export default DoctorPanelShowInfo;