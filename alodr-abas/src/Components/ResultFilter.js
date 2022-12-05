import React, { Component } from "react";


class ResultFilter extends Component {
    render(){
        return(
            <div className="result-filter">
                <div className="filter-header">
                    <h4>فیلتر ها</h4>
                </div>

                <div className="filter-ul">
                    <ul>
                        <li>

                            <span>
                                <input type="checkbox"  id='bime'/>
                            </span>
                            <label for="bime">شامل بیمه</label>

                        </li>
                        <li>
                            <span>
                                <input type="checkbox"  id='moshavere'/>
                            </span>
                            <label for="moshavere">شامل مشاوره</label>
                        </li>
                        <li>
                            <span className="span-rate-range">
                                
                                <input type="range" min="1"  max="200"    id="rotbe"/>
                            </span>
                            <label for="rotbe" >محدوده رتبه مورد نظر شما</label>

                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}



export default ResultFilter;