/**
 * Created by Badar on 9/4/2014.
 */
panaApp.controller("addQuestionCtrl", function ($scope, mainFactory, $rootScope, courseHomeFactory, $location, quizMakerFactory) {
//    console.log($scope.checked);
    //$scope.arrEles=[];
    $scope.arrGroupQuestion = [];
    $scope.go = function (path) {

        location.path(path);
    }

    /*$scope.add=function(a){
     //console.log(a);
     //objectAdd={};//alert("badar ahmed sheikh");
     $scope.obj.answers.push(a);
     }*/
    $scope.add1 = function () {
        //console.log(a);
        objectAdd1 = {};//alert("badar ahmed sheikh");
        $scope.arrGroupQuestion.push(objectAdd1);
    }

    console.log();
    /**
     * add true and false question add in quizMakerFactory
     */
    $scope.saveBoolean = function () {
        quizMakerFactory.selectedCourseFromJoinedCourses['addQuestion'].push($scope.obj);
        console.log(quizMakerFactory.selectedCourseFromJoinedCourses['addQuestion']);
        $scope.obj = {};
        //console.log("add Question arr`: ",quizMakerFactory.selectedCourseFromJoinedCourses['addQuestion']);
        //$location.path('/addQuestion');

        //add questios
        /*quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0].addQuestion.push(sampQues);
         console.log(quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0]);*/
    };


    /**
     * Multiple  choice question add in quizMakerFactory
     */
    $scope.checked = false;

    $scope.$watch('checked', function () {
        alert('hey, checked has changed!');

        if ($scope.checked == true) {
            $scope.obj.quesType = "Single select";
            //  console.log(" single select");
            //console.log($scope.obj.quesType);
        }
        else {
            $scope.obj.quesType = "Multiple select";
            // console.log($scope.obj.quesType);
        }
    });

    $scope.saveMultiple = function () {


//        $scope.$watch('myVar', function() {
//            alert('hey, myVar has changed!');
//
//            if ($scope.checked == true) {
//                $scope.obj.quesType = "Single select";
//                console.log(" single select");
//                console.log($scope.obj.quesType);
//            }
//            else {
//                $scope.obj.quesType = "Multiple select";
//                console.log($scope.obj.quesType);
//            }
//        });
        // $scope.obj.quesTyepe=$scope.checked;
        //quizMakerFactory.selectedCourseFromJoinedCourses.addQuestion.push($scope.obj);
        quizMakerFactory.addQuestion($scope.obj);
        $scope.obj = {
            "quesType": "Multiple select",
            "answers": []
        };
        //console.log(quizMakerFactory.selectedCourseFromJoinedCourses['addQuestion']);
        // $scope.obj={};
        //  $scope.obj.answers=[];
        //$location.path('/addQuestion');

        //add questios
        /*quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0].addQuestion.push(sampQues);
         console.log(quizMakerFactory.selectedCourseFromJoinedCourses['addQuiz'][0]);*/
    };



    /**
     * Group  Question has   boolean and multiple
     */


})