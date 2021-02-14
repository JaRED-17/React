import { makeObservable, observable, action } from "mobx";

class PopupStore {
    isPopupOpen = false;

    constructor() {
        makeObservable(this, {
            isPopupOpen: observable,
            openPopup: action.bound,
            closePopup: action.bound
        });
    }
  
    openPopup() {
        this.isPopupOpen = true;
    }

    closePopup() {
        this.isPopupOpen = false;
    }
}

export default PopupStore;