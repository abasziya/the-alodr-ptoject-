import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ShowCommentsComment from "./ShowCommentsComment";


class DoctorPanelShowComments extends Component {
    render(){
        return(
            <>
                <div className="doctorPanel-changed-main-title">
                    <span></span><h3>کامنت های من</h3><span></span>
                </div>

                <div className="doctorPanel-changed-main-showComments">
                    <div className="doctorPanel-commentBox">
                        <div className="all-comments">
                            <p>{this.props.data.comment_count}</p>
                            <p>Comments</p>
                        </div>

                        <div className="seprate-comment">

                                {/* <p>کامنت های تایید شده : <span>{this.props.data.accepted_comment_count}</span></p>
                                <p>کامنت های تایید نشده : <span>{this.props.data.denied_comment_count}</span></p> */}
                                <p>نظرات من</p>
                        
                        </div>

                    </div>
                    <ul>
                        {
                            this.props.data.comments && this.props.data.comments.map(item => {
                                return (<ShowCommentsComment data={item}/>)
                            })
                        }

                    </ul>
                </div>
            </>
        )
    }
}


export default DoctorPanelShowComments;