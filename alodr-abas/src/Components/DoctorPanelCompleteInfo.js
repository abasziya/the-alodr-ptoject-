import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { doctorPanelComplete } from "../actions/type1";

class DoctorPanelCompleteInfo extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            showArea : false,
            showAreaText : '' ,
            showPlus : false,
            prof : null
        }
    }

    updateImageDisplay = () => {
        const input = document.querySelector('.profile-inp');
        const preview = document.querySelector('.preview');

        while(preview.firstChild){
            preview.removeChild(preview.firstChild)
        }

        const curFiles = input.files 
        console.log(curFiles)

        // if(curFiles.length = 0){
        //     let para = document.createElement('div')
        //     para.textContent('هنوز عکسی بارگذاری نشده')

        //     preview.appendChild(para)
        // }
        
            // let listPara = document.createElement('div');
            // let listImg = document.createElement('div');
            // preview.appendChild(list)
            // preview.appendChild(list)
            // let para1 = document.createElement('p');
            // let para2 = document.createElement('p');

            for(const file of curFiles){
                // para2.textContent = file.size
                let list = document.createElement('div')
                let para1 = document.createElement('p')
                if(this.validFileType(file)){
                    let img = document.createElement('img')
                    img.src = URL.createObjectURL(file)
                    img.id = 'avatarTarget'
    
                    // listPara.appendChild(para1);
                    // listPara.appendChild(para2);
                    // listImg.appendChild(img);
                    list.appendChild(img)
                } else {
                    para1.textContent = 'عکس وارد شده را اصلاح کنید'
                    list.appendChild(para1)
                }
                
                preview.appendChild(list)

                
            }

        
    }
    
    validFileType = (file) => {
        const fileTypes = [
            "image/apng",
            "image/bmp",
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/svg+xml",
            "image/tiff",
            "image/webp",
            "image/x-icon"
          ];
       
        return fileTypes.includes(file.type)
    }


    render(){
        return(
            <>
                <div className="doctorPanel-changed-main-title">
                    <span></span><h3>تکمیل اطلاعات</h3><span></span>
                </div>

                <div className="aboutMe">
                    <div className="aboutMe-title">
                        <h4>تغییر تصویر</h4>
                    </div>

                    <div className="aboutMe-prof" >
                        <div className="profileWrapper">
                            
                            <div class="previewSib">
                                <input type="file"  id="profile"  name="profile" className="profile-inp" onChange={this.updateImageDisplay}  accept="image/png, image/jpeg"/>
                                <label for="profile" className="label-prof" >عکس پروفایل</label>
                            </div>


                            <div class="preview">
                                <div>هنوز عکسی بارگذاری نشده</div>
                            </div>
                        </div> 


                        <div className="aboutMe-profDescription">
                            <ul>
                                <li>لطفا از فرمت jpg استفاده کنید</li>
                                <li>حجم عکس نباید بیشتر از 1 مگابایت باشد.</li>
                                <li>عکس شما تار نباشد</li>
                                <li>خط خوردگی یا علامت روی عکس نباشد</li>
                            </ul>
                        </div>
                    </div>


                    

                </div>

                <div className="aboutMe">
                        <div className="aboutMe-title">
                            <h4>درباره من</h4>
                        </div>
                        <div className="aboutMe-textaria" style={this.state.showArea === true ? {display : 'flex'} : {display : 'none'}}>
                            {
                                this.state.showPlus === false ?
                                (
                                    // <div className="aboutMe-textaria-div" style={this.state.showAreaText != '' ? {display : 'block'} : {display : 'none'}}>
                                    //     {this.state.showAreaText}
                                    // </div>
                                    <textarea value={this.state.showAreaText} className="aboutMe-text"  placeholder="متنی درباره خود بنویسید"></textarea>

                                )
                                :
                                (
                                    <textarea  className="aboutMe-text"  placeholder="متنی درباره خود بنویسید"></textarea>



                                )
                            }


                        </div>
                        {
                            this.state.showPlus === false
                            ?
                            (  
                                <div className="aboutMe-plus">
                                    <div className="aboutMe-plus-btn" onClick={()=>{


                                        let val = document.querySelector('.aboutMe-textaria').innerHTML

                                        this.setState({
                                            showArea : true ,
                                            showPlus : true,
                                            showAreaText : val  
                                        })
                                        

                                        
                                    }}>+</div>
                                    <div className="aboutMe-plus-text">افزودن درباره من</div>
                                </div>
                            )
                            :
                            (
                                <div className="aboutMe-confirm">
                                    <button className="aboutMe-confirm-btn" onClick={()=>{
                                        let val = document.querySelector('.aboutMe-textaria textarea').value
                                        console.log(val)
                                        this.setState({
                                            showPlus : false ,
                                            showAreaText : val
                                            
                                        })
                                    }}>ذخیره</button>
                                </div>
                            )
                        }

                </div>

                <div className="aboutMe-btn">
                    <button onClick={() => {
                        let image;
                        let img = document.querySelector('#profile').files[0] == undefined ? 'null' :  document.querySelector('#profile').files[0]
                        let bio = document.querySelector('.aboutMe-text').value == '' ? 'null' : document.querySelector('.aboutMe-text').value    

                        if(img != 'null'){
                            var reader = new FileReader();

                            reader.readAsDataURL(img);
                            reader.onload =  () =>{
                               image = reader.result 
                            //    console.log
                                axios.put('http://192.168.0.226:2020/api/dr/update' , {
                                    profile : image,
                                    Bio : bio,
                                    id : this.props.data.dr_id
                                }).then(res => {
                                    console.log(res)
                                    window.location.reload()
                                }).catch(err => {
                                    console.log(err)
                                })
                            }
                        }
                        else {
                            this.props.doctorPanelComplete(image , bio , this.props.data.dr_id)

                        }
                        // console.log(img)
                        // console.log()
                    }}>تکمیل</button>
                </div>



            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userLoginedInfo : state.user.userLoginedInfo
    }
}

export default connect(mapStateToProps , {
    doctorPanelComplete
})(DoctorPanelCompleteInfo);