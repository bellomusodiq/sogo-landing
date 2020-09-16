import React from 'react';
import './UserComments.css';
import Image1 from '../../assets/images/user1.png';
import Image2 from '../../assets/images/user2.png';
import Image3 from '../../assets/images/user3.png';


const UserComments = () => {

    return (
        <div className="UserComments">
            <h1>What Our Users say</h1>
            <p>here is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality</p>
            <div className="Comments">
                <div className="Comment">
                    <p>
                    here is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality
                    </p>
                    <img src={Image1} alt="user 1"/>
                </div>
                <div className="Comment">
                    <p>
                    here is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality
                    </p>
                    <img src={Image2} alt="user 2"/>
                </div>
                <div className="Comment">
                    <p>
                    here is alot happening aroung you!, enjoy it all from the comfort of your smart mobile phones in virtual reality
                    </p>
                    <img src={Image3} alt="user 3"/>
                </div>
            </div>
        </div>
    )
}

export default UserComments;