import React, { Component } from 'react'

 class HornedBeasts extends Component {
     constructor(props){
         super(props);
         this.state={
             clicks:props.clicks,
         }
        }
         changeClicksNum =()=>{

          this.setState({
              clicks:this.state.clicks+1
          })
         }
     
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img width="400px" height="300px" onClick={this.changeClicksNum} src={this.props.imageUrl} alt={this.props.imageUrl}></img>
                <p>{this.props.description}</p>
                <span>{this.state.clicks}</span>
            </div>
        )
    }
}

export default HornedBeasts
