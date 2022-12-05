import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faClose } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { QuickReservShow } from "../actions/type1";
import { connect } from "react-redux";
import { setSpeConfirm } from "../actions/type1";
import { setCitysConfirm } from "../actions/type1";

import LiQuick from "./LiQuick";

class QuickReservList extends Component {


    // componentDidUpdate = (preveProps , preveState) => {
    //     if(preveProps.quickSelectSerachHeader != this.props.quickSelect)
    // }

    render() {

        // console.log(this.props.quickSelectSerachHeader)
        return (
            <>

                {
                    this.props.quickSelectSerachHeader == 'specialty' 
                    ?
                    (
                        <div className="QuickReservList animate__animated animate__zoomIn">
                            <div className="QuickReservList-header">
                                <div className="QuickReservList-closeWrapper">
                                    <FontAwesomeIcon icon={faClose} className="QuickReservList-close" onClick={() => {
                                        this.props.QuickReservShow(false)
                                    }} />
        
                                </div>
                                <h4>لیست برترین پزشکان هر تخصص</h4>
                                {/* <h4>{this.props.quickSelectSerachHeader}</h4> */}
                                <div className="QuickReservList-headerSerachWrapper">
                                    <input type="search" placeholder="راحت تر پیدا کن" />
                                </div>
                            </div>
        
                            {/* <div className="QuickReservList-search" >
                                
                            </div> */}
        
                            <div className="QuickReservList-table">
                                <ul>
                                        <li accessKey="تخصص" onClick={(event) => {
                                            this.props.setSpeConfirm('null' , event.target.innerHTML)
                                            this.props.QuickReservShow(false)
                                        }} >همه تخصص ها</li>
                                    
                                    {
                                        this.props.spe && this.props.spe.map(item => {
                                        return (<LiQuick data={item} key={item.id}/>)
                                        })
                                    }


                                </ul>
                            </div>
                        </div>
                    )


                    :

                    (
                        <div className="QuickReservList animate__animated animate__zoomIn">
                            <div className="QuickReservList-header">
                                <div className="QuickReservList-closeWrapper">
                                    <FontAwesomeIcon icon={faClose} className="QuickReservList-close" onClick={() => {
                                        this.props.QuickReservShow(false)

                                    }} />
        
                                </div>
                                <h4>لیست برترین پزشکان هر استان</h4>
                                {/* <h4>{this.props.quickSelectSerachHeader}</h4> */}
                                <div className="QuickReservList-headerSerachWrapper">
                                    <input type="search" placeholder="راحت تر پیدا کن" />
                                </div>
                            </div>
        
                            {/* <div className="QuickReservList-search" >
                                
                            </div> */}
        
                            <div className="QuickReservList-table">
                                <ul>

                                    {/* {
                                        this.props.quickSelectSerachHeader === 'specialty' 
                                        ?
                                        (                
                                            <li accessKey="تخصص" onClick={(event) => {
                                                this.props.setSpeConfirm('null' , event.target.innerHTML)
                                                this.props.QuickReservShow(false)
                                            }} >همه تخصص ها</li>
                                        )
                                        :
                                        (

                                        )
                                    } */}
                                    <li accessKey="استان" onClick={(event) => {
                                        this.props.setCitysConfirm('null' , event.target.innerHTML)
                                        this.props.QuickReservShow(false)
                                    }} >همه استان ها</li>
                                    {
                                        this.props.citys && this.props.citys.map(item => {
                                        return (<LiQuick data={item} key={item.id}/>)
                                        })
                                    }

                                    

                                </ul>
                            </div>
                        </div>
                    )

                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quickSelect: state.quickSelect.quickSelectIsShow,
        quickSelectSerachHeader: state.quickSelect.quickSelectSerachHeader,
        citys: state.quickSelect.citys,
        spe : state.quickSelect.spe,
    }
}


export default connect(mapStateToProps, {
    QuickReservShow ,
    setSpeConfirm ,
    setCitysConfirm
})(QuickReservList);