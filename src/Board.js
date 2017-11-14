import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 'Default Note',
      notesArray: []
    }
    this.updateNote = this.updateNote.bind(this);
    this.add = this.add.bind(this);
  }

  add() {
    alert('Let\' add more Notes!');

  }

  updateNote = (data) => {
    this.setState({ note: data });
    console.log(data)
  }


  render() {
    return (
      <div>
        <Note notes={this.updateNote}>{this.state.note}</Note>
        <button id="addButton" onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Board;
