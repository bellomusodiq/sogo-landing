import React from 'react';
import './Header.css';
import PlayStore from '../../assets/images/google-play.png';
import AppStore from '../../assets/images/app-store.png';
import CountDown from './CountDown';
import CardBoard from '../../assets/images/cardboard.png';
import Logo from '../../assets/images/logo.png';


const Header = () => (
    <div className="Header">
        <div className="HeaderLeft">
            <h1>Explore The World Of Entertainment With SOGO TV</h1>
            <p>There is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality</p>
            <div className="Stores">
                <img src={PlayStore} alt="play store" />
                <img src={AppStore} alt="app store" />
            </div>
            <CountDown />
        </div>
        {/*  */}
        <div className="HeaderRight">
            <div className="HeaderRightBackg">
                <button className="DownloadNowButton">Download Now</button>
                <div className="LogoDownload">
                    <img src={Logo} alt="logo"/>
                    <button className="MobileDownloadNowButton">Download Now</button>
                </div>
                <h1>Explore The World Of Entertainment With SOGO TV</h1>
                <p>There is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality</p>
                <img src={CardBoard} alt="google cardboard" />
            </div>
        </div>
    </div>
)


export default Header;
