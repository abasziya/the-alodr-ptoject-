import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupiahSign, faThumbsDown as faThumbsDownFill } from "@fortawesome/free-solid-svg-icons";
import {  faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpFill } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import OneLyeComment from "./OneLyeComment";
import { connect } from "react-redux";
import axios from "axios";
import { showRepComment } from "../actions/type1";
import { commentHandleSendMassage } from "../actions/type1";
import { fetchLikeDislike } from "../actions/type1";
import { fetchComments } from "../actions/type1";


class Comment extends Component {
    render(){
        
        return(
            <li className="comments-box">
                <div className="comments">
                    <div className="comments-like">
                        <div className="comments-like-dislike">
                            {
                                this.props.disslike === true && !localStorage.getItem('stateDis') 
                                
                                ?
                                (

                                    <FontAwesomeIcon icon={ faThumbsDown} onClick={() => {

                                        this.props.fetchLikeDislike( this.props.data.id,2,false)
                                        
                                        localStorage.setItem('stateDis' , 'dis')
                                        const search = new URLSearchParams(window.location.search)
                                        let id = search.get('drId')
                                 
                                        
                                        this.props.fetchComments(id)
                                    }} />
                                )
                                :
                                (    



                                    <FontAwesomeIcon icon={ faThumbsDownFill} onClick={() => {
                                        // this.props.likeDisslikeState.like = false
                                        // this.props.likeDisslikeState.dissLike = true
                                        this.props.fetchLikeDislike(this.props.data.id , 3,true)
                                        localStorage.removeItem('stateDis')
                                        const search = new URLSearchParams(window.location.search)
                                        let id = search.get('drId')
                                        
                                        this.props.fetchComments(id)
                                    }} />
                                )
                            }   



                            <p>{this.props.data.DissLikes}</p>
                        </div>

                        {/* <div className="comments-like-like" >    
                            {
                                this.props.likeDisslikeState != true && localStorage.getItem('stateLik')
                                ?
                                (
                                    <FontAwesomeIcon icon={faThumbsUpFill} onClick={() => {
                                        this.props.fetchLikeDislike( this.props.data.id,4,true)
                                        localStorage.removeItem('stateLik')
                                        const search = new URLSearchParams(window.location.search)
                                        let id = search.get('drId')
                                        
                                        this.props.fetchComments(id)
                                    }} />

                                )
                                :
                                (

                                    <FontAwesomeIcon icon={faThumbsUp} onClick={() => {
                                        this.props.fetchLikeDislike(this.props.data.id , 1,false)
                                        const search = new URLSearchParams(window.location.search)
                                        let id = search.get('drId')
                                        localStorage.setItem('stateLik' , 'lik')

                                        this.props.fetchComments(id)
                                    }} />
                                )
                            }   


                            <p>{this.props.data.Likes}</p>
                        </div> */}
                        
                    </div>

                    <div className="comments-content">
                        <div className="comments-content-name">
                            <p>{this.props.data.writer}</p>
                        </div>
                        <div className="comments-content-text">
                            <p>
                                {
                                    this.props.data.comment
                                }
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
                                <div  className={this.props.commentSendMasage == 'لطفا پیامی بنویسید' ? 'comment-alert' : 'comment-alert'}>
                                    <h4>{this.props.commentSendMasage}</h4>
                                </div>
                            )
                        } */}
                                {/* <div  className={this.props.commentSendMasage == 'لطفا پیامی بنویسید' ? 'comment-alert danger' : 'comment-alert'}>
                                    <h4>{this.props.commentSendMasage}</h4>
                                </div> */}
                        <div className="comments-rep-writter">
                            <input type='text' className="comment-me2-rep"  placeholder="نام خود را وارد کنید"/>
                        </div>
    
                        <div className="comments-rep-content">
                            <textarea className="textareaComment-rep" placeholder="دبدگاه خود را وارد کنید">
                                
                            </textarea>
                        </div>
    
                        <div className="comment-me-sendCommentBtn">
                            <button onClick={() => {
                                // const search = new URLSearchParams(window.location.search)
                                // let id = search.get('drId')
                                // console.log()
                                
                                let name = document.querySelector('.comment-me2-rep').value
                                // console.log(name)
    
                                let text = document.querySelector('.textareaComment-rep').value
    
                                // console.log(text)
    
                                const formdata = new FormData()
                                formdata.append('answered_to' , this.props.data.id)
                                formdata.append('name' , name)
                            
                                formdata.append('comment' , text)

                                axios.post('http://192.168.0.226:2020/api/comment/AnswerToComment' , formdata).then(res => {
                                    console.log(res)
                                    this.props.commentHandleSendMassage(res.data.massage)
    
                                }).catch(err => {
                                    console.log(err)
                                    this.props.commentHandleSendMassage(err.response.data.massage)
                                })
                            }}>ارسال دیدگاه</button>
    
                            <button className="comment-me-cancelCommentBtn" onClick={() =>{
                                this.props.showRepComment(false)                      
                            }}>انصراف</button>
                            </div>
                        </div>
                    )
                } 

                    
                
                


                <ul className="comments-wrapper">
                    {
                        this.props.data.answers != 'null' && this.props.data.answers.map(item => {
         
                            return (<OneLyeComment data={item} /> )
                        })
                    }
                </ul>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        comment : state.comments.docDetailComments,
       repCommentIsShow : state.comments.repCommentIsShow ,
       repCommentId : state.comments.repCommentId ,
       commentSendMasage : state.comments.commentSendMasage,
       commentSendId : state.comments.commentSendId,

       like : state.comments.commentLike,
       disslike : state.comments.commentDisslike,


    }
}

export default connect(mapStateToProps , {
    showRepComment , 
    commentHandleSendMassage ,
    fetchLikeDislike,
    fetchComments
})(Comment) ;