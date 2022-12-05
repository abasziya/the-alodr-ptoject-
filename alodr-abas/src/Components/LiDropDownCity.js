import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectInpCity } from "../actions/type1";
import { sendDropDownInpIsShowCity } from "../actions/type1";
import { setSelectInpSpe } from "../actions/type1";
import { sendDropDownInpIsShowSpe } from "../actions/type1";
import { setDropDownCityId } from "../actions/type1";

class LiDropDownCity extends Component {
    render(){
        return(
            <>
                <li accessKey={this.props.key} onClick={(event) => {
                    this.props.setSelectInpCity(event.target.innerHTML , event.target.innerHTML)
                    this.props.sendDropDownInpIsShowCity(false)
                    this.props.setDropDownCityId(this.props.data.id)
                }}>{this.props.data.name}</li>

                {/* <li onClick={(event) => {
                    
                    this.props.setSelectInpCity(event.target.innerHTML , event.target.innerHTML)
                    this.props.sendDropDownInpIsShowCity(false)

                }}>شیراز</li>

                <li onClick={(event) => {
                    
                    this.props.setSelectInpCity(event.target.innerHTML , event.target.innerHTML)
                    this.props.sendDropDownInpIsShowCity(false)

                }}>کرج</li> */}

            

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        selectInpCity : state.form.selectInpCity,
        citys : state.quickSelect.citys
    }
}

export default connect(mapStateToProps , {
    setSelectInpCity ,
    sendDropDownInpIsShowCity,
    setSelectInpSpe ,
    sendDropDownInpIsShowSpe ,
    setDropDownCityId

})(LiDropDownCity) ;