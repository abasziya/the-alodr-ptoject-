import React, { Component } from "react";
import { connect } from "react-redux";
import { QuickReservShow } from "../actions/type1";
import { quickSelectSerachHeader } from "../actions/type1";
import { setCitysConfirm } from "../actions/type1";
import axios from "axios";
import OptionQu from "./OptionQu";
class QuickReserv extends Component {


    // changeTitle = () => {
    //     let val = document.querySelector('.quickBox-specialty p').innerHTML
    //     console.log(val)

    //     this.props.change(val)
    // }

    

    render(){

        // console.log(this.props.pos)
        
        return(
            <section>
                <div className="quickBox">
                    <div  className="quickBox-city quickBox-buttons" >
                        <p accessKey="city" onClick={ async(event)  =>  {
                                this.props.QuickReservShow(true)
                                this.props.quickSelectSerachHeader(event.target.innerHTML)
                                // let result = await axios.get('http://192.168.0.226:2020/api/allCities');
                            
                                // console.log(result.data)
                                // this.props.fetchCities(result.data)
                                // let atr = new Array();
                                // console.log(this.props.citys)
                                // for(let i =0; i < this.props.citys.length; ++i){
                                //     atr.push(this.props.city[i])
                                // }

                                // console.log(this.props.citys)
                            
                                
                                }}>

                                {
                                    this.props.citysConfirm.value != null 
                                    ?
                                    this.props.citysConfirm.value
                                    :
                                    'استان '
                                }
                            </p>
                    </div>
                    
                    {/* <div className="quickBox-buttons" >
                        
                            <a class="btn btn-secondary dropdown-toggle qu-spi"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                شهر
                            </a>

                            <ul class="dropdown-menu qu-spi-ul">
                                <li>ایلام</li>
                            </ul>
                        
                    </div>
                    <div className="quickBox-buttons">
                       
                            <a class="btn btn-secondary dropdown-toggle qu-spi" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {
                                this.props.citysConfirm != null 
                                ? this.props.citysConfirm
                                : 'تخصص'
                            }
                            </a>

                            <ul class="dropdown-menu qu-spi-ul ">
                                <li>تخصص</li>
                                <li onClick={(event) => {
                                    console.log(event.target.innerHTML)
                                    this.props.setCitysConfirm(event.target.innerHTML)
                                }}>شسشسی</li>
                                <li>شسیشسی</li>

                            </ul>
                        
                    </div> */}
                                
                    {/* {
                        this.props.citysConfirm != null 
                        ?

                        (  
                            <div className="quickBox-hospital quickBox-buttons"  >
                                <p disabled onClick={(event) => {
                                    this.props.QuickReservShow(true)
                                    this.props.quickSelectSerachHeader(event.target.innerHTML)
        
                                }}>تخصص</p> 
                            </div>
                        )
                        
                        :

                        (
                            <div className="quickBox-hospital quickBox-buttons-disabled"  >
                                <p>تخصص</p> 
                            </div>
                        )

                    } */}


                        <div className="quickBox-specialty quickBox-buttons"  >
                            <p accessKey="specialty" className="ppSpe" onClick={(event) => {
                                this.props.QuickReservShow(true)
                                let pos = event.target.getAttribute('accesskey')
                                console.log(pos)
                                this.props.quickSelectSerachHeader(pos)
                                
                                // console.log(event.target.innerHTML)
                            }}>


                                {
                                    this.props.setSpeConfirm.value != null 
                                    ?
                                    this.props.setSpeConfirm.value
                                    :
                                    'تخصص'
                                }    
                                 
                            </p> 
                        </div>




                    {/* 
                    <div className="quickBox-specialty quickBox-buttons" >
                        
                        <p onClick={(event) => {
                            this.props.QuickReservShow(true)
                            this.props.quickSelectSerachHeader(event.target.innerHTML)

                        }}>تخصص</p>
                    </div> */}




                    {/* <div className="quickBox-specialty quickBox-buttons" >
                        

                    </div>  */}
                    {/* <select className="quickBox-buttons">
                            {
                                this.props.citys && this.props.citys.map(item => {
                                    return(
                                        <OptionQu data={item}/>
                                    )
                                })
                            }
                    </select> */}


                    {/* <select className="quickBox-buttons">
                        <option className="quickBox-buttons-node"><p>تخصص</p></option>
                        <option className="quickBox-buttons-node"><p>تخصص</p></option>
                        <option className="quickBox-buttons-node"><p>تخصص</p></option>
                    </select> */}

                            {/* <div className="quickBox-hospital quickBox-buttons"  >
                                <p>بیمارستان</p> 
                            </div>
                     */}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quickSelectIsShow : state.quickSelect.quickSelectIsShow,
        citys : state.quickSelect.citys,
        citysConfirm : state.quickSelect.citysConfirm,
        setSpeConfirm : state.quickSelect.setSpeConfirm
    }
}

export default connect(mapStateToProps , {
    QuickReservShow,
    quickSelectSerachHeader,
    setCitysConfirm
})(QuickReserv) ;