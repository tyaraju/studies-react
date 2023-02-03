import React from 'react';
import GrayImg from '../../../shared/gray_image';
import DescritionWithLink from '../../../shared/descrition_with_link';

const Planet = (props) => {
  let title;
  if(props.title_with_underline){
    title = <h4><u>{props.name}</u></h4>
  } else {
    title = <h4>{props.name}</h4>
  }
  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      {title}
      <DescritionWithLink description={props.description} link={props.link} cta={props.cta}/>
      <GrayImg alt={props.name} img_url={props.img_url} gray={props.gray}/>

      
    </div>
  )
}

export default Planet;