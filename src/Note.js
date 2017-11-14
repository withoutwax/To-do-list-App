import React from 'react';
import './Note.css';


class Note extends React.Component {
  constructor() {
    super();
    this.state = { edit: false }

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }
  edit() {
    this.setState({edit: true});
  }
  save() {
    var val = this.input.value;
    var id = this.props.id;
    this.setState({edit: false});
    this.props.notes(val, id);
  }
  delete() {
    this.props.deleteNote(this.props.children);
    // console.log(this.props.deleteNote);
    // console.log(this.props.children);
  }
  editNote() {
    return (
      <div className="note">
        {/* Used Uncontrolled Component method */}
        <textarea defaultValue={this.props.children} ref={(input) => this.input = input}></textarea>
        <span>
          <button onClick={this.save}>SAVE</button>
        </span>
      </div>
    );
  }
  displayNote() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.delete}>X</button>
        </span>
      </div>
    );
  }

  render() {
    return (
      (this.state.edit) ? this.editNote() : this.displayNote()
    );
  }
}




export default Note;
