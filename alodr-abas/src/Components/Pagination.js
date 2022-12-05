import React ,{Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectedpage } from "../actions/type1";

class Pagination extends Component {


    render() { 
        
        return (
            <li className={this.props.data == this.props.meta.current_page && 'activePageNumber'} onClick={() => {

                this.props.selectedpage(this.props.data)
            }}> 
                {this.props.data}
            </li>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        formState : state.form.formState
    }
}
 
export default connect(mapStateToProps , {
    selectedpage
})(Pagination) ;