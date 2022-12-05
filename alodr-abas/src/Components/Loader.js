import React, {Component} from "react";
import heart from '../Adds/imgs/1.png'

class Loader extends Component {

    render() { 
        return (
            <div className="loader-wrraper">
                <div className="loader">
                    <img src={heart} />
                </div>
            </div>
        );
    }
}
 
export default Loader;