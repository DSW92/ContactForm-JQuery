$(function () {

    // Form Validation ------------------------------------ //
    // Form is not valid on page load //
    var isFormValid = false;

    // input variables //
    var name = $('#name');
    var email = $('#email');
    var subject = $('#subject');
    var message = $('#message');
    var subtmitBtnEn = $('#submit_eng');
    var resetBtnEn = $('#reset_eng');

    var isNameValid = function () {
        var nameVal = name.val();
        return nameVal.length > 0 && nameVal.length <= 100;
    };

    var isEmailValid = function () {
        var emailVal = email.val();
        return emailVal.indexOf('@') > -1 && emailVal.length <= 100;
    };

    var isSubjectValid = function () {
        var subjectVal = subject.val();
        return subjectVal.length > 0 && subjectVal.length <= 100;
    };

    var isMessageValid = function () {
        var messageVal = message.val();
        return messageVal.length > 0 && messageVal.length <= 500;
    };

    function formValidation() {
        var isFormValid = isNameValid() && isEmailValid() && isSubjectValid() && isMessageValid();

        if (isFormValid === false) {
            alert('error');
        } else {
            alert('succes');
        }
    };

    subtmitBtnEn.on('click', function (event) {
        event.preventDefault();
        formValidation();
    });


});