import axios from "axios";
import React, { Component } from "react";
import QuickReservPageList from "../Components/QuickReservPageList";
import SerachBox from "../Components/SearchBox";
import SiteLogo from "../Components/SiteLogo";
import { fetchCities } from "../actions/type1";
import { fetchSpeciallity } from "../actions/type1";
import { connect } from "react-redux";
import QuickReserv from "../Components/QuickReserv";
import Loader from "../Components/Loader";

class Banner extends Component {

    componentDidMount(){
        this.props.fetchCities()
        this.props.fetchSpeciallity()

    }
    render(){

        let lode;
        if(this.props.mainLoad === true)
        {
            lode = <Loader />
        }

        return(
            <section>
                {lode}
                <QuickReservPageList />
                <div className="cover"></div>
                <div className="banner">
                    <div className="banner-logo">
                        <SiteLogo />
                    </div>

                    <div className="banner-searchbox">
                        <QuickReserv />
                        <SerachBox />
                    </div>
                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        citys : state.quickSelect.citys ,
        spe : state.quickSelect.spe , 
        ts : state.doctorPanels,
        mainLoad : state.loader.mainLoad

    }
} 


export default connect(mapStateToProps , {
    fetchCities,
    fetchSpeciallity
})(Banner);