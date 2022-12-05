import React , {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";



class ShowCommentsComment extends Component {
    
    render() { 
        return (
            <li>
                {/* <div className="doctorPanel-comment-report">
                    
                    <FontAwesomeIcon icon={faHeart} onClick={() => {
                        const formdata = new FormData();
                        formdata.append('id' , this.props.data.id )
                        axios.post('http://192.168.0.226:2020/api/comment/report' , formdata).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                    }}/>
                    <p>(گزارش نظر)</p>
                    
                </div> */}
                <div className="doctorPanel-comment-content">
                    <div className="doctorPanel-comment-content-title">
                        <span>{this.props.data.writer}</span>
                        {this.props.data.answered_to != null && (<span style={{marginRight : '5px'}}>(در پاسخ به {this.props.data.answered_to})</span>)}
                    </div>
                    <div className="doctorPanel-comment-content-title">
                        <p>
                            {
                                this.props.data.comment
                            }
                        </p>
                    </div>
                </div>
                <div className="doctorPanel-comment-history">
                    <div className="doctorPanel-comment-history-time">
                        ({this.props.data.time})
                    </div>

                    <div className="doctorPanel-comment-likeBox">
                        <div className="doctorPanel-comment-history-likes">
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <span>
                                {this.props.data.Likes}
                            </span>
                        </div>
                        <div className="doctorPanel-comment-history-likes">
                            <FontAwesomeIcon icon={faThumbsDown}/>
                            <span>
                                {this.props.data.DissLikes}
                            </span>
                        </div>
                    </div>

                </div>
            </li>
        );
    }
}
 
export default ShowCommentsComment;