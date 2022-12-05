import React , {Component} from "react";
import { connect } from "react-redux";
import Pagination from "./Pagination";




class PageNumber extends Component {

    componentDidMount = () => {
        
    }
    render() {

        return (
            <>
                <div className="pageNumbers">
                    <ul>
                        {
                            this.props.metaPage &&
                            this.props.metaPage.map(item => {
                                return (<Pagination data={item} meta={this.props.meta} />)
                            })
                        }
                        {/* <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>4</li>
                        <li>4</li>
                        <li>4</li>
                        <li>4</li> */}
                    </ul>
                </div>
            </>
        );
    }
}
 

const mapStateToProps = (state) => {
    return {
        metaPage : state.resultSearch.metaPage ,
        meta : state.resultSearch.meta
    }
}

export default connect(mapStateToProps , {

})(PageNumber) ;