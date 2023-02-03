
import React, {Fragment} from 'react';

const DescritionWithLink = (props) => {
  if(props.link){
    return (
      <Fragment>
        <p>{props.description}</p>
        <p><a href={props.link}>{props.cta}</a></p>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p><u>{props.description}</u></p>
      </Fragment>
    )
  }
}

export default DescritionWithLink;