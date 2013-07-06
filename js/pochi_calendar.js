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

  // http://iw3.me/156/
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
      eventResize: $scope.alertOnResize,
      weekends: false,
      firstDay: 1,
      // 月名称
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 月略称
      monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 曜日名称
      dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      // 曜日略称
      dayNamesShort: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      // ボタン文字列
      buttonText: {
          prev:     '&lsaquo;', // <
          next:     '&rsaquo;', // >
          prevYear: '&laquo;',  // <<
          nextYear: '&raquo;',  // >>
          today:    '今月',
          month:    '月',
          week:     '週',
          day:      '日'
      },
      // タイトルの書式
      titleFormat: {
          month: 'yyyy年M月',                             // 2013年9月
          week: "yyyy年M月d日{ ～ }{[yyyy年]}{[M月]d日}", // 2013年9月7日 ～ 13日
          day: "yyyy年M月d日'('ddd')'"                  // 2013年9月7日(火)
      }
    }
  };

  $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
});
