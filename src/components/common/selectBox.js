"use strict";

var React = require("react");

var SelectBox = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },

  componentDidMount: function() {

  },

  render: function () {
    function renderOption(author) {
      return (
        <option key={author.id} value={author.firstName + " " + author.lastName}>{author.firstName} {author.lastName}</option>
      );
    }

    var wrapperClass = "form-group";

    if (this.props.error && this.props.error.length) {
      wrapperClass += " has-error";
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <select name={this.props.name}
                  className="form-control"
                  value={this.props.value}
                  defaultValue={this.props.defaultAuthor}
                  ref={this.props.name}
                  onChange={this.props.onChange}>
            {this.props.authors.map(renderOption, this)}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = SelectBox;