import React from 'react';

class Box extends React.Component {

  render() {


    return(
      <div className="container">

        <ul id="sortable">
        {
          Object.keys(this.props.boxes).map((key) => {
            console.log(this.props.item);
            const item = this.props.boxes[key];
            return(


                    <li

                       draggable="true"
                      className="box" draggable="true" key={key} onClick={() => this.props.deleteBox(key)}>
                    &rarr;  {item}</li>


              )
            }, this
        )
        }
        </ul>
      </div>
    )
  }
}
export default Box;
