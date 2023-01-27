
import React, {Fragment} from 'react';

const DescritionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <p><a href={props.link}>{props.cta}</a></p>
    </Fragment>
  )
}

export default DescritionWithLink;