import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sami from '../Adds/imgs/sami.jpg';
import { selectDoc } from "../actions/type1";
import { connect } from "react-redux";


class TrTable extends Component {

    
    render(){
        // console.log(this.props.selectedDoctor)
        return(

            <tr className="table-content" onClick={() => {
                let selDr =  this.props.alldr.filter(item => {
                   return item.dr_id === this.props.data.dr_id
                })
                

                // dkp = this.props.data.dr_id
                // console.log(selDr)
                this.props.selectDoc(selDr)
            }}>

                <td className="table-content-icon">
                    <Link to={`/doctorDetail?drId=${this.props.data.dr_id}`} className="table-content-link">
                        <div className="card-prof">
                            <img src={this.props.data.profile} />
                        </div>
                    </Link>
                </td>
                <td>
                    <Link to={`/doctorDetail?drId=${this.props.data.dr_id}`} className="table-content-link"><span>{this.props.data.name}</span></Link> 
                </td>
                <td>
                    <Link to='/doctorDetail' className="table-content-link">
                        {/* {
                        axios.get(`http://192.168.0.226:2020/api/speciallity/${item.Specialty_id}`).then(res => {
                            console.log(res.data.data)
                        }).catch(res => {
                            console.log(res)
                        })
                        } */}
                        {this.props.data.Speciallity}
                    </Link> 
                </td>
                <td>
                    <Link to='/doctorDetail' className="table-content-link">25</Link> 
                </td>
                <td>
                    <Link to='/doctorDetail' className="table-content-link">
                        {this.props.data.city}
                    </Link> 
                </td>
                <td>
                    <Link to='/doctorDetail' className="table-content-link">
                        {
                            this.props.data.Insurance
                        }

                    </Link> 
                </td>
                <td>
                    <Link to='/doctorDetail' className="table-content-link">اطفال</Link> 
                </td>
            
            </tr>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        alldr : state.resultSearch.alldr,
        selectedDoctor : state.resultSearch.selectedDoctor,
    }
}

export default connect(mapStateToProps , {
     selectDoc })(TrTable) ;