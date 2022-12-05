import React, { Component } from "react";
import SignLoginToggle from "./SignLoginToggle";
import { connect } from "react-redux";
import { handleLoginErrors } from "../actions/type1";
import { fetchLoginedDoctor } from "../actions/type1";
import { Navigate, useNavigate ,createBrowserHistory } from "react-router-dom";
import { usRedirect } from "../actions/type1";
import CodeBox from "./CodeBox";
import axios from 'axios';


class LoginPage extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            time : {},
            loginForget : 'login' ,
            phoneErrors : [],
            smsErrors : [],
            number : null ,
            sec : null
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
      this.startTimer()
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


    componentDidUpdate = (prevProps , preveState) =>{
        console.log(prevProps)
        console.log(preveState)
    }
    render (){

        let redirect = null;
        if(this.props.userRedirect === true){
            redirect = <Navigate to='/doctorPanel' />
        }
        return(
            <div className="form">
                {redirect}
                {
                    this.state.loginForget === 'login' ?
                    (
                        <div className="login-formWrapper animate__animated animate__fadeInDown">
                        
                            <div className="signLogin-toggle">
                                <SignLoginToggle />
                            </div>
                            <div className="signLoginHeader">
                                {this.props.formHeader} پزشک 
                            </div>
                            <div className="formWrpper-logInpBox">
                                <div>
                                    <input type="email" name="email" id="em" className={this.props.logErr.length > 0 ? 'inpDang animate__animated animate__shakeX' : 'em'} placeholder="ایمیل"/>
                                </div>
                                <div className="formWrpper-logInpBox-passwordBox">
                                    <input type="password" name="password" id="pass-inp" className={this.props.logErr.length > 0 ? 'inpDang animate__animated animate__shakeX' : 'em'} placeholder="رمز عبور" />
                                    <a className="label-pass">در صورت فراموشی رمز عبور <span style={{color : 'rgb(7, 44, 112)'}} onClick={() => {
                                        this.setState({
                                            loginForget : 'enterphone'
                                        })
                                    }}>اینجا</span> کلیک کنید</a>

                                </div>

                                <div className="signLoginErros">
                                            <ul className="ulErrors">

                                                {
                                                    this.props.logErr && 
                                                    this.props.logErr.map(item => {
                                                    return (
                                                            <li>{item}</li>
                                                    )
                                                    })
                                                }
                                            </ul>
                                </div>
                            </div>

                            <div className="formWrpper-logBtnBox">
                            
                                <button onClick={ async(event) => {
                                    event.preventDefault();
                                        // let history = createBrowserHistory()
                                        // history.listen(({location , action}) => {
                                        //     console.log(location.patchname)
                                        // })
                                        // localStorage.setItem('token' , 'sdsdwwd')
                                        // if(localStorage.getItem('token')){
                                        //     // this.props.fetchLoginedDoctor()
                                        //     this.props.usRedirect(true)
                                        // }
                                        const formdata = new FormData()
        
                                        let email = document.querySelector('#em').value
                                        if(email === ''){
                                            this.props.handleLoginErrors(['مقدار ایمیل اجباری است'])
                                            return false;
                                        }
                                        let password = document.querySelector('#pass-inp').value
                                        if(password === ''){
                                            this.props.handleLoginErrors(['مقدار رمز عبور اجباری است'])
                                            return false
                                        }
        
                                        formdata.append('email' , email)
                                        formdata.append('password' , password)
                                        
                                        axios.post('http://192.168.0.226:2020/api/login' , formdata).then(res => {
                                                console.log(res)
                                                localStorage.setItem('token' , res.data.access_token)
                                                localStorage.setItem('refresh_token' , res.data.refresh_token)

                                                this.props.fetchLoginedDoctor()

                                                // console.log('state')
                                                this.props.usRedirect(true)
                                                
                                                // window.history.pushState({} , undefined , '/doctorPanel')
                                                // window.location.reload()
                                        }).catch(err => {
                                                console.log(err)
                                                this.props.handleLoginErrors(err.response.data)

                                        })

                                }}>ورود</button> 
                            </div>

                        </div>
                    )

                    : this.state.loginForget === 'enterphone' ?

                    (
                        <div className="login-forget animate__animated animate__fadeInDown">
                        

                            <div className="signLoginHeader">
                                وارد کردن شماره موبایل
                            </div>
                            <div className="formWrpper-forget">

                                <div className="formWrpper-forget-numberBox">
                                    <input type="text"  className="mobileNumber" onChange={this.handlePhoneBackup}/>
                                </div>

                                <div className="signLoginErros">
                                        <ul className="ulErrors">

                                            {
                                                this.state.phoneErrors && 
                                                this.state.phoneErrors.map(item => {
                                                return (
                                                        <li>{item}</li>
                                                )
                                                })
                                            }
                                        </ul>
                                </div>
                            </div>

                            <div className="formWrpper-logBtnBox">
                            
                                <button onClick={ async(event) => {
                                    event.preventDefault();
                                   let reg =  /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
                                    let mobile = document.querySelector('.mobileNumber').value
                                   if(reg.test(mobile)){
                                       console.log('success')
                                        const formData = new FormData()
                                        formData.append('number' , mobile)
                                       axios.post('http://192.168.0.226:2020/api/forgotPassword' , formData).then(res => {

                                            console.log(res.data.timer)
                                            this.setState({
                                                number : mobile,
                                                loginForget : ['entercode'],
                                                sec : res.data.timer
                                                
                                            })
                                            localStorage.setItem('number' , mobile)
                                            this.startTimer()

                                            console.log(res)
                                        }).catch(err => {
                                            // console.log(err)
                                            this.setState({
                                                phoneErrors : ['شماره موبایل نامعتبر است']
                                            })
                                            // this.state.phoneErrors(err.response.data)
                                       })
                                    }
                                   else {
                                      console.log('not success')

                                      this.setState({
                                          phoneErrors : ['شماره موبایل نامعتبر است']
                                      })
                                   }

                                }}>ارسال کد</button>


                                <div>
                                    <a className="label-pass"><span  onClick={() => {
                                        this.setState({
                                            loginForget : 'login'
                                        })
                                    }}>بازگشت به صفحه قبل</span></a>
                                </div> 
                            </div>
                        </div>
                    )

                    :
                    (
                        // <CodeBox time={this.state.sec}/>
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
                                {/* <CodeBox time={this.state.sec}/> */}
                                
                                
                                
                                {/* style={this.state.time.s == 0 ? {display : 'block'} : {display : 'none'}} */}
                                <span style={{display : 'block'}} onClick={()=>{
                                    console.log('span')
                                    const formData = new FormData()
                                    formData.append('number' , localStorage.getItem('number'))
                                    axios.post('http://192.168.0.226:2020/api/forgotPassword' , formData).then(res => {
                                        console.log(res)
                                    })
                                    
                                    
                                   
                                }}>ارسال مجدد کد</span>
                            </div>
            
            
                            <div className="formWrpper-logBtnBox">
                            
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
                                        formdata.append('number' , this.state.number)
                                        formdata.append('code' , accessCode)
                                        axios.post('http://192.168.0.226:2020/api/LoginByCode' , formdata).then(res => {
                                            localStorage.setItem('token' , res.data.access_token)
                                            localStorage.setItem('refresh_token' , res.data.refresh_token)
            
                                            this.props.fetchLoginedDoctor()
            
                                            // console.log('state')
                                            this.props.usRedirect(true)
                                            console.log(res)
                                        }).catch(err => {
                                            this.setState({
                                                smsErrors : err.response.data
                                            })
                                        })
            
                                        console.log('success')
                                    }else{
                                        let arry =[]
                                        arry.push('کد وارد شده نامعتبر است')
                                        this.setState({
                                            smsErrors : arry
                                        })
                                    }
            
                                    // if(inputs.ever)
                                    // this.props.usRedirect(true)
            
                                        // localStorage.setItem('token' , 'sdsdwwd')
                                        // if(localStorage.getItem('token')){
                                        //     // this.props.fetchLoginedDoctor()
                                        // }
                                }}>ارسال کد</button>
            
            
                            
                                <div>
                                    <a className="label-pass"><span  onClick={() => {
                                        this.setState({
                                            loginForget : 'enterphone'
                                        })
                                    }}>ویرایش شماره</span></a>
                                </div>
                                
                            </div> 
            
                            <div className="signLoginErros" style={{marginBottom : '4%'}}> 
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

                    )
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formHeader : state.form.formHeader ,
        logErr : state.form.login.logErr ,
        userRedirect : state.user.userRedirect
    }
}


export default connect(mapStateToProps , {
    handleLoginErrors ,
    fetchLoginedDoctor ,
    usRedirect
})(LoginPage);