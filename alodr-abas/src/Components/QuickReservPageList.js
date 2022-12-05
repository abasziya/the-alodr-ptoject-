import React, { Component } from "react";
import QuickReservList from "./QuickReservList";
import { connect } from "react-redux";


class QuickReservPageList extends Component {

    render (){
        return(
            <>
                {
                    this.props.quickSelectIsShow === true ? 
                    (
                        <div className="mask" style={{display : 'flex'}} >
                            <QuickReservList />
                        </div>
                    )
                    :
                    (
                        <div className="mask" style={{display : 'none'}} >
                            <QuickReservList />
                        </div>
                    )
                }

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        quickSelectIsShow : state.quickSelect.quickSelectIsShow
    }
}

export default connect(mapStateToProps )(QuickReservPageList) ;