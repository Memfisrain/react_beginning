"use strict";

var React = require("react");

var CourseForm = React.createClass({
  render: function () {
    return (
      <form>
        <label htmlFor="courseTitle">Title</label>
        <input id="courseTitle" type="text" value="" />
        <label htmlFor="courseAuthor">Author</label>
        <input id="courseAuthor" type="text" value="" />
        <label htmlFor="courseCategory">Category</label>
        <input id="courseCategory" type="text" value="" />
        <label htmlFor="courseLength">Length</label>
        <input id="courseLength" type="text" value="" />
        <input id="courseSave" class="btn btn-success" type="submit" value="Save" />
      </form>
    );
  }
});

module.exports = CourseForm;