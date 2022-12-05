import axios from "axios";
import React ,{Component} from "react";
import { Navigate } from "react-router-dom";

class PanelAdmin extends Component {
    
    state = {
        loginState : false
    }

    render() { 
        let redirect = null;
        if(localStorage.getItem('admin')){
            redirect = <Navigate to='/panelAdminBase' />
        }
        return (
            <div className="paneladmin">
                {redirect}
                <div className="paneladmin-login">
                    <input type='text' className="paneladmin-username" placeholder="username"/>
                    <input type='text' className="paneladmin-password" placeholder="password" />

                    <button type="submit" onClick={() => {
                        let username = document.querySelector('.paneladmin-username').value                        
                        let password = document.querySelector('.paneladmin-password').value
                        
                        const formdata = new FormData();
                        formdata.append('email' , username)
                        formdata.append('password' , password)

                        axios.post('http://192.168.0.226:2020/api/admin/login' , formdata).then(res => {
                            console.log(res)
                            localStorage.setItem('admin' , res.data)
                            this.setState({
                                loginState : true
                            })
                        }).catch(err => {
                            console.log(err)
                        })
                    }} >ورود</button>
                </div>
            </div>

        );
    }
}
 



export default PanelAdmin;