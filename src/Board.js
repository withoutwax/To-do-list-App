import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 'Default Note',
      notesArray: ['New Note 01', null, 'New Note 02', 'New Note 03']
      //deleted: []
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
    //this.state.notesArray[id] = data;
    this.setState({ item });

  }

  deleteNote = (item) => {
    // USED VERY CHEAP WAY TO DELETE NOTES
    //this.state.notesArray.splice(item, 1);
    this.state.notesArray[item] = null
    // var updatedNote = this.state.notesArray.filter((noteText, index) => {
    //   return item !== index;
    // });
    var updatedNote = this.state.notesArray;

    this.setState({
       notesArray: updatedNote
    });


    // var concatItem = this.state.deleted.concat(item);
    // this.setState({deleted: concatItem}, function() {
    //   // console.log(this.state.deleted);
    // });
  }

  render() {
    /*
    console.log(this.state.deleted);
    var notes = this.state.notesArray
      .filter((noteText, index) => {
        return this.state.deleted.indexOf(index) === -1;
      })
      .map((item, index) => {
        return (
          <Note notes={this.updateNote} id={index} key={index} deleteNote={this.deleteNote}>{item}</Note>
        );
      })
      */
    var notes = this.state.notesArray;
      notes = notes.map((item, index) => {
      if (item !== null){
        return (
            <Note notes={this.updateNote} id={index} key={index} deleteNote={this.deleteNote}>{item}</Note>
        );
      }
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
