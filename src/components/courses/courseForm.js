"use strict";

var React = require("react");
var TextInput = require("../common/textInput");
var SelectBox = require("../common/selectBox");

var CourseForm = React.createClass({
  render: function () {
    return (
      <form>
        <TextInput name="title"
          label="Title"
          onChange={this.props.onChange}
          value={this.props.course.title}
          error={this.props.errors.title} />
        <SelectBox name="author"
          label="Author"
          onChange={this.props.onChange}
          value={this.props.course.author.name}
          error={this.props.errors.author}
          authors={this.props.authors}
          defaultAuthor={this.props.defaultAuthor}/>
        <TextInput name="category"
          label="Category"
          onChange={this.props.onChange}
          value={this.props.course.category}
          error={this.props.errors.category} />
        <TextInput name="length"
          label="Length"
          onChange={this.props.onChange}
          value={this.props.course.length}
          error={this.props.errors.length} />
        <input id="courseSave" className="btn btn-success" type="submit" value="Save" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = CourseForm;