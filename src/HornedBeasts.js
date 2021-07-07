import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Image } from 'react-bootstrap'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberVotes: 0,
        }
    }


    addVote0 = () => {
        this.setState({
            numberVotes: this.state.numberVotes + 1,
        })
    }

    clickme =()=> {
        this.props.modal({
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description
        })
    }
    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "85%", height: "100%" }} bg={'danger'}>
                    <Card.Img width={200}
                        height={280} onClick={this.addVote0} variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    
                        <Button style={{ width: "50%", marginLeft: "10vh" }} variant="info">  {this.state.numberVotes}</Button>
                        <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} variant="danger" onClick={this.clickme}> Click here </Button>
                   

                </Card>
            </Col>

        )
    }
}

export default HornedBeasts;