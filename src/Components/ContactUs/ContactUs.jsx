import React from 'react';
import './ContactUs.css';
import Vr from '../../assets/images/contact_us_vr.png';
import { useState } from 'react';


const ContactUs = () => {

    const [service, changeService] = useState('customer');
    const [formValue, changeFormValue] = useState({
        email: '',
        message: ''
    })
    const [loadingForm, changeLoadingForm] = useState(false);
    const [formError, changeFormError] = useState(false);

    return (
        <div className="ContactUs">
            <form className="ContactUsLeft">
                <h1>Contact Us</h1>
                <p>
                    There is alot happening aroung you!, enjoy it all from the comfort of your
                    smart mobile phones in virtual reality
                </p>
                <div className="Radio">
                    <input onClick={() => changeService('customer')} type="radio" checked={service === 'customer'} name="Service" value="customer" />
                    <span onClick={() => changeService('customer')}>Customer service</span>
                </div>
                <div className="Radio">
                    <input onClick={() => changeService('support')} type="radio" checked={service === 'support'}
                        name="Service" value="support" />
                    <span onClick={() => changeService('support')}>Support service</span>
                </div>
                <p className="ContactUsLabel" >Email</p>
                <input onChange={e => changeFormValue({ ...formValue, email: e.target.value })}
                    type="email" className="EmailInput" required />
                <p className="ContactUsLabel">Message</p>
                <textarea onChange={e => changeFormValue({ ...formValue, message: e.target.value })}
                    required cols="30" rows="10" className="Message"></textarea>
                <button className="ContactUsBtn" type="submit" >Send</button>
            </form>
            <div className="ContactUsRight">
                <img src={Vr} alt="contact us vr" />
            </div>
        </div>
    )
}

export default ContactUs;