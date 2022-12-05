import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { logOutDoc } from "../actions/type1";
import { connect } from "react-redux";

class HeaderLoginedPanel extends Component {
    constructor(props){
        super(props);
        this.state ={
            drop : 'none'
        }
    }
    render () {
        console.log(this.props.data)
        return (
            <div className="header-login">
            <div className="header-login-button" accessKey="off" onClick={(event)=>{
                let pos = event.target.getAttribute('accessKey')

                if(pos === 'off'){
                    event.target.setAttribute('accessKey' , 'on')
                    this.setState({
                        drop : 'block'
                    })
                    
                }

                else if(pos === 'on')
                {
                    console.log('blo')
                    event.target.setAttribute('accessKey' , 'off')
                    this.setState({
                        drop : 'none'
                    })
                }

            }}>
                <p>{this.props.data.name}</p>
                <FontAwesomeIcon icon={faArrowDown} />
        </div>


        
        
        <ul className="dropdown-content" style={{display : this.state.drop}}>
            <li>
                {/* <Link to={`/doctorPanel?drid=${this.props.data.dr_id}`} >ورود به پنل کاربری</Link> */}
                <Link to="/doctorPanel" >ورود به پنل کاربری</Link>
            </li>

            <li onClick={()=>{
                this.props.logOutDoc()
                window.location.reload()
            }}>خروج</li>
        </ul>
        

        </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        userLoginedInfo : state.user.userLoginedInfo
    }
}


export default connect( mapStateToProps, {
    logOutDoc
})(HeaderLoginedPanel) ;