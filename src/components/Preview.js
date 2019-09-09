import React, { Component } from 'react';
import './Preview.css';
import { FormGroup , Input } from 'reactstrap';

import marked from 'marked';

class Preview extends Component {

  render(){
    const { OutputPreview } = this.props;
  return (
    <div className="Preview">
        <FormGroup className = 'Preview2'>
          <div className = 'Label2' >Preview</div>
          <div className ='Input2' dangerouslySetInnerHTML = {{__html: marked(OutputPreview)}} /> 
        </FormGroup>
    </div>
  );
}
}

export default Preview;
