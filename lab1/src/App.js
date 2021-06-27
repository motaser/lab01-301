import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import beastData from './data.json'

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hornsData:beastData,
        show:false,
        modaldata:{},
    }
}
handleshow = (data) => {
    this.setState({
        show:true,
        modaldata:data,
    })
}
handleclose = ()=>{
    this.setState({
        show:false,
    })
}


  render() {
    return (
      <div>
        <Header />
        < Main  selectedmodal={this.handleshow } data={this.state.hornsData}/>
        <SelectedBeast  handleExit={this.handleclose} showdata={this.state.show } modaldata={this.state.modaldata}/>
        <Footer />
      </div>
    )
  }
}

export default App

