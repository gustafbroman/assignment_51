import React from 'react';
import Overlay from '../../../../overlay/Overlay'
import AddTrackerPopUp from './pop_up/AddTrackerPopUp'
import './AddTracker.scss'

class AddTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_overlay: false
        }
    }
    deactivateOverlay = () => {
        this.setState({ is_overlay:false })
    }
    activateOverlay = () => {
        this.setState({ is_overlay:true })
    }
    render(){
        return (
            <React.Fragment>    
                <div to="/tracker/add-tracker" className="add-tracker-button" onClick={this.activateOverlay}>
                    <i className="add-tracker-icon">+</i>
                </div>
                <Overlay active={this.state.is_overlay} toggle={this.deactivateOverlay} />
                {this.state.is_overlay && <AddTrackerPopUp toggle={this.deactivateOverlay}/>}
            </React.Fragment>
        )
    }
}

export default AddTracker;