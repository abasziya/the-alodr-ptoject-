import React, { Component } from "react";
import DoctorInformation from "./DoctorInformation";
import DoctorSimilar from "./DoctorSimilar";
import Comments from "./Comments";
import DoctorAboute from "./DoctorAboute";
import { selectDoc } from "../actions/type1";
import { connect } from "react-redux";
import { setChangeSame } from "../actions/type1";
import axios from "axios";

class DoctorDetailContent extends Component {

    shouldComponentUpdate(props , state){
        if(props.changeSame === true)
        {
            window.location.reload()
            this.props.setChangeSame(false)
        }
        return true
    }
    componentDidMount(){
        const search = new URLSearchParams(window.location.search)
        let id = search.get('drId')

        axios.get(`http://192.168.0.226:2020/api/dr/${id}`).then(res => {
            // console.log(res.data.data)
            this.props.selectDoc(res.data.data)

        }).catch(err => {
            // console.log(err)
        })
    }
    render(){
        // console.log(this.props.selectedDoctor)
        return(
            <>
                {
                    this.props.selectedDoctor && this.props.selectedDoctor.map(item => {
                        return (<DoctorInformation data={item} />)
                    })
                }
                
                <DoctorAboute />
                <DoctorSimilar />
                <Comments />
            </>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        selectedDoctor : state.resultSearch.selectedDoctor,
        allDrSame  : state.samliarDoc.allDrSame ,
        changeSame : state.samliarDoc.changeSame
    }
}

export default connect(mapStateToProps , {
    selectDoc,
    setChangeSame
})(DoctorDetailContent) ;