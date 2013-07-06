'use strict';

var calendarApp = angular.module('calendarApp', ['ui.calendar']);

calendarApp.controller('CalendarCtrl', function($scope) {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.eventSource = {

  };

  $scope.events = [
    {
      title: "sample",
      start: new Date(y,m,1)
    }
  ];

  $scope.eventsF = function(start, end, callback) {
    var s = new Date(start).getTime() / 1000;
    var e = new Date(end).getTime() / 1000;
    var m = new Date(start).getMonth();
    var events = [
      {
        title: 'sample',
        allDay: true
      }
    ];
    callback(events);
  };

  $scope.alertEventOnClick = function(date, allDay, event, view) {
    $scope.$apply(function(){
      $scope.alertMessage = 'event';
    });
  };

  $scope.alertOnDropk = function(event, day, minute, allDay, revert, js, ui, view) {
    $scope.$apply(function(){
      $scope.alertMessage = 'event';
    });
  };

  $scope.alertOnResize = function(event, day, minute, revert, js, ui, view) {
    $scope.$apply(function(){
      $scope.alertMessage = 'event';
    });
  };

  $scope.changeView = function(view) {
    $scope.myCalendar.fullCalendar('changeView', view);
  };

  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header: {
        left: 'title',
        center: '',
        right: 'today prev, next'
      },
      dayClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  };

  $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
});
