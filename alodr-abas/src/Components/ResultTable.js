import React, { Component } from "react";
import Sami from '../Adds/imgs/sami.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllDoctors } from "../actions/type1";
import axios from "axios";
import TrTable from "./TrTable";


class ResultTable extends Component {

    componentDidMount = ()=>{

        this.props.fetchAllDoctors()

    }

    render(){

        // console.log(this.props.name)
        return(
            <div className="resultTable">
                <table className="table">

                    <tr className="table-header">
                        <th></th>
                        <th>نام پزشک</th>
                        <th>تخصص</th>
                        <th>رتبه</th>
                        <th>استان</th>
                        <th>مشمول بیمه</th>
                        <th>دارای مشاوره انلاین</th>                        
                    </tr>

                    
                    {/* <tr className="table-content">

                        <td className="table-content-icon">
                            <Link to='/doctorDetail' className="table-content-link">
                                <div className="card-prof">
                                    <img src={Sami} />
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link"><span>مجید سمیعی</span></Link> 
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link">اطفال</Link> 
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link">25</Link> 
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link">تهران</Link> 
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link">+</Link> 
                        </td>
                        <td>
                            <Link to='/doctorDetail' className="table-content-link">اطفال</Link> 
                        </td>
                    </tr> */}
                    

                    {
                        this.props.alldr && this.props.alldr.map(item => {
                            return (
                                <TrTable  data={item} />
                            )
                        })
                    }

                    



                    {/* <tr className="table-content">
                        <td className="table-content-icon">
                            <div className="card-prof">
                                <img src={Sami} />
                            </div>
                        </td>
                        <td>مجید سمیعی</td>
                        <td>اطفال</td>
                        <td>25</td>
                        <td>تهران</td>
                        <td>+</td>
                        <td>+</td>
                    </tr>

                    <tr className="table-content">
                        <td className="table-content-icon">
                            <div className="card-prof">
                                <img src={Sami} />
                            </div>
                        </td>
                        <td>مجید سمیعی</td>
                        <td>اطفال</td>
                        <td>25</td>
                        <td>تهران</td>
                        <td>+</td>
                        <td>+</td>
                    </tr>

                    <tr className="table-content">
                        <td className="table-content-icon">
                            <div className="card-prof">
                                <img src={Sami} />
                            </div>
                        </td>
                        <td>مجید سمیعی</td>
                        <td>اطفال</td>
                        <td>25</td>
                        <td>تهران</td>
                        <td>+</td>
                        <td>+</td>
                    </tr> */}

                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alldr : state.resultSearch.alldr ,
        sendSpecialty : state.resultSearch.sendSpecialty
    }
}

export default connect(mapStateToProps ,{
    fetchAllDoctors ,
})(ResultTable) ;