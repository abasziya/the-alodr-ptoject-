import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import DoctorPanelShowInfo from "./DoctorPanelShowInfo";
import DoctorPanelChangeInfo from "./DoctorPanelChangeInfo";
import DoctorPanelShowComments from "./DoctorPanelShowComments";
import DoctorPanelCompleteInfo from "./DoctorPanelCompleteInfo";
import { connect } from "react-redux";

class DoctorPanelChanged extends Component {
    render(){
        return(
            <div className="doctorPanel-changed">
                <div className="doctorPanel-changed-bar">
                    <span>برای دسترسی سریع آدرس الو دکتر رو کپی کن !</span><span><FontAwesomeIcon icon={faHandPointLeft}/></span><a href="/">alodoctor.com</a>
                </div>

                <div className="doctorPanel-changed-main">
                    {
                     
                      this.props.menuData === 'نمایش اطلاعات کاربری'
                      ?
                        (<DoctorPanelShowInfo data={this.props.data}/>)
                        
                      : this.props.menuData === 'کامنت ها' ?

                        (<DoctorPanelShowComments data={this.props.data}/>)
                        
                      :  this.props.menuData === 'ویرایش اطلاعات' ?
                        (<DoctorPanelChangeInfo data={this.props.data} />)  
                      
                      : (<DoctorPanelCompleteInfo data={this.props.data}/>)
                    }
                     
                     
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuState : state.doctorPanel.menuState
    }
}

export default connect(mapStateToProps )(DoctorPanelChanged);