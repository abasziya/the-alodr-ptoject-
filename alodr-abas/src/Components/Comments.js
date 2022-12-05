import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown as faThumbsDownFill } from "@fortawesome/free-solid-svg-icons";
import {  faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpFill } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";
import axios from "axios";
import { connect } from "react-redux";
import { fetchComments } from "../actions/type1";
import { showRepComment } from "../actions/type1";
import { commentHandleSendMassage } from "../actions/type1";
import { selectDoc } from "../actions/type1";

class Comments extends Component {

    async componentDidMount(){
        const search = new URLSearchParams(window.location.search)
        let id = search.get('drId')
        let result = await axios.get(`http://192.168.0.226:2020/api/dr/${id}`)
        this.props.selectDoc(result.data.data)
        // axios.get(`http://192.168.0.226:2020/api/dr/${id}`).then(res => {
           
        //     console.log(res)
        //     this.props.selectDoc(res.data.data)

        // }).catch(err => {
        //     console.log(err)
        // })
        this.props.fetchComments(id)        
    }

    render(){

        console.log(this.props.comment)
        return(
            <section>
                <div className="comment">


                    <div className="comment-header">
                        <div className="comment-header-tit">
                            <div className="titUserComments">
                                <p>نظرات کاربران</p>
                                
                                <FontAwesomeIcon icon={faComment} className="titUserComments-icon" />
                                
                            </div>
                            <div className="countUserComments">
                                {/* <p>{this.props.selectedDoctor[0].comment_count}</p> */}
                                <p>10</p>
                                <p className="countUserComments-com">Comments</p>
                            </div>
                        </div>
                        <div className="comment-header-sub">
                            <span></span><h4>دیدگاه خود را با ما به اشتراک بگذارید</h4><span></span>
                        </div>
                    </div>


                    <div className="comment-me">
                        <div className="comment-me-notic">
                            <FontAwesomeIcon icon={faThumbTack} /> <p>کامنت خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات رکیک یا توهین آمیز خودداری نمایید. در صورت مشاهده کامنت تایید نمیشود.</p>
                        </div>
                        {
                            this.props.commentSendMasage != '' 
                            && (
                                <div  className={this.props.commentSendMasage == 'لطفا پیامی بنویسید' ? 'comment-alert danger' : 'comment-alert'}>
                                    <h4>{this.props.commentSendMasage}</h4>
                                </div>
                            )
                        }
                        <div className="comments-me-writter">
                            <input type='text' className="comment-me-rep"  placeholder="نام خود را وارد کنید"/>
                        </div>
                        <div className="comment-me-text">
                            <textarea className="textareaComment textareaComment-me" placeholder="دیدگاه خود را وارد کنید"></textarea>                     
                        </div>
                        <div className="comment-me-sendCommentBtn">
                            <button onClick={() => {
                                const search = new URLSearchParams(window.location.search)
                                let id = search.get('drId')
                                
                                let name = document.querySelector('.comment-me-rep').value

                                let text = document.querySelector('.textareaComment-me').value


                                const formdata = new FormData()
                                formdata.append('dr_id' , id)
                                formdata.append('name' , name)
                                formdata.append('content' , text)
                                axios.post('http://192.168.0.226:2020/api/save_comment' , formdata).then(res => {
                                    console.log(res)
                                    this.props.commentHandleSendMassage(res.data.massage)
                                }).catch(err => {
                                    console.log(err)
                                    this.props.commentHandleSendMassage(err.response.data.massage)

                                })
                            }}>ارسال دیدگاه</button>
                        </div>
                        
                    </div>


                    <div className="comment-main">
                        <ul className="comment-wrapper">
                            {/* <Comment />
                            <Comment /> */}
                            {
                                this.props.comment && this.props.comment.map(item => {
                                    return(<Comment data={item} />)
                                })
                            }
                            {/* <Comment />
                            <Comment />
                            <Comment />
                            <Comment /> */}
                        </ul>
                    </div>


                    {/* <div className="comment-more">
                        <a href="#">نمایش بیشتر</a>
                    </div> */}
                </div>  
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       comment :  state.comments.docDetailComments ,
       repCommentIsShow : state.comments.repCommentIsShow,
       commentSendMasage : state.comments.commentSendMasage,
       commentSendId : state.comments.commentSendId,
       selectedDoctor : state.resultSearch.selectedDoctor,

    }
}

export default connect(mapStateToProps , {
    fetchComments,
    showRepComment ,
    commentHandleSendMassage,
    selectDoc

})(Comments) ;