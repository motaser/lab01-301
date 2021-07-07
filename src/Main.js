import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import beastData from './data.json'
    import { Row } from 'react-bootstrap'

class Main extends Component {
    render() {
        return (
            <Row>
                {beastData.map((beast, index)=>{

                  return <HornedBeasts
                  clicks={0}
                  title={beast.title}
                  image_url={beast.image_url}
                  description={beast.description}
                  modal={this.props.selectedmodal}
                  key={index}

                  />
                  

                }
                
                
                )}
                
            </Row>
        )
    }
}

export default Main
