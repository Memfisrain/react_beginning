"use strict";

var React = require("react");
var Link = require("react-router").Link;
var CoursesActions = require("../../actions/coursesActions");

var CoursesList = React.createClass({
  deleteCourse: function (courseId, event) {
    event.preventDefault();
    CoursesActions.removeCourse(courseId);
  },

  render: function () {
    function createCourseRow(course) {
      return (
        <tr key={course.id}>
          <td>
            <Link to="watchCourse" params={{id: course.id}}>Watch</Link>
          </td>
          <td>
            <a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a>
          </td>
          <td>course.title</td>
          <td>course.author</td>
          <td>course.category</td>
          <td>course.duration</td>
        </tr>
      );
    }

    return (
      <table className="table">
        <thead>
          <th></th>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </thead>
        <tbody>
          {this.props.courses.map(createCourseRow, this)}
        </tbody>
      </table>
    );
  }
});

module.exports = CoursesList;