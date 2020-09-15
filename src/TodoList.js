import React from "react";
import "./style.css";

import TodoItems from './TodoItems';

export default class TodoList extends React.Component {
  constructor(props) {
  super(props);
 
  this.state = {
    items: []
  };
 
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.editItem = this.editItem.bind(this);
}

addItem(e) {
  if (this.inputElement.value !== "") {
    var newItem = {
      text: this.inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
        
      };
    });
   
    this.inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function(item) {
    return item.key !== key;
  });
 
  this.setState({
    items: filteredItems
  });
}

editItem (e, key) {
  const list = this.state.items;
  var newvalue = {
    text: e.target.value,
    key
  }
  var indexValue = this.state.items.findIndex(function(item)  {
    return item.key === key;
  });

  list.splice(indexValue, 1, newvalue);
  console.log('list', list);
  const itemsUpdated = list;
  this.setState ({
    items: itemsUpdated
  });
}

  render() {
    return (
      <div className= 'container'>
        <div className= 'headerinput'>
          <div>
            <form onSubmit={this.addItem}>
            
            <input ref={(a) => this.inputElement = a}>  
            </input>
            
            <button className='button' type="submit">Añadir</button>
            </form>
          </div>
        <TodoItems entries={this.state.items}
                  delete={this.deleteItem}
                  update={this.editItem}/>
        </div>
      </div>
    );
  }
}
 