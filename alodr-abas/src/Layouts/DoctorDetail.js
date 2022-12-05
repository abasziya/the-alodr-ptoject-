import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import DoctorDetailContent from "../Components/DoctorDetailContent";

class DoctorDetail extends Component {
    render(){
        return(

            <>
                <Header />

                <div className="doctordetail">
                    <DoctorDetailContent />
                </div>
                <Footer />
            </>

        )
    }
}



export default DoctorDetail;