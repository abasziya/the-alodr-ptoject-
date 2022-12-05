import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class AboutUs extends Component {
    render() {
        return (
            <>
            <div className='aboutUs'>
                <div className='aboutUs-header'>
                    <Header  backGr="transparent"/>
                    <div className='aboutUs-header-title'>
                        <h3>درباره ما</h3>
                    </div>
                </div>
                <div className='aboutUs-main'>
                    <div className='aboutUs-main-content'>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
                <div className='aboutUs-programmersInfo'>
                    <div className='aboutUs-programmersInfo-banner'>
                        <div className='aboutUs-programmersInfo-banner-left'>
                            
                        </div>
                        <div className='aboutUs-programmersInfo-banner-right'>
                            <h4>درباره برنامه نویسان</h4>
                        </div>
                    </div>


                    <div className='aboutUs-programmersInfo-content'>
                        <div className='front-enddev'>

                            <ul>
                                <li>علی حیاتی</li>
                                <li>09376082721</li>
                                <li>alihayati511@gmail.com</li>
                            </ul>

                            <div className='programmer-bio'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </div>

                            <div className='programmer-spe'>
                                FRONT-END
                            </div>
                        </div>


                        <div className='back-enddev'>
                            <ul>
                                <li>سهیل امینی</li>
                                <li>09376082721</li>
                                <li>alihayati511@gmail.com</li>
                            </ul>

                            <div className='programmer-bio'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </div>

                            <div className='programmer-spe'>
                                BACK-END
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                
            </div>

            
            </>
        );
    }
}

export default AboutUs;


