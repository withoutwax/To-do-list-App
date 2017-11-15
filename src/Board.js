import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 'Default Note',
      notesArray: ['Default Note', 'Default Note 02', 'Default Note 03'],
    }
    this.updateNote = this.updateNote.bind(this);
    this.add = this.add.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  add() {
    var arrayNote = this.state.notesArray.slice();
    arrayNote.push('Default Note');
    this.setState({
      notesArray: arrayNote
    });
  }

  updateNote = (data, id) => {
    const item = this.state.notesArray;
    item[id] = data;
    console.log(item);
    //this.state.notesArray[id] = data;
    this.setState({ item });
  }

  deleteNote = (item) => {
    //this.state.notesArray.splice(item, 1);
    var updatedNote = this.state.notesArray.filter((noteText, index) => {
      return item !== index;
    });
    this.setState({
       notesArray: updatedNote
    });
  }

  render() {
    var notes = this.state.notesArray;
    notes = notes.map((item, index) => {
      return (
          <Note notes={this.updateNote} id={index} key={index} deleteNote={this.deleteNote}>{item}</Note>
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
