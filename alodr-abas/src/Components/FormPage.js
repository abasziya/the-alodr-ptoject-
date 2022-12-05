import React, { Component } from "react";
import Form from "./Form";
import SignLoginToggle from "./SignLoginToggle";
import SiteLogo from "./SiteLogo";
import FormLogo from './FormLogo';
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import axios from "axios";
import { Navigate } from "react-router-dom";
// import { handleRegisterErros } from "../actions/type1";
import { usRedirect } from "../actions/type1";
import { handleRegisterErros } from "../actions/type1";
import { fetchLoginedDoctor } from "../actions/type1";
import AlertForm from "./AlertForm";


class FormPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            time : {},
            seconds : 60,
            loginForget : 'login' ,
            phoneErrors : [],
            smsErrors : [],
            number : null ,
            registerPosition : 'first' ,
            // fomdataa : null,
            form : []
    
        }

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs){
        // let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "m": minutes,
          "s": seconds
        };
        return obj;
    }

    componentDidMount (){
    //   this.startTimer()
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }


    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }


    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        
        if (seconds == 0) { 
          clearInterval(this.timer);
          
        }
      }

    handleSmsCode = (event) =>
    {
       let value = [...event.target.value]
       
        let dig = /^\d/
        
        if(value.length <= 1 && dig.test(value)){
            let to;
        }
        else{
            value.pop()
        }

        let op = value.join('')

        event.target.value = op
    //    for(let i =0;i<value.length;++i){
    //        if(dig.test(value[i])){
    //            console.log('in')
    //            tar = value.join('')
    //        }
    //        else{
    //            value.pop()
    //        }
    //    }


    //    event.target.value = tar


    }

    handlePhoneBackup = (event) =>
    {
       let value = [...event.target.value]
       
        
        let dig = /^\d/
        
        if(value.length <= 11 && dig.test(value)){
            let to;
        }
        else{
            value.pop()
        }

        let op = value.join('')

        event.target.value = op
    //    for(let i =0;i<value.length;++i){
    //        if(dig.test(value[i])){
    //            console.log('in')
    //            tar = value.join('')
    //        }
    //        else{
    //            value.pop()
    //        }
    //    }


    //    event.target.value = tar


    }
    render(){
        let redirect = null;
        if(this.props.userRedirect === true){
            redirect = <Navigate to='/doctorPanel' />
        }

        return(
                <>
                    {redirect}
                    {
                    
                        this.props.formState === 'signIn' ?
                        (
                            <div className="form"  >
                                <AlertForm />
                                
                                <div className="form-box animate__animated animate__backInLeft">
                                    {/* <div className="signLogin-toggle">
                                        <SignLoginToggle />
                                    </div>
                                    <div className="signLoginHeader">
                                        {this.props.formHeader} پزشک 
                                    </div> */}
            
                                    {
                                        this.state.registerPosition === 'first'
                                        ?
                                        (
                                            <>
                                                <div className="signLogin-toggle">
                                                    <SignLoginToggle />
                                                </div>
                                                <div className="signLoginHeader">
                                                    {this.props.formHeader} پزشک 
                                                </div>
                                                <Form />
                
                                                <div className="signLoginButton">
                                                    <button type="submit" className="signLoginButton-main" onClick={(e) => {

                                                        e.preventDefault();


                                                        let firstName = document.querySelector('.firstName-inp').value
                                                        let email = document.querySelector('.email').value
                                                        let number = parseInt(document.querySelector('.number1-inp').value)
                                                        
                                                        let city = this.props.dropDownCityId === null ? null :  parseInt(this.props.dropDownCityId)
                                                        let spc =this.props.dropDownSpeId === null ? null : parseInt(this.props.dropDownSpeId)
                                                        let code = parseInt(document.querySelector('.drCode-inp').value)
                                                        let pass = document.querySelector('.password-inp').value
                                                        let passv = document.querySelector('.repPassword-inp').value
                                                        let phone = document.querySelector('.phone-inp').value
                                                        let address = document.querySelector('.address-inp').value
                                                        let img = document.querySelector('#profile').files[0]   
                                                        console.log(img) 
                                                        let fa = /[^آ-ی]/

                                                        if(fa.test(firstName) && firstName != ''){
                                                            this.props.handleRegisterErros(['نام اشتباه است'])
                                                            return false;
                                                        } 
                                                        if(img == undefined){
                                                            this.props.handleRegisterErros(['پروفایل اجباری است'])
                                                            return false;
                                                        }   

                                                        let emi = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
                                                        if(!emi.test(email)  && email != ''){
                                                            this.props.handleRegisterErros(['ایمیل اشتباه است'])
                                                            return false;
                                                        }


                                                        let dig = /[^0-9]/
                                                        if(dig.test(code) && code != ''){
                                                            this.props.handleRegisterErros(['کد پزشکی را وارد کنید'])
                                                            return false;
                                                        }

                                                        let addr = document.querySelector('.address-inp').value
                                                        console.log(addr)
                                                        // let ins = document.querySelector('.checkbox-inp')
                                                        // console.log(ins)
                                                        let formdata = new FormData();

                                                        


                                                        var reader = new FileReader();

                                                        reader.readAsDataURL(img);
                                                        

                                                        reader.onload =  () => {
                                                            // reader.result;//base64encoded string
                                                            // const body = {
                                                            //     name :  firstName,
                                                            //     email : email,
                                                            //     number : number,
                                                            //     city_id : city,
                                                            //     Speciallity_id : spc,
                                                            //     dr_code : code,
                                                            //     password : pass,
                                                            //     password_verify : passv,
                                                            //     profile : reader.result 
                                                                
                                                            // }
                                                            const formData = new FormData();

                                                            formData.append('name' , firstName)
                                                            formData.append('email' , email)
                                                            formData.append('number' , `0${number}`)
                                                            if(city != null){
                                                                formData.append('city_id' , city)
                                                            }
                                                            if(spc != null)
                                                            {
                                                                formData.append('Speciallity_id' , spc)

                                                            }
                                                            formData.append('dr_code' , code)
                                                            formData.append('password' , pass)
                                                            formData.append('password_verify' , passv)
                                                            formData.append('number2' , phone)
                                                            formData.append('address' , address)
                                                            formData.append('profile' , reader.result )
                

                                                            
                                                            
                                                            let date = axios.post('http://192.168.0.226:2020/api/getCode' , formData).then(res => {
                                                                this.setState({
                                                                    form : res.data.requested ,
                                                                    registerPosition : 'second'
                                                                })


                                                            }).catch(err => {
                                                                // console.log(err)
                                                                console.log(err.response.data)
                                                                this.props.handleRegisterErros(err.response.data) 
                                                            })

                                                            console.log(date)
                                                        };
                                                        reader.onerror = function (error) {
                                                            console.log('Error: ', error);
                                                        };  
                                                            

                                                        
                                                    
                                                    }}>تکمیل عضویت</button>
                                                </div>

                                                <div className="signLoginErros">
                                                    <ul className="ulErrors">
                                                        {/* <li>لطفا رمز عبور را وارد کنید</li>
                                                        <li>لطفا نام را وارد کنید</li>
                                                        <li>لطفا ایمیل را وارد کنید </li>
                                                        <li>ایمیل تکراری است</li>
                                                        <li>کد پزشکی تکراری است</li>
                                                        <li>لطفا شهر را انتخاب کنید</li>
                                                        <li>لطفا تخصص را انتخاب کنید</li>
                                                        <li>شماره موبایل باید 11 رقم باشد</li> */}
                                                        {
                                                            this.props.registerErros && 
                                                            this.props.registerErros.map(item => {
                                                            return (
                                                                    <li>{item}</li>
                                                            )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </>
                                        )

                                        :   
                                        (
                                            <>
                                                <div className="codeBox">
                                                    <div className="signLoginHeader">
                                                        وارد کردن کد موقت
                                                    </div>

                                                    <div className="code-wrapper">
                                                    
                                                        <input type="text" name="codeNumber1"  className="codeNumber1" onChange={this.handleSmsCode}/>
                                                        <input type="text" name="codeNumber2"  className="codeNumber2" onChange={this.handleSmsCode}/>
                                                        <input type="text" name="codeNumber3"  className="codeNumber3" onChange={this.handleSmsCode}/> 
                                                        <input type="text" name="codeNumber4"  className="codeNumber4" onChange={this.handleSmsCode}/>
                                                    
                                                    </div>

                                                    <div className="codeTimer">
                                                        {/* <span>پیامک شد ({this.state.time.s} ثانیه تا ارسال مجدد)</span> */}

                                                        {/* <span style={this.state.time.s == 0 ? {display : 'block'} : {display : 'none'}} onClick={()=>{
                                                            this.setState({
                                                                seconds : 60,
                                                                
                                                            })

                                                            this.timer = 60
                                                            this.startTimer()
                                                        }}>ارسال مجدد کد</span> */}
                                                    </div>


                                                    <div className="formWrpper-logBtnBox" style={{marginBottom : '5%'}}>
                                                    
                                                        <button onClick={ async(event) => {
                                                            event.preventDefault();
                                                            let inputs = document.querySelectorAll('.code-wrapper input')

                                                            let codes = [];
                                                            inputs.forEach((item) => {
                                                                if(item.value != '' && item.value.length == 1){
                                                                    codes.push(item.value)
                                                                }
                                                            })
                                                            console.log(codes.length)

                                                            let accessCode = codes.join('')
                                                            if(codes.length == 4){
                                                                const formdata = new FormData();
                                                                // formData.append('number' , this.state.num)
                                                                // formdata.append('code' , accessCode)
                                                                // formData.append('code' , accessCode)
                                                               console.log(this.state.form)
                                                               let { Speciallity_id , city_id , dr_code, email , name , number , password , password_verify , profile } = this.state.form
                                                                console.log(Speciallity_id)
                                                               formdata.append('name' , name)
                                                               formdata.append('email' , email)
                                                               formdata.append('number' , number)
                                                               formdata.append('city_id' , city_id)
                                                               formdata.append('Speciallity_id' , Speciallity_id)
                                                               formdata.append('dr_code' , dr_code)
                                                               formdata.append('password' , password)
                                                               formdata.append('password_verify' , password_verify)
                                                               formdata.append('profile' , profile )
                                                               formdata.append('code' , accessCode)
                                                                console.log(formdata)
                                                                axios.post('http://192.168.0.226:2020/api/ValidateNumber' , formdata  ).then(res => {
                                                                    localStorage.setItem('token' , res.data.access_token)
                                                                    localStorage.setItem('refresh_token' , res.data.refresh_token)

                                                                    this.props.fetchLoginedDoctor()

                                                                    // console.log('state')
                                                                    console.log('success')
                                                                    if(localStorage.getItem('token')){
                                                                    this.props.usRedirect(true)

                                                                    }
                                                                    console.log(res)
                                                                }).catch(err => {
                                                                    console.log(err)
                                                                })

                                                            }else{
                                                                let arry =[]
                                                                arry.push('کد وارد شده نامعتبر است')
                                                                this.setState({
                                                                    smsErrors : arry
                                                                })
                                                            }


                                                        }}>ارسال کد</button>


                                                        
                                                        <div>
                                                            <a className="label-pass" onClick={() => {
                                                                    this.setState({
                                                                    registerPosition : 'first'
                                                                })                                                                       
                                                            }}><span >ویرایش شماره</span></a>
                                                        </div>
                                                                    
                                                    </div>


                                                    <div className="signLoginErros" style={{marginTop : '4%'}}> 
                                                        <ul className="ulErrors">

                                                            {
                                                                this.state.smsErrors && 
                                                                this.state.smsErrors.map(item => {
                                                                return (
                                                                    <li>{item}</li>
                                                                )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        )

                                    }   

                                    
                                </div>
            
            
            
            
                                <div className="form-banner animate__animated animate__backInUp">
                                    
            
                                    <div className="form-banner-wrapper">
                                        <FormLogo />
                                        <h3 className="form-banner-welcom">خوش آمدید</h3>
                                        <p className="form-banner-sub">الو دکتر فرصتی برای نشان دادن مهارت شما</p>
                                    </div>
            
                                    <div>
                                        <button className="form-Userbtn label-prof">ورود به ناحیه کاربری</button>
                                    </div>
                                    
                                </div>
        
                            </div>
                        )

                        :

                        (
                            <LoginPage />
                        )
                    }
                </>
            

            


                




        )
    }
}


const mapStateToProps = (state) => {
    return {
        formHeader : state.form.formHeader,
        formState : state.form.formState , 
        registerErros : state.form.registerErros,
        dropDownCityId : state.form.dropDownCityId ,
        dropDownSpeId : state.form.dropDownSpeId ,
        userRedirect : state.user.userRedirect
    }
}

export default connect(mapStateToProps , {
    handleRegisterErros , 
    fetchLoginedDoctor ,
    usRedirect
} )(FormPage);