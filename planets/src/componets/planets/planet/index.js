import React from 'react';
import GrayImg from '../../../shared/gray_image';
import DescritionWithLink from '../../../shared/descrition_with_link';

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <DescritionWithLink description={props.description} link={props.link} cta={props.cta}/>
      <GrayImg alt={props.name} img_url={props.img_url}/>

      
    </div>
  )
}

export default Planet;