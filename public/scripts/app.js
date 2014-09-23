
var panaApp=angular.module('panaApp',['ngFacebook','ui.bootstrap','ui.tree'])
    .run(function($rootScope){
        $rootScope.currentCourse="";
    })
    .config(['$routeProvider','$facebookProvider', function($routeProvider,$facebookProvider ) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })

            .when('/userHome', {
                templateUrl: 'views/userHome.html',
                controller: 'userHomeCtrl'
            })
            .when('/createCourse', {
                templateUrl: 'views/createCourse.html',
                controller: 'createCourseCtrl'
            }) .when('/courseHomePage',
            {templateUrl: 'views/courseHomePage/courseHome.html',
                controller: 'courseHomeCtrl'})
            .when('/quizMaker',
            {templateUrl: 'views/quizHome/quizMaker.html',
                controller: 'quizMakerCtrl'})
            .when('/createQuiz',
            {templateUrl: 'views/quizHome/createQuiz.html',
                controller: 'createQuizCtrl'})
            .when('/addQuestion',
            {templateUrl: 'views/quizHome/addQuestion.html',
                controller: 'addQuestionCtrl'})
            .otherwise({
                redirectTo: '/'
            });
        $facebookProvider.setAppId('674191602649160');

    }])
    .factory('$localstorage', ['$window', function($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }]);
