import React, { Component } from "react";
import { Link } from "react-router-dom";



class ErrPanel extends Component {

    render(){
        return(
            <div className="errPanel">
                <h3>404</h3>
                <h3>صفحه مورد نظر یافت نشد </h3>

                <Link to="/">بازگشت به صفحه اصلی</Link>
            </div>
        )
    }
}



export default ErrPanel;