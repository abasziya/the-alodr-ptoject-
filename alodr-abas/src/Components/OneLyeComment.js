import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown as faThumbsDownFill } from "@fortawesome/free-solid-svg-icons";
import {  faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpFill } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { showRepComment } from "../actions/type1";
import { commentHandleSendMassage } from "../actions/type1";
import axios from "axios";


class OneLyeComment extends Component {
    render (){
        return(
            <li className="comments-box">
                <div className="comments" style={{width : '95%'}}>
                    <div className="comments-like">
                        <span></span>
                        <div className="comments-like-dislike">   
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <p>{this.props.data.DissLikes}</p>
                        </div>

                        <div className="comments-like-like">    
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <p>{this.props.data.Likes}</p>
                        </div>
                        
                    </div>

                    <div className="comments-content">
                        <div className="comments-content-name">
                            <p>{this.props.data.writer}</p>
                            <p>( در پاسخ به {this.props.data.answered_to} ) </p>
                        </div>
                        <div className="comments-content-text">
                            <p>
                            {this.props.data.comment}
                            </p>
                        </div> 
                    </div>

                    <div className="comments-info">
                        <div className="comments-info-date">
                            <p>({this.props.data.time})</p>
                        </div>
                        <div className="comments-info-replay" onClick={() => {
                            console.log(this.props.data.id)
                            let id = this.props.data.id
                            this.props.showRepComment(true , id)                      

                        }}>
                            <FontAwesomeIcon icon={faReply}/>
                        </div>
                    </div>
                </div>

                {
                    this.props.repCommentIsShow == true && this.props.repCommentId == this.props.data.id
                    && 
                    (
                        <div className="comments-rep animate__animated animate__fadeIn" >
                        {/* {
                            this.props.commentSendMasage != '' && this.props.commentSendId == this.props.data.id
                            && (
                                <div  className={this.props.commentSendMasage == 'لطفا پیامی بنویسید' ? 'comment-alert danger' : 'comment-alert'}>
                                    <h4>{this.props.commentSendMasage}</h4>
                                </div>
                            )
                        } */}

                        <div className="comments-rep-writter" id="par">
                            <input type='text' className="comment-me3-rep"   placeholder="نام خود را وارد کنید"/>
                        </div>

                        <div className="comments-rep-content">
                            <textarea className="textareaComment-rep textareaComment-rep2"  placeholder="دبدگاه خود را وارد کنید">
                                
                            </textarea>
                        </div>

                        <div className="comment-me-sendCommentBtn">
                                <button onClick={() => {
                                    // const search = new URLSearchParams(window.location.search)
                                    // let id = search.get('drId')
                                    // console.log()
                                    
                                    let name = document.querySelector('.comment-me3-rep').value
                                    console.log(name)

                                    let text = document.querySelector('.textareaComment-rep2').value

                                    console.log(text)

                                    const formdata = new FormData()
                                    formdata.append('answered_to' , this.props.data.id)
                                    formdata.append('name' , name)
                                    formdata.append('comment' , text)
                                    axios.post('http://192.168.0.226:2020/api/comment/AnswerToComment' , formdata).then(res => {
                                        console.log(res)
                                        this.props.commentHandleSendMassage(res.data.massage)

                                    }).catch(err => {
                                        console.log(err)
                                        this.props.commentHandleSendMassage(err.response.data.massage , this.props.data.id)
                                    })
                                }}>ارسال دیدگاه</button>

                                <button className="comment-me-cancelCommentBtn" onClick={() =>{
                                    this.props.showRepComment(false)                      
                                                                                
                                }}>انصراف</button>
                            </div>
                        </div>

                    )
                }

                {/* <ul className="comments-wrapper">
                    <li className="comments-box">
                        <div className="comments" style={{width : '90%'}}>
                        <div className="comments-like">
                            <span></span>
                            <div className="comments-like-dislike">   
                                <FontAwesomeIcon icon={faThumbsDown} />
                                <p>13</p>
                            </div>

                            <div className="comments-like-like">    
                                <FontAwesomeIcon icon={faThumbsUp}/>
                                <p>5</p>
                            </div>
                            
                        </div>

                        <div className="comments-content">
                            <div className="comments-content-name">
                                <p>aj</p>
                            </div>
                            <div className="comments-content-text">
                                <p>
                                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </div> 
                        </div>

                        <div className="comments-info">
                            <div className="comments-info-date">
                                <p>(4 روز قبل)</p>
                            </div>
                            <div className="comments-info-replay">
                                <FontAwesomeIcon icon={faReply}/>
                            </div>
                        </div>
                        </div>
                    </li>
                </ul> */}
            </li>

        )
    }
}


const mapStateToProps = (state) => {
    return{
        comment : state.comments.docDetailComments,
        repCommentIsShow : state.comments.repCommentIsShow,
        repCommentId : state.comments.repCommentId ,
        commentSendMasage : state.comments.commentSendMasage,
        commentSendId : state.comments.commentSendId,
    }
}


export default connect(mapStateToProps , {
    showRepComment,
    commentHandleSendMassage
})(OneLyeComment) ;