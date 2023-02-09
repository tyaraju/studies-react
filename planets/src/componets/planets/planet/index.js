import React from 'react';
import GrayImg from '../../../shared/gray_image';
import DescritionWithLink from '../../../shared/descrition_with_link';

async function getSatellites(id) {
  let response = await fetch(`./api/${id}.json`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  let data = await response.json()
  return data;
}
class Planet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      satellites: []
    }
  }
  componentDidMount() {
    getSatellites(this.props.id).then(data => {
      this.setState(state => ({
        satellites: data['satellites']
      }))
    })
  }
  render() {
    let title;
    if(this.props.title_with_underline){
      title = <h4><u>{this.props.name}</u></h4>
    } else {
      title = <h4>{this.props.name}</h4>
    }

    return (
      <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
        {title}
        <DescritionWithLink description={this.props.description} link={this.props.link} cta={this.props.cta}/>
        <GrayImg alt={this.props.name} img_url={this.props.img_url} gray={this. props.gray}/>
        <h4>Satélites</h4>
        <ul>
        {this.state.satellites.map((satellite, index) => 
        <li key={index}>Satélite {satellite.name}</li>
        )}
        </ul>
        
      </div>
    )
  }
  
}

export default Planet;