import React from "react";
import Button from "../Button";
import { observer } from "mobx-react"
import PopupStore from "../../store"
import { withRouter } from "react-router-dom";

class Popup extends React.Component {

    onClose = () => {
        PopupStore.closePopup()
        this.props.history.push('/')
    }

    get content () {
        const { children } = this.props;

        return (
            <div className='Popup'>
                <div className='header'>
                    <Button className="close" name="Close" handleClick={this.onClose} />
                </div>
                <div className='content'>{children}</div>
            </div>
        );
    }
    
    render () {
        const { isPopupOpen } = PopupStore;

        return isPopupOpen ? this.content : null;
    }
}

export default observer(withRouter(Popup));