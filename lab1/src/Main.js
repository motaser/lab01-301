import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import beastData from './data.json'

class Main extends Component {
    render() {
        return (
            <div>
                {beastData.map((beast, index)=>{

                  return <HornedBeasts
                  clicks={0}
                  title={beast.title}
                  imageUrl={beast.image_url}
                  description={beast.description}
                  key={index}

                  />
                  

                }
                
                
                )}
                
            </div>
        )
    }
}

export default Main
