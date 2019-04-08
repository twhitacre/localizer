import React, { Component } from 'react';
import { connect } from 'react-redux';
import ISO from '../lib/iso';
import { actions } from '../store';

type Props = {
  store: Object,
  next: Function,
  setLanguage: Function,
  local: Boolean,
};

class Review extends Component<Props> {
  constructor() {
    super();
    this.state = { languages: [], addNew: false, local: false };
  }

  componentDidMount() {
    const { store, local } = this.props;
    if (local) {
      this.setState({ local: true });
    }
    const { data } = store;
    window.data = data;
    const languages = Object.keys(data[Object.keys(data)[0]]);
    this.setState({ languages });
  }

  reset = () => {
    localStorage.removeItem('lclData');
  };

  displayLanguages(languages) {
    return languages.map((lang, i) => (
      <li key={i}>
        <a href="/" onClick={e => this.loadLanguage(e, lang)}>
          {ISO[lang].name}
        </a>
      </li>
    ));
  }

  displayOptions() {
    const keys = Object.keys(ISO);
    return keys.map((key, i) => (
      <li key={i}>
        <a href="/" onClick={e => this.loadLanguage(e, key)}>
          {`[${key}] - ${ISO[key].name}`}
        </a>
      </li>
    ));
  }

  loadLanguage(e, lang) {
    const { next, setLanguage } = this.props;
    e.preventDefault();
    setLanguage(lang);
    next();
  }

  render() {
    const { languages, addNew, local } = this.state;
    return (
      <div className="review columns">
        <div className="column is-two-thirds">
          {!addNew && (
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Data Review</p>
              </header>
              <div className="card-content overflow">
                <div className="content">
                  {local && (
                    <p className="notice">
                      <strong>LOCAL STORAGE FOUND</strong> <br />
                      It looks like you might have been in the middle of a
                      translation before. <br />
                      Feel free to continue, or{' '}
                      <a href="/" onClick={() => this.reset()}>
                        click here
                      </a>{' '}
                      to restart.
                    </p>
                  )}
                  <p>{`After parsing, we found ${
                    languages.length
                  } language(s) already translated.`}</p>
                  <p>
                    Click on the language below to review or edit it, or choose
                    to add a new language
                  </p>
                  <ul className="menu-list languages">
                    {this.displayLanguages(languages)}
                  </ul>
                </div>
              </div>
              <footer className="card-footer">
                <button
                  type="button"
                  onClick={() => this.setState({ addNew: true })}
                  className="button is-primary is-fullwidth"
                >
                  Add Language
                </button>
              </footer>
            </div>
          )}
          {addNew && (
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Select Language</p>
              </header>
              <div className="card-content overflow">
                <div className="content">
                  <ul className="menu-list languages">
                    {this.displayOptions()}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  store: state.store,
});

export default connect(
  mstp,
  { ...actions }
)(Review);
