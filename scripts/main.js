(function(window, angular, undefined) {

"use strict";

angular.module("planhacker", ["firebase"])

.factory("baseRef", ["$firebase", function($firebase) {
  return $firebase(new Firebase("https://planhacker.firebaseio.com"));
}])

.factory("users", ["baseRef", function(baseRef) {
  return baseRef.$child("users");
}])

.factory("user", ["users", function(users) {
  return users.$child("user");
}])

.factory("tasks", ["user", function(user) {
  return user.$child("tasks");
}])

.controller("TaskListController", ["$scope", "tasks", function($scope, tasks) {
  tasks.$bind($scope, "tasks");

  $scope.addTask = function() {
      tasks.$add({name: $scope.taskInput});
      $scope.taskInput = null;
  };
}]);

})(window, window.angular);
