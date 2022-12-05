import React, { Component } from "react";
import DoctorPanelChanged from "../Components/DoctorPanelChanged";
import DoctorPanelOption from "../Components/DoctorPanelOption";
import { fetchLoginedDoctor } from "../actions/type1";
import { usRedirect } from "../actions/type1";
import { connect } from "react-redux";


class DoctorPanel extends Component {
    componentDidMount(){
        this.props.fetchLoginedDoctor()
        // this.props.usRedirect(false)
    }
    render(){
        return(
            <section>
                
                <div className="doctorPanel" >
                    {
                        this.props.userLoginedInfo && this.props.userLoginedInfo.map(item => {
                            return (
                                <>
                                    <DoctorPanelOption menuData={this.props.menuState} data={item}/>

                                    <DoctorPanelChanged menuData={this.props.menuState} data={item} />
                                </>
                            )
                        })

                    
                    }

                    {/* <DoctorPanelOption /> */}

                    {/* <DoctorPanelChanged /> */}

                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        menuState : state.doctorPanel.menuState,
        userLoginedInfo : state.user.userLoginedInfo

    }
}

export default connect(mapStateToProps , {
    fetchLoginedDoctor
})(DoctorPanel);