import React, { Component } from "react";
import PageNumber from "./PageNumber";
import ResultFilter from "./ResultFilter";
import ResultMain from "./ResultMain";



class ResultContent extends Component {
    render(){
        return(
            <div className="result">


                <ResultMain />
                <PageNumber />
                {/* <ResultFilter /> */}
            </div>
        )
    }
}



export default ResultContent;