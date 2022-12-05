import React, { Component } from "react";
import simpleimg from '../Adds/imgs/1.png'

class QuickIcons extends Component {
    render(){
        return(
            <section>
                <div className="quickBoxIconWrapper">
                    <div className="quickCard quickCard1">
                        <div>
                            <img src={simpleimg}/>
                        </div>
                        
                        <p>تخصص مورد نظرتو انتخاب کن تا  بهترین دکترای اون بخش  برات نمایش داده بشه</p>
                    </div>

                    <div className="quickCard quickCard2">
                        <div>
                            <img src={simpleimg}/>
                        </div>
                        <p>کافیه با زدن این دکمه لیست برترین پزشکای کل کشور رو ببینی</p>
                    </div>

                    <div className="quickCard quickCard3">
                        <div>
                            <img src={simpleimg}/>
                        </div>
                        <p>میتونی به صورت رایگان لیست پزشکان برتر هر استان رو مشاهده کنی</p>

                    </div>
                </div>
            </section>
        )
    }
}



export default QuickIcons;