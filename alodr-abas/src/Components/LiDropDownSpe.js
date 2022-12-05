import React, { Component } from "react";
import { setSelectInpSpe } from "../actions/type1";
import { sendDropDownInpIsShowSpe } from "../actions/type1";
import { connect } from "react-redux";
import { setDropDownSpeId } from "../actions/type1";



class LiDropDownSpe extends Component {
    render (){
        return (
            <>
                <li accessKey={this.props.key} onClick={(event) => {
                    this.props.setSelectInpSpe(event.target.innerHTML , event.target.innerHTML)
                    this.props.sendDropDownInpIsShowSpe(false)
                    this.props.setDropDownSpeId(this.props.data.id)
                }}>{this.props.data.name}</li>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        setSelectInpSpe : state.form.setSelectInpSpe
    }
}


export default connect(mapStateToProps , {
    setSelectInpSpe ,
    sendDropDownInpIsShowSpe ,
    setDropDownSpeId
})(LiDropDownSpe) ;