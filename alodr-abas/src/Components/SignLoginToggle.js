import React, { Component } from "react";
import { connect } from "react-redux";
import { changeSignLoginToggle } from "../actions/type1";
import { changeSignLoginHeader } from "../actions/type1";

class SignLoginToggle extends Component {
    render(){
        return(
            <div className="signLoginToggleBox">
                <div className="signLoginToggleBox-btn" 
                    style={this.props.formState === 'signIn' ? {backgroundColor : 'rgb(14, 153, 212)' , color : '#FFFFFF'} : {backgroundColor : "#FFFFFF" , color : 'rgb(14, 153, 212)'}} 
                    onClick={() => {
                            this.props.changeSignLoginToggle('logIn') 
                            this.props.changeSignLoginHeader('ورود')
                        }
                    } 
                > 
                    <p>ورود</p>
                </div>
                <div className="signLoginToggleBox-btn" 
                    style={this.props.formState === 'signIn' ?  {backgroundColor : "#FFFFFF" , color : 'rgb(14, 153, 212)'} :  {backgroundColor : 'rgb(14, 153, 212)' , color : '#FFFFFF'}}
                    onClick={() => { 
                        this.props.changeSignLoginToggle('signIn')
                        this.props.changeSignLoginHeader('ثبت نام')

                    }} 
                >
                    <p>ثبت نام</p> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState : state.form.formState
    }
}

export default connect(mapStateToProps , {
    changeSignLoginToggle,
    changeSignLoginHeader
})(SignLoginToggle);