panaApp.controller("quizMakerCtrl", function ($scope, mainFactory, $rootScope, courseHomeFactory, $location) {
    $scope.quizMakerHome = "Welcome to Quiz Maker";
    $scope.quizArray = [1, 2, 3, 4, 5];

    //Get quizez


    $scope.goToQuizHome = function (path) {
        $location.path(path);

    }

});