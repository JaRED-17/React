import React, { Children } from "react";
import Button from "../Button/Button";
import { observer } from "mobx-react"
import PopupStore from "../../store/PopupStore"

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