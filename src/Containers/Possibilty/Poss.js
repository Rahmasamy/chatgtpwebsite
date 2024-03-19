import React from 'react';
import posssibiltyImage from '../../assets/possibility.png';
import './Poss.css';
const Poss = () => {
    return (
        <div className='gbt3__possibilty section__padding' id="possibility">
          <div className='gpt3__possibilty-image'>
            <img src={posssibiltyImage} alt="possibilty"/>
          </div>
           <div className='gbt3__possibilty-content'>
             <h4> Request Early Access to Get Started</h4>
             <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
             <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                 Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
             <h4>Request Early Access to Get Started</h4>
           </div> 
        </div>
    );
}

export default Poss;
