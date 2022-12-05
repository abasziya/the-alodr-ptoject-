import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { innerSearchBox } from "../actions/type1";
import { onSearchMod } from "../actions/type1";


class SerachBox extends Component {

    render (){
        return(
            <>
                <div className="serachBox">
                    <input type='text' className="serachBox-input" placeholder="نام پزشک مورد نظر خود را وارد کنید" />
                    {/* <Link to='/Result' className="serachBox-button">جستجو</Link> */}
                    <button type="button" className="serachBox-button" onClick={() => {
                        let input = document.querySelector('.serachBox-input').value
                        this.props.innerSearchBox(input)
                        
                    }}><Link to='/Result'>جستجو</Link></button>
                </div>
            </>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        innerInp : state.resultSearch.innerInp
    }
}
{/* <Link to='/Result' className="link-search" >جستجو</Link> */}

export default connect(mapStateToProps , {
    innerSearchBox ,
    onSearchMod
})(SerachBox) ;