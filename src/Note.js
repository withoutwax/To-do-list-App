import React from 'react';
import './Note.css';


class Note extends React.Component {
  constructor() {
    super();
    this.state = { edit: false }

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }
  edit() {
    this.setState({edit: true});
    console.log(this.state);
  }
  save() {
    var val = this.input.value;

    this.setState({edit: false});
    //console.log(this.state);
    // console.log(val);
    this.props.notes(val);
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
          <button>X</button>
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
