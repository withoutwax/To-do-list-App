import React from 'react';
import './style.css';
import ReactDraggable from 'react-draggable';


class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      text: ""
    }

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }
  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth -150, 'px'),
      top: this.randomBetween(0, window.innerHeight -150, 'px')
    }
    this.setState({text: this.props.children});
  }

  randomBetween(x, y, s) {
    return (x + Math.floor(Math.random() * (y-x))) + s
  }
  edit() {
    this.setState({edit: true});
  }

  save(e) {
    this.setState(
      {
        text: e.target.value
      });
  }
  updateNote() {
    var id = this.props.id;
      this.props.notes(this.state.text, id);
      this.setState({
        edit: false
      });
  }

  delete() {
    var id = this.props.id
    this.props.deleteNote(id);
  }
  editNote() {
    return (
      <div className="note" style={this.style}>
        {/* Changed into Component method = value */}
        {/* <textarea defaultValue={this.props.children} ref={input => this._text = input}></textarea> */}
        {/* MUST USE autoFocus - otherwise the defaultValue won't change in editing mode */}
        <textarea autoFocus defaultValue={this.state.text} onChange={ e => this.save(e)}></textarea>
        <span>
          <button onClick={this.updateNote}>SAVE</button>
        </span>
      </div>
    );
  }
  displayNote() {
    return (
      <div className="note" style={this.style}>
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
      <ReactDraggable>
        {(this.state.edit) ? this.editNote() : this.displayNote()}
      </ReactDraggable>
    );
  }
}




export default Note;
