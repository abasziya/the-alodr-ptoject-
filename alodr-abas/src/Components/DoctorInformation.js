import React, { Component } from "react";
import Sami from '../Adds/imgs/sami.jpg'
import { connect } from "react-redux";
import { selectDoc } from "../actions/type1";
import { fetchAllDoctors } from "../actions/type1";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";



class DoctorInformation extends Component {



    // componentDidMount (){
    //     const search = new URLSearchParams(window.location.search)
    //     let id = search.get('drId')

    //     axios.get(`http://192.168.0.226:2020/api/dr/${id}`).then(res => {
    //         console.log(res.data.data)
    //         this.props.selectDoc(res.data.data)

    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
    render(){

        return (


            <div className="doctorInformation">
                <div className="doctorInformationBox">

                    <div className="doctorInformationBox-prof">
                        <div className="doctorInformationBox-prof-pic">
                            <img src={this.props.data.profile} />
                        </div>
                        <div className="doctorInformationBox-prof-faver">
                            <label>افزودن به پزشکان مورد علاقه</label>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                    </div>


                    <div className="doctorInformationBox-info">
                        <div className="doctorInformationBox-info-header">
                            <div className="doctorInformationBox-info-header-name">
                                <h3>دکتر  {this.props.data.name}</h3>
                            </div>
                            <div className="doctorInformationBox-info-header-star">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="doctorInformationBox-info-main">
                            <ul>
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>تخصص : </span><span>{this.props.data.Speciallity}</span>
                                </li>
                                
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>شهر : </span><span>{this.props.data.city}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>ایمیل : </span><span>{this.props.data.email}</span>
                                </li>

                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>شماره مطب : </span><span>{this.props.data.number}</span>
                                </li>
                                
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>تعداد بازدید : </span><span>{this.props.data.view}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>بیمه : </span><span>{this.props.data.Insurance}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon  icon={faHeart} /><span>کد پزشکی : </span><span>{this.props.data.dr_code}</span>
                                </li>
                                                                

                            </ul>
                        </div>
                        <div className="doctorInformationBox-info-footer">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>آدرس : </span>
                            <span>{this.props.data.address}</span>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="doctorInformation">
            //     <div className="doctorInformation-right">
            //         <div className="doctorInfo-pic">
            //             {/* <img src={this.props.selectedDoctor[0].profile} /> */}
            //             {/* <img src={this.props.selectedDoctor[0].profile} /> */}

            //         </div>
            //         {/* <div className="doctorInfo-info">
            //             <div className="doctorInfo-text"><span>نام :</span><span>{this.props.selectedDoctor[0].name}</span></div>
            //             <div className="doctorInfo-text"><span>امتیاز :</span><span>87</span></div>
            //             <div className="doctorInfo-text"><span>تخصص :</span><span>{this.props.selectedDoctor[0].Speciallity}</span></div>
            //             <div className="doctorInfo-text"><span>شهر :</span><span>{this.props.selectedDoctor[0].city}</span></div>
            //             <div className="doctorInfo-text"><span>شماره :</span><span>{this.props.selectedDoctor[0].number}</span></div>
            //             <div className="doctorInfo-text " ><span  style={{width : '110px'}}>آدرس مطب :</span><span style={{lineHeight : '2'}}>تهران - نرسیده به میدان ونک - گاندی شمالی - واحد 3</span></div>
            //         </div> */}
            //     </div>

            //     <div className="doctorInformation-left">
            //         <div className="doctorInfo-aboutDoctor">
            //             <div className="doctorInfo-aboutDoctorTitle">
            //                 <h3>درباره دکتر</h3> 
            //             </div>

            //             <div className="doctorInfo-aboutDoctorText">
            //                 <p>
            //                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            // </div>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        selectedDoctor : state.resultSearch.selectedDoctor,
        alldr : state.resultSearch.alldr,


    }
}

export default connect(mapStateToProps , {
    selectDoc,
    fetchAllDoctors
})(DoctorInformation);