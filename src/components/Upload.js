/* eslint-disable no-eval */
// We need eval for this to work.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import { uploadPlaceholder } from '../lib/messages';

type Props = {
  next: Function,
  setData: Function,
};

class Upload extends Component<Props> {
  constructor() {
    super();
    this.state = {
      code: '',
      error: false,
    };
  }

  processCode(e) {
    e.preventDefault();
    const { code } = this.state;
    let localize = {};
    try {
      eval(`localize = ${code}`);
    } catch (error) {
      localize = null;
    }
    this.validateCode(localize);
  }

  validateCode(localize) {
    const { next, setData } = this.props;
    if (localize) {
      setData(localize);
      next();
    } else {
      this.setState({ error: true });
    }
  }

  handleChange(e) {
    this.setState({ code: e.target.value });
  }

  render() {
    const { code, error } = this.state;
    return (
      <div className="upload columns">
        <div className="field column is-two-thirds">
          <div className="control upload-container">
            {error && (
              <div className="error">
                <p>Something went wrong while processing your code.</p>
                <p>
                  Read the description, and try again. You can also check out{' '}
                  <a href="https://github.com/twhitacre/localizer">the docs</a>{' '}
                  if you need more help.
                </p>
                <p>
                  Otherwise... <a href="/">Try Again</a>
                </p>
              </div>
            )}
            <textarea
              className="textarea is-primary"
              placeholder={uploadPlaceholder}
              rows="20"
              onChange={e => this.handleChange(e)}
              value={code}
            />
          </div>
        </div>
        <div className="field column is-one-third">
          <div className="control">
            <p>Welcome! This will help you localize your app.</p>
            <p>
              You can read more about it{' '}
              <a href="https://github.com/twhitacre/localizer">here</a>.
            </p>
            <br />
            <button
              type="button"
              onClick={e => this.processCode(e)}
              className="button is-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { ...actions }
)(Upload);
