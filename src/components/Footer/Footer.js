import React from "react";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render () {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">We are your salvation!!!</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><Link className='grey-text text-lighten-3' to={"/"}>Home</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={"/news"}>News</Link></li>                              
                                <li><Link className='grey-text text-lighten-3' to={"/reviews"}>Reviews</Link></li>
                                <li><Link className='grey-text text-lighten-3' to={"/articles"}>Articles</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;