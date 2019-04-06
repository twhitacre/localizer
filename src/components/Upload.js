/* eslint-disable no-eval */
// We need eval for this to work.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

const placelholder = `
  Paste your code here to get stared. Note, it must follow this format.

  Also, each parent property MUST contain an english translation (en) property.

  {

    property: {
      en: 'translated text',
      sp: 'translated text',
    },

    property2: {
      en: 'translated text',
      sp: 'translated text',
    }

  }

`;

class Upload extends Component {

  constructor() {
    super();
    this.state = { code: '' }
  }

  processCode(e) {
    const { code } = this.state;
    const { next, setData } = this.props;
    let localize = {};
    eval(`localize = ${code}`);
    setData(localize);
    next();
  }

  handleChange(e) {
    this.setState({ code: e.target.value })
  }

  render() {
    const { code } = this.state;
    return (
      <div className="upload columns">
        <div className="field column is-two-thirds">
          <div className="control">
            <textarea className="textarea is-primary" placeholder={placelholder} rows="20" onChange={e => this.handleChange(e)} value={code}></textarea>
          </div>
        </div>
        <div className="field column is-one-third">
          <div className="control">
            <p>Welcome! This will help you localize your app.</p>
            <p>You can read more about it <a href="https://github.com/twhitacre/localizer">here</a>.</p>
            <br />
            <button onClick={e => this.processCode(e)} className="button is-primary">Get Started</button>
          </div>
        </div>        
      </div>
    );
  }
}

export default connect(null, {...store.actions})(Upload);
