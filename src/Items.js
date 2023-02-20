import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
 
class Items extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div>
        <div>{listItems.length > 0 ? 'History' : ''}</div>
        <ul className="theList">
            {listItems}
        </ul>
      </div>
      
    );
  }
};
 
export default Items;