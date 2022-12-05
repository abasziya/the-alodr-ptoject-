import React, { Component } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { fetchLoginedDoctor } from "../actions/type1";
import HeaderLoginedPanel from "../Components/HeaderLoginedPanel";
import TopYearDoc from "./TopYearDoc";


class Header extends Component {

    constructor(props){
        super(props);
        this.state ={
            drop : 'none'
        }
    }

    componentDidMount(){
        this.props.fetchLoginedDoctor()
    }
    render(){
        
        return(
            <header>
                <div className="header" style={{background : this.props.backGr}}>
                    <div className="header-menu">
                        <ul className="header-menu-ul">
                            <li className="home-link"><a>الو دکتر</a></li>
                            <li><Link to="/">خانه</Link></li>
                            <li><a href="/topMonthDoctor">برترین های ماه </a></li>
                            <li><Link to="/topYearDoc">برترین های سال</Link></li>
                            <li><Link to="/contactUs">تماس با ما</Link></li>
                            <li><Link to="/aboutUs">درباره ما</Link></li>

                        </ul>
                    </div>

                    {
                        localStorage.getItem('token') 
                        ?
                        (
                            this.props.userLoginedInfo &&
                            this.props.userLoginedInfo.map(item => {
                            
                                return (<HeaderLoginedPanel data={item}/>)
                            })
                        )

                        :
                        (
                            <div className="header-login">
                                <Link to='/form' className="header-login-button">
                                    ورود کاربران
                                </Link>
                            </div>
                        )
                    }



                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userLoginedInfo : state.user.userLoginedInfo
    }
}


export default connect(mapStateToProps  , {
    fetchLoginedDoctor
})(Header) ;