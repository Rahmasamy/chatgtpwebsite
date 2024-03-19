import React from 'react';
import './Brands.css';
import {
    google,slack,atlassian,dropbox,shopify
} from '../Brands/import';
const Brands = () => {
    return (
        <div className='gbt3__brand section__padding'>
           <div >
            <img src={google} alt='google'/>
            </div> 
            <div >
            <img src={slack} alt='slack'/>
            </div>
            <div >
            <img src={atlassian} alt='atlassian'/>
            </div>
            <div >
            <img src={dropbox} alt='dropbox'/>
            </div>
            <div >
            <img src={shopify} alt='shopify'/>
            </div>
        </div>
    );
}

export default Brands;
