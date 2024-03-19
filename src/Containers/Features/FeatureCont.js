import React from 'react';
import './FeatureCont.css';
import { Features } from '../../components';
const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ];
const FeatureCont = () => {
    return (
        <div className='gbt3__features section__padding' id="features">
            <div className='gbt3__features-heaading'>
                <h1 className='gradient__text'>
                The Future is Now <br/>and You Just Need to<br/> Realize It. Step into <br/> Future Today. & <br/> Make it<br/> Happen.
                </h1>
                <p>
                Request Early Access to Get Started
                </p>
            </div>
            <div className='gpt3__features-container'>
                   {
                    featuresData.map((item,index) => (
                        <Features title={item.title} text={item.text} key={item.title + index}/>
                    ))
                   }
            </div>
            
        </div>
    );
}

export default FeatureCont;
