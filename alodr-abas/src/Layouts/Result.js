import React, { Component } from "react";
import QuickReserv from "../Components/QuickReserv";
import Footer from "./Footer";
import Header from "./Header";
// import QuickReserv from '../Components/QuickReserv';
import SerachBox from "../Components/SearchBox";
import ResultContent from "../Components/ResultContent";
import QuickReservPageList from "../Components/QuickReservPageList";
import ResultTitle from "../Components/ResultTitle";
import axios from "axios";
import { connect } from "react-redux";
import { fetchAllDoctors } from "../actions/type1";
import PageNumber from "../Components/PageNumber";
import Loader from "../Components/Loader";

class Result extends Component {

    componentDidMount = () => {
        // let spe = document.querySelector('.ppSpe').innerHTML


        // if(arg1 == 'تخصص' ){
        //     arg1 = null;
        // }
    
        // if(arg2 == 'شهر'){
        //     arg2 = null;
        // }

        let innerSearchBox = 'null' 
    //    console.log(this.props.innerInp)
       if(this.props.innerInp != ''){
        innerSearchBox = this.props.innerInp
       }
        this.props.fetchAllDoctors(this.props.setSpeConfirm.id , this.props.citysConfirm.id , innerSearchBox)
        // this.props.fetchAllDoctors(this.props.setSpeConfirm.id , this.props.citysConfirm.id , innerSearchBox)
        // axios.get(`http://192.168.0.226:2020/api/dr/${this.props.setSpeConfirm}/${2}`).then(res => {
        //     console.log(res.data.data)
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    render(){
        let lode;
        if(this.props.resultLoad === true)
        {
            lode = <Loader />
        }
        return(

            <section className="rsultSection">
                {lode}
                <QuickReservPageList />
                <Header />
                {/* <div className="banner-searchbox">
                    
                    <QuickReserv />
                    <SerachBox />
                </div> */}
                <ResultTitle />
                <ResultContent />
                
                <Footer />
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        citysConfirm : state.quickSelect.citysConfirm ,
        setSpeConfirm : state.quickSelect.setSpeConfirm , 
        innerInp : state.resultSearch.innerInp ,
        userLoginedInfo : state.user.userLoginedInfo,
        resultLoad : state.loader.resultLoad
    }
}


export default connect(mapStateToProps ,{
    fetchAllDoctors 
})(Result);