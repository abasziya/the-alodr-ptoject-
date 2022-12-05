import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { alertFormIsShow } from "../actions/type1";




class AlertForm extends Component {


    render(){
        

        return(
            <div className="alertform animate__animated animate__rubberBand" style={this.props.alertFormShow === true ? {display : 'flex'} : {display : 'none'}}>
                <div className="alertform-close">
                    <FontAwesomeIcon icon={faClose} onClick={() => {
                        // this.props.closeAlertForm()
                        this.props.alertFormIsShow(false)
                        
                    }}/>
                </div>
                <div className="alertform-text">
                    <h4>{this.props.alertFormValue}</h4>

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        alertFormShow: state.form.alertForm.alertFormIsShow ,
        alertFormValue: state.form.alertForm.alertFormValue ,
    }
}


export default connect(mapStateToProps , {
    alertFormIsShow
})(AlertForm);