import React, { Component } from "react";
import DoctorSimilarMainCard from "./DoctorSimilarMainCard";
import TopDocCard from "./TopDocCard";
import { connect } from "react-redux";
import { fetchSamilarDoctors } from "../actions/type1";


class DoctorSimilar extends Component {

    shouldComponentUpdate(props , state){
        console.log(props , state)
        
        
        return true
    }
    componentDidMount(){
        const search = new URLSearchParams(window.location.search)
        let id = search.get('drId')
        this.props.fetchSamilarDoctors(id)
    }
    render(){
        return(
            <div className="DoctorSimilar" >
                <div className="DoctorSimilar-title">
                    <span></span><h4>دکترهای مشابه</h4><span></span>
                </div>

                <div className="DoctorSimilar-main">
                    {
                        this.props.allDrSame && this.props.allDrSame.map(item => {
                            return (<DoctorSimilarMainCard data={item}/>)
                        })
                    }
                    {/* <DoctorSimilarMainCard />
                    <DoctorSimilarMainCard />
                    <DoctorSimilarMainCard />
                    <DoctorSimilarMainCard /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allDrSame  : state.samliarDoc.allDrSame
    }
}

export default connect(mapStateToProps , {
    fetchSamilarDoctors
})(DoctorSimilar) ;