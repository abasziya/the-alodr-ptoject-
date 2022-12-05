import React , {Component} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopDoctorMainCard extends Component {

    render() { 
        return (
            <Link to={`/doctorDetail?drId=${this.props.data.dr_id}`} >
                <div className="DoctorSimilar-main-card" style={{marginTop : '50px'}} onClick={() => {
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
                            <p>{this.props.data.city}</p>
                        </div>
                        <div>
                            <p>{this.props.data.Speciallity}</p>

                        </div>

                    </div>

                    {/* <div className="similarDoc-star">
                    </div> */}

                </div>
            </Link>
        );
    }
}
 
export default TopDoctorMainCard;