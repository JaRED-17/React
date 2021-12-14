import React from "react";
import Button from "../../components/Button";
import { withRouter } from "react-router-dom";

class NotFoundPage extends React.Component {

    back = () => this.props.history.push('/');

    render () {
        return (
            <div className='NotFoundPage'>
                <h3>Page not found</h3>
                <div className="Buttons">
                    <Button className="primary" name="back" onClick={this.back} />
                </div>
            </div>
        )
    }
}

export default withRouter(NotFoundPage);