import React, { Component } from "react";


class OptionQu extends Component {
    render(){
        return(
            <>
                <option>{this.props.data.name}</option>
            </>
        )
    }
}




export default OptionQu;