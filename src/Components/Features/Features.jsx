import React from 'react';
import './Features.css';
import PhonesImg from '../../assets/images/phones.png';
import SmartphoneCompactible from '../../assets/images/smartphone_compatible.png';
import SeamlessStreaming from '../../assets/images/seamless_streaming.png';
import HighResolution from '../../assets/images/high_resolution.png';
import AllVr from '../../assets/images/all_vr.png';
import VrWoman from '../../assets/images/vr_woman.png';


const Features = () => {

    return (
        <div className="Features">
            <div className="FeaturesTop">
                <div className="FeatureTopLeft">
                    <img src={PhonesImg} alt="phone img" />
                </div>
                <div className="FeatureTopRight">
                    <button className="FeatureButton">FEATURES</button>
                    <h1>Enjoy it all from the comfort of your smart mobile phones in virtual reality</h1>
                    <div className="FeatureBullet">
                        <img src={SmartphoneCompactible} alt="smart phone " />
                        <div>
                            <h5>Smartphone Compactible</h5>
                            <p>There is alot happening around you! enjoy it all from the confort of your
                            smart mobile phones in virtual reality
                            </p>
                        </div>
                    </div>
                    <div className="FeatureBullet">
                        <img src={SeamlessStreaming} alt="seamless streaming " />
                        <div>
                            <h5>Seamless Streaming</h5>
                            <p>There is alot happening around you! enjoy it all from the confort of your
                            smart mobile phones in virtual reality
                            </p>
                        </div>
                    </div>
                    <div className="FeatureBullet">
                        <img src={HighResolution} alt="high resolution" />
                        <div>
                            <h5>High Resolution</h5>
                            <p>There is alot happening around you! enjoy it all from the confort of your
                            smart mobile phones in virtual reality
                            </p>
                        </div>
                    </div>
                    <div className="FeatureBullet">
                        <img src={AllVr} alt="all vr" />
                        <div>
                            <h5>All VR Headset</h5>
                            <p>There is alot happening around you! enjoy it all from the confort of your
                            smart mobile phones in virtual reality
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FeaturesBottom">
                <div className="FeatureBottomLeft">
                    <h1>Enjoy virtual reality events anywhere, anytime with SogoTv</h1>
                    <p>
                        There is alot happening aroung you!, enjoy it all from the comfort of 
                        your smart mobile phones in virtual reality. There is alot happening 
                        aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality
                    </p>
                </div>
                <div className="FeatureBottomRight">
                    <div className="VrBackground">
                        <img src={VrWoman} alt="rr woman"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Features;