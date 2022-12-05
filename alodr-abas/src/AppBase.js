import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes , Route, Navigate } from "react-router-dom";
import store from "./store";
import thunk from 'redux-thunk';
import Result from "./Layouts/Result";
import DoctorDetail from "./Layouts/DoctorDetail";
import DoctorPanel from "./Layouts/DoctorPanel";
import Home from "./Home";
import ErrPanel from "./Components/ErrPanel";
import FormPage from './Components/FormPage';
import TopYearDoc from "./Layouts/TopYearDoc";
import AboutUs from "./Layouts/AboutUs";
import PanelAdmin from "./Layouts/PanelAdmin";
import PanelAdminBase from "./Components/PanelAdminB/PanelAdminBase";
import ContactUs from "./Layouts/ContactUs";
import TopMonthDoctor from "./Layouts/TopMonthDoctor";

class AppBase extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         redirect : this.props.userRedirect
    //     }
    //     console.log(this.state.redirect)
    // }
    // componentDidUpdate(props,state){
    //     console.log(props , state)
    //     this.setState({
    //         redirect : this.props.userRedirect
    //     })
    // }

    render(){
        return(
            <>
                <Routes> 
                    <Route path="/" element={ <Home />} /> 
                    {/* <Route path="/form" element={ this.props.userRedirect === false ? <FormPage /> : <Navigate to='/doctorPanel' />} /> */}
                    <Route path="/form" element={ <FormPage /> } />
                    <Route path="/Result" element={<Result />} />
                    <Route path="/doctorDetail" element={<DoctorDetail />} />
                    {/* <Route path="/doctorPanel" element={ this.props.userRedirect === true ?  <DoctorPanel /> : <Navigate to='/err-panel' /> } />  */}
                    <Route path="/doctorPanel" element={ <DoctorPanel />} /> 
                    <Route path="*" element={<ErrPanel />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/contactUs" element={<ContactUs /> } />
                    <Route path="/topYearDoc" element={<TopYearDoc />} />
                    <Route path="/topMonthDoctor" element={<TopMonthDoctor />} />
                    <Route path="/admin" element={<PanelAdmin />} />
                    <Route path={localStorage.getItem('admin') ? `/paneladminbase` : `*`} element={<PanelAdminBase />} />

                    {/* <Route path="/redirect" element={<Navigate to="/doctorPanel" />} /> */}
                </Routes>

            </>

        )
    }
}


const mapStateToProps = (state) => {
  return {
    userLoginedInfo : state.user.userLoginedInfo ,
    userRedirect : state.user.userRedirect ,
    searchMod : state.resultSearch.searchMod
  }
}



export default connect(mapStateToProps)(AppBase)