import React, { Component } from 'react';
import wall from '../Adds/imgs/wall2.jpg'
import Header from './Header';
import Footer from './Footer';



class ContactUs extends Component {
    render() {
        return (
            <>
                <div className='aboutUs'>
                    <div className='aboutUs-header' style={{ background : `${wall}  center` }}>
                        <Header  backGr="transparent"/>
                        <div className='aboutUs-header-title'>
                            <h3>ارتباط با ما</h3>
                        </div>
                    </div>
                    <div className='aboutUs-main contactUS'>
                        <div className='aboutUs-main-content contactUS-content'>
                            <div className=' contactUS-content-header'>
                                اطلاعات تماس
                            </div>
                            <ul>
                                <li>شماره تماس : 02153434</li>
                                <li>ایمیل : </li>
                                <li>آدرس : تهران - ونک - گاندی شمالی</li>
                            </ul>
                        </div>
                    </div>

                    <Footer />
                
                </div>
            </>
        );
    }
}

export default ContactUs;