import React, { Component } from "react";
import QuickIcons from "./Components/QuickIcons";
import QuickReserv from "./Components/QuickReserv";
import Banner from "./Layouts/Banner";
import Content from "./Layouts/Content";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

class Home extends Component {
    render(){
        return(
            <>
                <Header />
                <Banner />
                <QuickIcons />

            </>
        )
    }
}



export default Home;

