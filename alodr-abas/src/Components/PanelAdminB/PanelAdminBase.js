import React ,{Component} from "react";
import DoctorPanelChanged from "../DoctorPanelChanged";
import DoctorPanelOption from "../DoctorPanelOption";

class PanelAdminBase extends Component {
    
    render() { 
        return (
            <>
                <DoctorPanelOption />

                <DoctorPanelChanged  />
            </>
        );
    }
}
 
export default PanelAdminBase
