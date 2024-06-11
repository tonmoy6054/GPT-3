import React from 'react';
import './Brand.css';
import google from '../../assets/atlassian.png'
import slack from '../../assets/dropbox.png'

import atlassian from '../../assets/google.png'
import dropbox from '../../assets/shopify.png'
import shopify from '../../assets/slack.png'

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'> 
           <div>
            <img src={google} alt="google" />
           </div>
           <div>
            <img src={slack} alt="slack" />
           </div>
           <div>
            <img src={atlassian} alt="atlassian" />
           </div>
           <div>
            <img src={dropbox} alt="dropbox" />
           </div>
           <div>
            <img src={shopify} alt="shopify" />
           </div>
        </div>
    );
};

export default Brand;