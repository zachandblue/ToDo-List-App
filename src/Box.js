import React from 'react';

class Box extends React.Component {
  render() {

    return(
      <div className="container">


        {
          Object.keys(this.props.boxes).map((key) => {
            console.log(this.props.item);
            const item = this.props.boxes[key];
            return(
              <div className="box" key={key} onClick={() => this.props.deleteBox(key)}>&rarr;  {item}</div>
            )
            }
        )
        }
      </div>
    )
  }
}
export default Box;
