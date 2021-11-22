import React from "react";
import Button from "../Button";
import { observer } from "mobx-react"
import PopupStore from "../../store"

class Popup extends React.Component {

    get content () {
        const { children } = this.props;

        return (
            <div className='Popup'>
                <div className='header'>
                    <Button className="close" name="Close" handleClick={PopupStore.closePopup} />
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

export default observer(Popup);