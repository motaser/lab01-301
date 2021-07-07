import React, { Component } from 'react'
import { Form} from 'react-bootstrap'

 class Filter extends Component {
    updateHorns=(e)=>{
        let num =e.target.value;
        console.log(this.props.selectItem);
        let array= {};
        if(num != 'All'){
            array=this.props.selectItem.filter(item=>{
                if(item.horns == num)
                return item
            })

        }
        else
        array=this.state.selectItem;
        console.log(array);
        this.props.afterUp(array)


    }
    render() {
        return (
            <>
            <Form style={{textAlign:"center", marginTop:'10vh'}}>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label >Select the number of horns</Form.Label>                      
                        <Form.Control style={{marginLeft:'5vh'}} as="select" custom name='hornsNum' onChange={this.updateHorns}>
                            <option value='All'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                
            </>
        )
    }
}

export default Filter
