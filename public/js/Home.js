$(document).ready(function () {
    var questionLabel = document.querySelector("#question");
    var emailLabel = document.querySelector("#email");
    var answer = document.querySelector("#robotTest");

    var question = "The first element is in position:";
    var correct = ["0", "zero"];
    var emailServer = "live.com.pt";

    var email = "carlosmiguel.gomes" + "@";

    questionLabel.textContent = question;
    answer.addEventListener('input', function () {
        if (correct.includes(answer.value))
            emailLabel.textContent = email + emailServer;
        else{
            emailLabel.textContent = "";
        }
    });
});