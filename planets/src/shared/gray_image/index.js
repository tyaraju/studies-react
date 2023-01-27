import React from 'react';
import './style.css';

const GrayImg = (props) => {
  return (
    <img class="gray-img" alt={props.alt} src={props.img_url}></img>
  )
}

export default GrayImg;