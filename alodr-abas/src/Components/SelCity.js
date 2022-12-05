import React, { Component } from "react";




class SelCity extends Component {
    render(){
        return(
            <option onClick={() => {
                console.log('idididi')
            }}>{this.props.data}</option>
        )
    }
}



export default SelCity;