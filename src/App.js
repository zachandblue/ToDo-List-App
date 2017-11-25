import React, { Component } from 'react';
import Box from './Box';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.createBox = this.createBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
    this.handleChange = this.handleChange.bind(this);


    this.state = {
      item: "",
      boxes: {}
    }
  }

  createBox(event) {
    event.preventDefault();
    const boxes = {...this.state.boxes};
    const timestamp = Date.now();
    console.log(this.state.item);
    boxes[timestamp] = this.state.item;
    this.setState({ boxes })
    console.log('this');
    this.setState({item: ""});
  }

  deleteBox(key) {
    console.log('tests')
    const boxes = {...this.state.boxes};
    delete boxes[key];
    this.setState({ boxes });

  }

  handleChange(event) {
    this.setState({item: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <div className="content">
          <div>
              <form className="form-box">
                <input className="text-box" type="text" placeholder="Add Item" value={this.state.item} onChange={this.handleChange} />
                <button className="button" onClick={this.createBox} >+</button>
              </form>
          </div>
          <hr className="hr"/>
          <div>
              <Box boxes={this.state.boxes}
              deleteBox={this.deleteBox}
            item={this.state.item}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
