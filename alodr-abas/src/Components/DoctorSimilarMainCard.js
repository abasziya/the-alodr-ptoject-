import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Sami from '../Adds/imgs/sami.jpg';
import { Link } from "react-router-dom";
import { fetchSamilarDoctors } from "../actions/type1";
import { setChangeSame } from "../actions/type1";
import { connect } from "react-redux";


class DoctorSimilarMainCard extends Component{

    shouldComponentUpdate(){
        return true
    }

    render(){
        let drid = this.props.data.dr_id.toString()
        let search = new URLSearchParams(window.location.search)
        search.append('drId' , drid)
        return(

            <Link to={`/doctorDetail?drId=${this.props.data.dr_id}`} >
                <div className="DoctorSimilar-main-card" onClick={() => {
                    // window.location.reload()
                    this.props.setChangeSame(true)
                    this.props.fetchSamilarDoctors(this.props.data.dr_id)
                }}>
                    <div className="similarDoc-pic">
                        <img  src={this.props.data.profile}/>
                    </div>

                    <div className="similarDoc-name">
                        <h5>{this.props.data.name}</h5>
                    </div>

                    <div className="similarDoc-spe">
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />

                        </div>
                        <div>
                            <p>{this.props.data.Speciallity}</p>

                        </div>

                    </div>

                    {/* <div className="similarDoc-star">
                    </div> */}

                </div>
            </Link>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        allDrSame  : state.samliarDoc.allDrSame
    }
}

export default connect(mapStateToProps , {
    fetchSamilarDoctors,
    setChangeSame
})(DoctorSimilarMainCard) ;