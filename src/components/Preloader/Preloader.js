import React from "react";

class Preloader extends React.Component {

    state = {isLoading: true};      

    componentDidMount () {
        setTimeout(() => {            
            this.setState({isLoading: false});
        }, 1500);
    }

    get content () {
        return <div className="Preloader"></div>
    }

    render () {
        const { isLoading } = this.state;

        return isLoading ? this.content : null;
    }
}

export default Preloader;