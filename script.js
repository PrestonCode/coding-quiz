var time = 10
var QandA = {
    Q1:["What is a repo?","A) A specific class","B) The name of a bug fix","C) A fancy name for storage", "D)Repo is not a word"],
    Q2:["How much storage does 1 letter take up?","A)10 bites","B) None","C) 1 bite","D) 1 kilobite"],
    Q3:["#####","A","B","C","D"],
    Q4:["#####","A","B","C","D"],
    Q5:["#####","A","B","C","D"]
}
var TimeQ = document.getElementById("timer")
var startQuiz = document.getElementById("startQuiz")
var addQuestions = document.
Function(conter() ,{
    var: timeI = setInterval(function() {
        time--;
        document.getElementById("timer").textContent = time;
    }),
}, 1000);
startQuiz.addEventListener("click", function() {
    
    conter()
    $("#question").text("QandA.Q1.[0]");
    
    for (var i = 1; i < QandA.Q1.length; i++) {
        $("#question").text("QandA.Q" + i + ".[0]");
        var newQuestion = $("<li>");
        newQuestion.text(QandA.Q1.[i]);
        $(".questionArea").prepened(newQuestion)
        
    }
    
})
