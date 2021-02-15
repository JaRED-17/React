import React from "react";
import Button from "../Button";
import { observer } from "mobx-react"
import PopupStore from "../../store"

class Popup extends React.Component {

    get content() {
        const { children } = this.props;

        return (
            <div className='Popup'>
                <div className='popupHeader'>
                    <Button className="primary" name="Close" handleClick={PopupStore.closePopup} />
                </div>
                <div className='popupContent'>{children}</div>
            </div>
        );
    }
    
    render() {
        const { isPopupOpen } = PopupStore;       

        return isPopupOpen ? this.content : null;
    }
}

export default observer(Popup);