import React, { Component } from 'react';
import './Editor.css';
import { FormGroup , Input } from 'reactstrap';

class Editor extends Component {

  render(){
    const { InputEditor,onChange } = this.props;
  return (
    <div className="Editor">
        <FormGroup className = 'Editor1'>
          <div className = 'Label1' >Editor</div>
          <Input 
          className = 'Input1' 
          type="textarea" name="text" id="exampleText" 
          onChange = {onChange}
          value = {InputEditor}
          />
        </FormGroup>
    </div>
  );
}
}

export default Editor;
