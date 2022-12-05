import React, { Component } from "react";
import { Routes , Route, Navigate } from "react-router-dom";
import './css/main.min.css';
import 'animate.css';
import FormPage from './Components/FormPage';
import { Provider } from "react-redux";
import store from "./store";
import thunk from 'redux-thunk';
import Result from "./Layouts/Result";
import DoctorDetail from "./Layouts/DoctorDetail";
import DoctorPanel from "./Layouts/DoctorPanel";
import Home from "./Home";
import { connect } from "react-redux";
import ErrPanel from "./Components/ErrPanel";
import AppBase from "./AppBase";
// import { applyMiddleware, compose, createStore } from "redux";
// import reducers from './reducers/reducer'

// let composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSIOS__) || compose;
// let store = createStore(reducers , {} , composeEnhancers(applyMiddleware(thunk)) );
class App extends Component {
  render(){
    return (

        
      <Provider store={store}>
        {/* <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/form" element={<FormPage />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/doctorDetail" element={<DoctorDetail />} />
          <Route path="/doctorPanel" element={ this.props.userLoginedInfo.length < 1 ? <Navigate to='/err-panel' /> : <DoctorPanel />} /> 
          <Route path="/err-panle" element={<ErrPanel />} />
          <Route path="/redirect" element={<Navigate to="/doctorPanel" />} />
        </Routes> */}

        <AppBase />

      </Provider>


    );
  }

}



// const mapStateToProps = (state) => {
//   return {
//     userLoginedInfo : state.user.userLoginedInfo
//   }
// }

export default App ;
