import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopDoctorMonth } from '../actions/type1';

import TopDoctorMainCard from '../Components/TopDoctorMainCard';
import Footer from './Footer';
import Header from './Header';




class TopMonthDoctor extends Component {
    // constructor(props){
    //     super(props)

    // }

    componentDidMount () {
        this.props.fetchTopDoctorMonth()
    }
    render() {
        console.log(this.props.toper.length)
        return (
            <>
                <Header />
                <div className='topMonthDoctor'>
                    <div className='topMonthDoctor-title'>برترین دکترهای ماه</div>
                    <div className='topMonthDoctor-main'>
                        {/* <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div>
                        <div className='DoctorSimilar-main-card' style={{margin : '20px 10px'}}></div> */}

                        {
                            this.props.toper && 
                            this.props.toper.map((item) => {
                                return (<TopDoctorMainCard data={item} key={item.id} />)
                            })
                        }
                    </div>
                </div>
                <Footer />
            </>

        );
    }
}



const mapStateToProps = (state) => {
    return {
        toper : state.topDoctorMonth.toper
    }
} 


export default connect(mapStateToProps , {
    fetchTopDoctorMonth
})(TopMonthDoctor) ;