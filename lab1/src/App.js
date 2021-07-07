import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import beastData from './data.json'
import Filter from './Filter'
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hornsData:beastData,
        show:false,
        modaldata:{},
        filterData:beastData,
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
afterUp=(item)=>{
  this.setState({
    filterData:item,
  })
  
}


  render() {
    return (
      <div>
        <Header />
        <Filter afterUp={this.afterUp} selectItem={this.state.hornsData}/>
        < Main  selectedmodal={this.handleshow } data={this.state.filterData}/>
        <SelectedBeast  handleExit={this.handleclose} showdata={this.state.show } modaldata={this.state.modaldata}/>
        <Footer />
      </div>
    )
  }
}

export default App

