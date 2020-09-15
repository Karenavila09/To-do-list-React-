import React from 'react';

export default class TodoItems extends React.Component {
    constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }



  createTasks(item) {
    return <li>
              <input value={item.text} onChange={(e) => this.props.update(e, item.key)} />

              <button className='button' onClick={() => this.delete(item.key)} 
                  key={item.key} >Eliminar</button>
          </li>
  }
 
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
  
    return (
      <ul className='Listul'>
          {listItems}
      </ul>
    );
  }
}; 