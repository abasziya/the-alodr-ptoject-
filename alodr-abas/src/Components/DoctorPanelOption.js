import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Sami from '../Adds/imgs/sami.jpg'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateMenuState } from "../actions/type1";
import { logOutDoc } from "../actions/type1";
import { usRedirect } from "../actions/type1";

class DoctorPanelOption extends Component {

    componentDidMount(){
        let li =  document.querySelectorAll('.doctorPanel-option-main-menu li')

        
        li.forEach(item => {
            let pos = item.getAttribute('accessKey')

            if(this.props.menuData === pos){
                item.classList.add('activeLi')
                item.setAttribute('data-status' , 'has')
            }
            else if(item.hasAttribute('data-status')){
                item.classList.remove('activeLi')
                item.removeAttribute('data-status')
                console.log('test')
            }
        })
    }

    upMenuState = (event) => {
        let pos = event.target.getAttribute('accessKey')
        console.log(pos)
        this.props.updateMenuState(pos)
        
    }
    componentDidUpdate = (preveState , preveProps) => {
        console.log(preveState)
        let li =  document.querySelectorAll('.doctorPanel-option-main-menu li')

        
        li.forEach(item => {
            let pos = item.getAttribute('accessKey')

            if(this.props.menuData === pos){
                item.classList.add('activeLi')
                item.setAttribute('data-status' , 'has')
            }
            else if(item.hasAttribute('data-status')){
                item.classList.remove('activeLi')
                item.removeAttribute('data-status')
                console.log('test')
            }
        })
    }
    render(){

        return(
            <div className="doctorPanel-option" >
                <div className="doctorPanel-option-header">
                    <div className="doctorPanel-option-header-prof" style={{background : `linear-gradient(rgba(238, 238, 238, 0.5) , rgba(255, 255, 255, 0.4)) , url(${this.props.data.profile}) center no-repeat` , backgroundSize : 'cover'}}>
                        <div>{this.props.data.name }</div>
                    </div>

                </div>

                <div className="doctorPanel-option-main">
                    <ul className="doctorPanel-option-main-menu">

                        {/* <li accessKey="خانه" onClick={this.upMenuState}>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHeart} />
                                <p>صفحه اصلی</p>
                            </Link>
                        </li> */}
                        <li accessKey="تکمیل اطلاعات" onClick={this.upMenuState}>
                            
                            <FontAwesomeIcon icon={faHeart} />
                            <p>تکمیل اطلاعات</p>
                            

                        </li>

                        <li accessKey="نمایش اطلاعات کاربری" onClick={this.upMenuState}>
                            <FontAwesomeIcon icon={faHeart} />
                            <p>نمایش اطلاعات</p>
                        </li>



                        <li accessKey="ویرایش اطلاعات" onClick={this.upMenuState}>
                            <FontAwesomeIcon icon={faHeart} X/>
                            <p>ویرایش اطلاعات</p>
                        </li>

                        <li accessKey="کامنت ها" onClick={this.upMenuState}>
                            <FontAwesomeIcon icon={faHeart} />
                            <p>نظرات</p>
                        </li>


                        <li accessKey="خروج" onClick={()=> {
                            this.props.logOutDoc()
                            this.props.usRedirect(false)
                        }}>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHeart} />
                                <p>خروج</p>
                            </Link>
                        </li>
                    </ul>
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

export default connect( mapStateToProps , {
    updateMenuState ,
    logOutDoc ,
    usRedirect
})(DoctorPanelOption);