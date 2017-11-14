import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 'Default Note',
      notesArray: ['Default Note', 'Default Note 02', 'Default Note 03']
    }

    this.updateNote = this.updateNote.bind(this);
    this.add = this.add.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  add() {
    console.log("Let's add more Notes!");
    //this.state.notesArray.push('Default Note');
    console.log(this.state.notesArray);
  }

  updateNote = (data) => {
    this.setState({ note: data });
    console.log(data)
  }
  deleteNote = (item) => {
    let updatedNote = this.state.notesArray.filter((val, index) => {
      return item !== val;
    });
    this.setState({
      notesArray: updatedNote
    });
  }
  render() {
    let notes = this.state.notesArray;
    notes = notes.map((item, index) => {
      return (
        <Note notes={this.updateNote} key={index} deleteNote={this.deleteNote}>{item}</Note>
      );
    });

    return (
      <div>
        {/* <Note notes={this.updateNote}>{this.state.note}</Note> */}
        {notes}
        <button id="addButton" onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Board;
