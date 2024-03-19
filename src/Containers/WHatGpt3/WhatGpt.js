import React from 'react';
import './WhatGpt.css';
import { Features } from '../../components';
const WhatGpt = () => {
    return (
        <div className='gbt3__whatgpt3 section__padding' id="wgpt3">
            <div className='gbt3__whatgpt3-features '>
               <div className='gbt3__features-container__feature firstFeature'>
                <div className="gpt3__features-container__feature-title">
                <div />
               <h1>What is GPT-3</h1>
               </div>
               <div className="gpt3__features-container_feature-text first">
               <p>What is GPT-3
               We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. 
               At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>  
        </div>
            </div>
            <div className='gbt3__whatgpt3-heading'>
                <h1 className="gradient__text">
                The possibilities are beyond your imagination
                </h1>
                <p> Explore the library</p>
            </div>
            <div className='gbt3__whatgpt3-container'>
                <Features  title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Features  title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            </div>
        </div>
    );
}

export default WhatGpt;
