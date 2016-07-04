"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionsTypes = require("../constants/coursesActionsTypes");
var CoursesApi = require("../api/courseApi");

var CoursesActions = {
  addCourse: function(course) {
    var newCourse = CoursesApi.saveCourse(course);

    Dispatcher.dispatch({
      type: ActionsTypes.ADD_COURSE,
      course: newCourse
    });
  },

  removeCourse: function(course) {
    CoursesApi.deleteCourse(course.id);

    Dispatcher.dispatch({
      type: ActionsTypes.REMOVE_COURSE,
      courseId: course.id
    });
  },

  editCourse: function(course) {
    var editedCourse = CoursesApi.saveCourse(course);

    Dispatcher.dispatch({
      type: ActionsTypes.EDIT_COURSE,
      course: editedCourse
    });
  }
};

module.exports = CoursesActions;