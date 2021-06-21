import React, { Component } from 'react'

 class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imageUrl} alt={this.props.imageUrl}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts
