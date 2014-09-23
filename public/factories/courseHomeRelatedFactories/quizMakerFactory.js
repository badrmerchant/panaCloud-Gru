/**
 * Created by Badar on 9/12/2014.
 */

panaApp.factory('quizMakerFactory', function ($localstorage, $modal) {
    var selectedCourseFromJoinedCourses =
    {
        'addPages': [],
        'addQuiz': [
            {
                quizTitle: "HTML",
                quizDescription: "WHAT IS STAND FOR HTML",
                passScore: "60",
                proctoringKey: "123",
                duration: ""
            }
        ],
        'addQuestion': [
            {

                quizTitle: "MULTIPLE",
                questionTitle: "CSS3",
                question: "CSS3 STANDS FOR WHAT?",
                writeAnswer: ['INGLE SELECT'],
                questionType: "RADIO"
            }
        ],
        'addLater': []


    };

    function setAddQuiz(a) {
                              console.log(a);
        return selectedCourseFromJoinedCourses.addQuiz.push(a);

    }

    function addQuestion(a) {
        alert("hello");
  console.log(selectedCourseFromJoinedCourses.addQuestion);
        return selectedCourseFromJoinedCourses.addQuestion.push(a);

    }

//console.log(selectedCourseFromJoinedCourses);
    function upDate() {
    }


    return {
        selectedCourseFromJoinedCourses: selectedCourseFromJoinedCourses,
        addQuestion: addQuestion

    }


});
