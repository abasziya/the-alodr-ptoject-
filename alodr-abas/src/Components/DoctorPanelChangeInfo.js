import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import LiDropDownCity from "./LiDropDownCity";
import { sendDropDownInpIsShowCity } from "../actions/type1";
import { fetchCities } from "../actions/type1";
import { fetchSpeciallity } from "../actions/type1";
import LiDropDownSpe from "./LiDropDownSpe";
import { sendDropDownInpIsShowSpe } from "../actions/type1";



class DoctorPanelChangeInfo extends Component {
    state = {
        email : this.props.data.email,
        name: this.props.data.name ,
        city : this.props.data.city ,
        phone : this.props.data.number ,
        drCode : this.props.data.dr_code ,
        spe : this.props.data.Speciallity ,
        address : this.props.data.address ,
    }

    
    componentDidMount(){
        this.props.fetchCities()
        this.props.fetchSpeciallity()
    }


    render (){
        return (
            <>
                <div className="doctorPanel-changed-main-title">
                    <span></span><h3>تنظیمات حساب کاربری</h3><span></span>
                </div>

                <div className="doctorPanel-changeInfo-main-content">
                    
                    {/* <div className="changeInfoBox changeProf">
                        <div className="profileWrapper">
                            <div class="previewSib">
                                <input type="file"  id="profile"  name="profile" className="profile-inp" onChange={this.updateImageDisplay}  accept="image/png, image/jpeg"/>
                                <label for="profile" className="label-prof" >عکس پروفایل</label>
                            </div>


                            <div class="preview">
                                <div>هنوز عکسی بارگذاری نشده</div>
                            </div>
                        </div> 

                    </div> */}



                    <div className="changeInfoBox changeInfoBoxEmail">
                        <div className="changeInfoBox-title">
                            <h4>تغییر آدرس ایمیل</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label>آدرس ایمیل</label>
                                <input type="email" className="email-inp" value={this.state.email}  placeholder="آدرس ایمیل خود را وارد کنید" onChange={(event) => this.setState({email : event.target.value}) }/>
                            </div>
                            <div className="changeInfoBox-content-errors">
                                <p>ایمیل را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxName">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  نام</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label> نام و نام خانوادگی</label>
                                <input type="text" className="name-inp" value={this.state.name} placeholder="نام و نام خانوادگی خود را وارد کنید" onChange={(event) => this.setState({name : event.target.value})}/>
                            </div>
                            <div className="changeInfoBox-content-errors">
                                <p>ایمیل را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxCity">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  استان</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            {/* <div className="changeInfoBox-content-inp">
                                <label>نام استان</label>
                                <input type="text" className="city-inp" value={this.state.city} placeholder="نام و نام خانوادگی خود را وارد کنید" onChange={(event) => this.setState({city : event.target.value})}/>
                            </div> */}
                            <div className="changeInfoBox-content-inp">

                                    {
                                        this.props.selectInpCity.value === null 
                                        ? 
                                            (

                                                <input  className="newInp" name="city"  placeholder="انتخاب استان" style={{cursor : 'pointer'}} onClick={(event) => {
                                                console.log(this.props.city)

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
                            <div className="changeInfoBox-content-errors">
                                <p> ا نام ستان خود را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxNumber">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  شماره مطب</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label>شماره مطب</label>
                                <input className="phone-inp" type="number" value={this.state.phone} placeholder="شماره خود را وارد کنید" onChange={(event) => this.setState({phone : event.target.value})}/>
                            </div>
                            <div className="changeInfoBox-content-errors">
                                <p> ا نام ستان خود را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxDrCode">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  کد پزشکی</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label>کد پزشکی</label>
                                <input type="text" className="drCode-inp" value={this.state.drCode} placeholder="کد پزشکی خود را وارد کنید" onChange={(event) => this.setState({drCode : event.target.value})}/>
                            </div>
                            <div className="changeInfoBox-content-errors">
                                <p> ا نام ستان خود را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxSpe">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  تخصص</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            {/* <div className="changeInfoBox-content-inp">
                                <label>تخصص</label>
                                <input type="text" className="spe-inp" value={this.state.spe}  placeholder="نام تخصص خود را وارد کنید" onChange={(event) => this.setState({spe : event.target.value})}/>
                            </div> */}
                            <div className="changeInfoBox-content-inp">

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
                            <div className="changeInfoBox-content-errors">
                                <p> ا نام ستان خود را وارد کنید</p>
                            </div>
                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxAddres">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  آدرس</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label>آدرس</label>
                                <input type="text"  value={this.state.address} className="change-addrsInp" placeholder="آدرس خود را وارد کنید" onChange={(event) => this.setState({address : event.target.value})}/>
                            </div>

                        </div>
                    </div>

                    <div className="changeInfoBox changeInfoBoxPassword">
                        <div className="changeInfoBox-title">
                            <h4>تغییر  رمز عبور</h4>
                        </div>

                        <div className="changeInfoBox-content">
                            <div className="changeInfoBox-content-inp">
                                <label>رمز عبور فعلی</label>
                                <input type="text" className="currectPass-inp" placeholder="رمز عبور فعلی خود را وارد کنید"/>
                            </div>
                            <div className="changeInfoBox-content-inp">
                                <label>رمز عبور جدید</label>
                                <input type="text" className="newPass-inp" placeholder="رمز عبور جدید خود را وارد کنید"/>
                            </div>
                            <div className="changeInfoBox-content-inp">
                                <label>تکرار رمز عبور جدید </label>
                                <input type="text"  className="newPasVerify-inp" placeholder="تکرار رمز عبور جدید خود را وارد کنید"/>
                            </div>

                        </div>
                    </div>

                    <div className="changeInfoButton">
                        <button onClick={() => {
                            let search = new URLSearchParams(window.location.search)
                            let id = search.get('drid')
                            console.log(this.props.data.dr_id)

                            let email = document.querySelector('.email-inp').value
                            let name = document.querySelector('.name-inp').value
                            let city = parseInt(this.props.dropDownCityId) 
                            
                            let phone = document.querySelector('.phone-inp').value
                            let drCode = document.querySelector('.drCode-inp').value
                            let spe = parseInt(this.props.dropDownSpeId)
                            let currectPass = document.querySelector('.currectPass-inp').value
                            let newPass = document.querySelector('.newPass-inp').value
                            let newPasVerify = document.querySelector('.newPasVerify-inp').value
                            let address = document.querySelector('.change-addrsInp').value

                            const formData = new FormData();
                            formData.append('email' , email)
                            formData.append('name' , name)
                            formData.append('number' , phone)
                            formData.append('city_id' , city)
                            formData.append('Speciallity_id' , spe)
                            formData.append('dr_code' , drCode)
                            formData.append('old_pass' , currectPass)
                            formData.append('new_pass' , newPass)
                            formData.append('new_pass_verify' , newPasVerify)
                            formData.append('address' , address)
                            

                            
                            axios.put('http://192.168.0.226:2020/api/dr/update' , {
                                name : name,
                                email : email,
                                number : phone,
                                city_id : city,
                                Speciallity_id : spe,
                                dr_code : drCode,
                                old_pass : currectPass,
                                new_pass : newPass ,
                                new_pass_verify : newPasVerify,
                                address : address ,
                                id : this.props.data.dr_id
                                
                            }).then(res => {
                                console.log(res)
                                window.location.reload()
                            }).catch(err => {
                                console.log(err)
                            })
                        }}>ذخیره کردن اطلاعات</button>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        selectInpCity : state.form.selectInpCity,
        dropDownInpIsShowCity : state.form.dropDownInpIsShowCity, 
        dropDownInpIsShowSpe : state.form.dropDownInpIsShowSpe , 
        selectInpSpe : state.form.selectInpSpe ,
        city : state.quickSelect.citys,
        spe : state.quickSelect.spe ,
        dropDownCityId : state.form.dropDownCityId ,
        dropDownSpeId : state.form.dropDownSpeId ,
    }
}


export default connect(mapStateToProps , {
    sendDropDownInpIsShowCity ,
    fetchCities , 
    fetchSpeciallity ,
    sendDropDownInpIsShowSpe
})(DoctorPanelChangeInfo) ;