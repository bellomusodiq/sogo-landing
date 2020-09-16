import React from 'react';
import './Footer.css';


const Footer = () => {

    return (
        <div className="Footer">
            <div className="FooterTop">
                <div className="FooterLeft">
                    <div className="FooterList">
                        <p className="FooterHeading">COMPANY</p>
                        <p className="FooterListItem">About Us</p>
                        <p className="FooterListItem">Features</p>
                        <p className="FooterListItem">FAQ</p>
                    </div>
                    <div className="FooterList">
                        <p className="FooterHeading">SOCIAL</p>
                        <p className="FooterListItem">Twitter</p>
                        <p className="FooterListItem">Facebook</p>
                        <p className="FooterListItem">Instagram</p>
                        <p className="FooterListItem">LinkedIn</p>
                    </div>
                    <div className="FooterList">
                        <p className="FooterHeading">LEGAL</p>
                        <p className="FooterListItem">Private Policy</p>
                        <p className="FooterListItem">Terms of Service</p>
                    </div>
                </div>
                <div className="FooterRight">
                    <p className="FooterRightHeading">SUBSCRIBE TO OUR NEWSLETTER</p>
                    <form className="SubscribeForm">
                        <input type="text"/>
                        <button type="submit">Subscibe</button>
                    </form>
                    <p className="FooterRightHeading">KEEP IN TOUCH</p>
                    <div className="Location">
                        <span><i className="fas fa-map-marker-alt"></i></span>
                        <p>24 allay way Ontario, Canada</p>
                    </div>
                    <div className="ContactDetails">
                        <div className="ContactDetail">
                            <span><i className="far fa-envelope"></i></span>
                            <p>info@shogotv.com</p>
                        </div>
                        <div className="ContactDetail">
                            <span><i className="fas fa-phone"></i></span>
                            <p>+232 810 0000</p>
                        </div>
                        <div className="ContactDetail">
                            <span><i className="far fa-envelope"></i></span>
                            <p>support@shogotv.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="Copyright">SHOGOTV &copy; 2020</p>
        </div>
    )
}

export default Footer;
