"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var EventEmitter = require("events").EventEmitter;
var CoursesActionsTypes = require("../constants/coursesActionsTypes");
var CourseApi = require("../api/courseApi");
var _ = require("lodash");

var CHANGE_EVENT = "change";

var _courses = [];

var CoursesStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  editCourse: function(course) {
    var c = _.find(_courses, {id: course.id}),
      cInd = _.index(_courses, c);

    _courses.splice(cInd, 1, course);
  },

  removeCourse: function(courseId) {
    _.remove(_courses, {id: courseId});
  },

  getAllCourses: function() {
    return _courses;
  },

  getCourseById: function(id) {
    return CourseApi.getCoursesById(id);
  }
});

Dispatcher.register(function(payload) {
  switch(payload.actionType) {
    case CoursesActionsTypes.ADD_COURSE:
      _courses.push(payload.course);
      CoursesStore.emitChange();
      break;

    case CoursesActionsTypes.EDIT_COURSE:
      CoursesStore.editCourse(payload.course);
      CoursesStore.emitChange();
      break;

    case CoursesActionsTypes.REMOVE_COURSE:
      CoursesStore.removeCourse(payload.courseId);
      CoursesStore.emitChange();
      break;
  }
});

module.exports = CoursesStore;