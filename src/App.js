import React, { Component } from 'react';
import base from './base';
import Box from './Box';
import './App.css';

var placeholder = document.createElement("li");
placeholder.className = "placeholder";


class App extends Component {
  constructor() {
    super()

    this.createBox = this.createBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addDefaults = this.addDefaults.bind(this);


    this.state = {
      item: "",
      boxes: [ ],
      key: 0

    }
  }




  createBox(event) {
    event.preventDefault();
    const boxes = {...this.state.boxes};
    let key = this.state.key + 1;
    const timestamp = Date.now();
    boxes[timestamp] = this.state.item;
    this.setState({ boxes });


    console.log(boxes);
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

  componentWillMount(){
  }

  addDefaults() {
    const boxes = ['Groceries', 'Dog Groomer', 'Gym', 'Call Grandma', 'Dinner Reservations', 'Oil Change', 'Save the World', 'Netflix Binge'];

    this.setState({ boxes })
  }

  componentDidMount = () => {
  window.addEventListener('load', this.addDefaults);
  {/*this.ref = base.syncState(
      'boxes',
      {
        context: this,
        state: 'boxes',
      }
    )*/}
  }

  componentWIllUnMount() {
    base.removeBinding(this.ref);
  }

  render() {

    return (
      <div className="App">
        <h1>My Todo List</h1>
        <div className="content">
          <div>
              <form className="form-box">
                <input className="text-box" type="text" placeholder="Add Item" value={this.state.item} onChange={this.handleChange}/>
                <button className="button" onClick={this.createBox} >+</button>
              </form>
              <hr className="hr"/>
          </div>

          <div>
              <Box boxes={this.state.boxes}
              deleteBox={this.deleteBox}

            item={this.state.item}
          items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
