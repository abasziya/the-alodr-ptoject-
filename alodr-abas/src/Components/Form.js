import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../actions/type1";
import { fetchSpeciallity } from "../actions/type1";
import { addIdCity } from "../actions/type1";
import { sendDropDownInpIsShowCity } from "../actions/type1";
import { sendDropDownInpIsShowSpe } from "../actions/type1";
import { alertFormIsShow } from "../actions/type1";
import LiDropDownCity from "./LiDropDownCity";
import LiDropDown from "./LiDropDownCity";
import LiDropDownSpe from "./LiDropDownSpe";
import SelCity from "./SelCity";



class Form extends Component {
    // onSub = () => {

    state = {
        profState : false,
    }

    // }
    updateImageDisplay = () => {
        const input = document.querySelector('.profile-inp');
        const preview = document.querySelector('.preview');


        const curFiles = input.files 
        console.log(curFiles)
        if(curFiles.length > 0){
            this.setState({
                profState : true
            })
        }
        else{
            this.setState({
                profState : false
            })
        }
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

            // for(const file of curFiles){
            //     // para2.textContent = file.size
            //     let list = document.createElement('div')
            //     let para1 = document.createElement('p')
            //     if(this.validFileType(file)){
            //         let img = document.createElement('img')
            //         img.src = URL.createObjectURL(file)
            //         img.id = 'avatarTarget'
    
            //         // listPara.appendChild(para1);
            //         // listPara.appendChild(para2);
            //         // listImg.appendChild(img);
            //         list.appendChild(img)
            //     } else {
            //         para1.textContent = 'عکس وارد شده را اصلاح کنید'
            //         list.appendChild(para1)
            //     }
                
            //     // preview.appendChild(list)

                
            // }

        
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


    handelNameReg = (event) =>{
       let fa = /[^آ-ی]/
        let op = [...event.target.value]


        if(fa.test(op[op.length -1]) )
        {
            if(op[op.length -1] != ' ' && op.length > 0 ){
                op.pop()
                let alertTxt  = 'فقط از حروف فارسی استفاده کنید'  
                this.props.alertFormIsShow(true , alertTxt)
            }
        }
        else {
            this.props.alertFormIsShow(false)
        }
        
        let val = op.join('')
        event.target.value = val
        

    }




    phoneHandleReg = (event) => {
        let num = /\D/
        let op = [0]
        op = [...event.target.value]
        console.log(op[0])
        // if(!num.test(event.target.value)){
        //     console.log('op')
        // }
        if(op[0] != 0 || op.length > 11 ){

            if(op[op.length -1] != ' ' && op.length > 0 ){
                op.pop()
                let alertTxt  = 'ابتدای شماره باید با 0 شروع  و نباید بیش از 7 رقم باشد'  
                this.props.alertFormIsShow(true , alertTxt)
            }


        }
        else {
            this.props.alertFormIsShow(false)
        }
        let val = op.join('')
        
        event.target.value = val
        

    }


    emailHandleReg = (event) => {
       let fa = /[آ-ی]/g
       let emi = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g

       let op = [...event.target.value]
        if(fa.test(op[op.length -1])){
            op.pop()
            let alertTxt  = 'ایمیل باید انگلیسی باشد'  
            this.props.alertFormIsShow(true , alertTxt)
        
        }else{
            this.props.alertFormIsShow(false)
        }

        // if(emi.test(event.target.value)){
        //     console.log('booo')
        // }
        // else{
        //     console.log('no')
        // }
        
        let val = op.join('')

        event.target.value = val





    }


    addresHandleReg = (event) =>{
        let fa = /[^آ-ی]/
        let op = [...event.target.value]

        if(fa.test(op[op.length - 1] )){
            if(op[op.length -1] != ' ' && op.length > 0  ){
                op.pop()
                let alertTxt  = 'فقط از حروف فارسی استفاده کنید'  
                this.props.alertFormIsShow(true , alertTxt)
            }
        }
        else {
            this.props.alertFormIsShow(false)
        }

        let val = op.join('')

        event.target.value = val
    }
    componentDidMount(){
        this.props.fetchCities()
        this.props.fetchSpeciallity()
    }
    render(){



        return(
            <form encType="multipart/form-data"  >
                <div className="formWrpper ">

                   
                    {
                        this.props.formState === 'signIn' 
                        
                        &&
                        (
                            <>
                                <div className="formWrapper-child profileWrapper">
                                    <div class="previewSib">
                                        <input type="file"  id="profile"  name="profile" className="profile-inp" onChange={this.updateImageDisplay}  accept="image/png, image/jpeg"/>
                                        <label for="profile" className="label-prof" >عکس پروفایل</label>
                                    </div>

                                    <span style={this.state.profState === true ? {width : '100px'} : {width : '0px'}}></span>
                                    {/* <div class="preview">
                                        <div>هنوز عکسی بارگذاری نشده</div>
                                    </div> */}
                                </div> 
                                <div className="formWrapper-child text-inputs">
                                    <div>
                                        <input type="text" className="firstName-inp inp" name="name"  placeholder="نام و نام خانوادگی" onChange={this.handelNameReg}/>
                                        <input type="number"  className="number1-inp" name="number1" min="0" max="9" onChange={this.phoneHandleReg} onFocus={this.phoneFocus} placeholder="شماره موبایل"/>
                                        <input type="email" name="email" className="email" onChange={this.emailHandleReg} placeholder="ایمیل"/>
                                    </div>

                                    <div>
                                        

                                        {/* <input type="text" name="time_open" className="timeOpen-inp" placeholder="ساعت شروع کار" />
                                        <input type="text"  name="time_close" className="timeClose-inp" placeholder="ساعت پایان کار" /> */}
                                        <input type="number" name="dr_code" className="drCode-inp" placeholder="کد پزشکی" />

                                        <input type="password" name="password" className="password-inp" placeholder="رمز عبور"  />
                                        <input type="password" name="password_verify" className="repPassword-inp" placeholder="تکرار رمز عبور"  />
                                    </div>

                                    <div>


                                        <div className="selection-inputs">
                                            
                                                


                                            
                                            <div className="dropdown">

                                                {
                                                    this.props.selectInpCity.value === null 
                                                    ? 
                                                        (<input  className="newInp" name="city"  placeholder="انتخاب شهر" style={{cursor : 'pointer'}} onClick={(event) => {
                                                            this.props.sendDropDownInpIsShowCity(!this.props.dropDownInpIsShowCity)
                                                        
                                                        }}/>)
                                                    :
                                                        (<input  className="newInp" name="city"  value={this.props.selectInpCity.value} placeholder="انتخاب شهر" style={{cursor : 'pointer'}} onClick={() => {
                                                            this.props.sendDropDownInpIsShowCity(!this.props.dropDownInpIsShowCity)}}/>)
                                                    
                                                }

                                                <ul className="dropdown-content animate__animated animate__flipInX" style={this.props.dropDownInpIsShowCity === false ? {display : 'none'} : {display : 'block'} }>

                                                   {
                                                        this.props.city && this.props.city.map(item => {
                                                            return (<LiDropDownCity data={item} key={item.id} />)
                                                        })
                                                   }
                                                </ul>
                                            </div>

                                            <div className="dropdown">

                                                {
                                                    this.props.selectInpSpe.val === null 
                                                    ? 
                                                        (<input  className="specially-inp select-inp" name="specially"  placeholder="انتخاب تخصص" style={{cursor : 'pointer'}} onClick={(event) => {
                                                            this.props.sendDropDownInpIsShowSpe(!this.props.dropDownInpIsShowSpe)
                                                        }}/>)
                                                    :
                                                        (<input  className="specially-inp select-inp" name="specially"  value={this.props.selectInpSpe.val} placeholder="انتخاب تخصص" style={{cursor : 'pointer'}} onClick={() => {
                                                            this.props.sendDropDownInpIsShowSpe(!this.props.dropDownInpIsShowSpe)}}/>)
                                                    
                                                }

                                                <ul className="dropdown-content animate__animated animate__flipInX" style={this.props.dropDownInpIsShowSpe === false ? {display : 'none'} : {display : 'block'} }>
                                                    {
                                                        this.props.spe && this.props.spe.map(item => {
                                                            return (<LiDropDownSpe data={item} key={item.id} />)
                                                        })
                                                    }
                                                </ul>
                                            </div>  

                                            

                                            <input type="number"  className="phone-inp" name="phone" min="0" max="9" onChange={this.phoneHandleReg} onFocus={this.phoneFocus} placeholder="شماره مطب"/>
                                            
                                            {/* <input  className="hospital-inp select-inp" name="hospital" list="hospitals" placeholder="انتخاب بیمارستان" style={{cursor : 'pointer'}}/>
                                            <datalist id="hospitals" value="انتخاب بیمارستان">
                                                <option value='نور' />
                                                <option value='میسح دانشوری' />
                                                <option value='امام علی' />
                                            </datalist>  */}
                                            
                                                
                                            
                                        </div>
                                    </div>



                                    <input type="text" name="address" className="address-inp" onChange={this.addresHandleReg} placeholder="آدرس" />

                                    <div className="radiobox">
                                        <label for="insurance">مشمول بیمه : </label>    
                                        <input type="checkbox" className="checkbox-inp" name="insurance" />
                                    </div>


                                </div>
                    
                            </>
                        )

                        
                    }


                        


                       

                        


                        



                                     
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        formState : state.form.formState,
        city : state.quickSelect.citys ,
        spe : state.quickSelect.spe ,
        dropDownInpIsShowCity : state.form.dropDownInpIsShowCity , 
        dropDownInpIsShowSpe : state.form.dropDownInpIsShowSpe , 
        selectInpCity : state.form.selectInpCity,
        selectInpSpe : state.form.selectInpSpe ,
        alertFormShow: state.form.alertForm.alertFormIsShow ,


    }
}

export default connect(mapStateToProps , {
    fetchCities ,
    fetchSpeciallity, 
    addIdCity ,
    sendDropDownInpIsShowCity,
    sendDropDownInpIsShowSpe,
    alertFormIsShow
})(Form) ;