import { makeObservable, observable, action } from "mobx";

class Store {
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

export default new Store();