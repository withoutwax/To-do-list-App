import React from 'react';
import Note from './Note';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      note: 'Default Note'
    }

    this.updateNote = this.updateNote.bind(this);
  }

  updateNote = (data) => {
    this.setState({ note: data });
    console.log(data)
  }

  render() {
    return (
      <div>
        <Note notes={this.updateNote}>{this.state.note}</Note>>
      </div>
    )
  }
}

export default Board;
