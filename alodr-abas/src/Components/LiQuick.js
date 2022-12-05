import React, { Component } from "react";
import {connect} from 'react-redux';
import { setCitysConfirm } from "../actions/type1";
import { QuickReservShow } from "../actions/type1";
import { setSpeConfirm } from "../actions/type1";


class LiQuick extends Component {
    render(){
        return(
            <>


                <li accessKey={this.props.data.name} onClick={(event) => {
                        {
                            this.props.quickSelectSerachHeader === 'specialty' 
                            ?
                            this.props.setSpeConfirm(this.props.data.id , this.props.data.name)
                            :
                            this.props.setCitysConfirm(this.props.data.id  , this.props.data.name)

                            
                        }
                        // let pos = event.target.getAttribute('accessKay')
                        
                    
      
                    
                    
                    this.props.QuickReservShow(false)
                    // console.log(this.props.citysConfirm)
                }} >{this.props.data.name}</li>

                

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        citysConfirm : state.quickSelect.citysConfirm,
        quickSelectIsShow : state.quickSelect.quickSelectIsShow,
        quickSelectSerachHeader : state.quickSelect.quickSelectSerachHeader
    }
}

export default connect(mapStateToProps , {
    setCitysConfirm,
    QuickReservShow ,
    setSpeConfirm
})(LiQuick) ;