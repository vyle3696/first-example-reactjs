import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="page-footer">
                <p className="copyright">Copyright © 2017 All Rights Reserved.</p>
                <p id="mail">yourmail@mail.com</p>
                <p id="phone">+00 000 000 000</p>
            </div>
        );
    }
}

export default Footer;