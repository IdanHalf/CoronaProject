dir="rtl";
var i = 0;
var currentCounter = 0; /* used to display the right answers stored in this counter in the ending function */
var max = 15 /* 15=the amount of questions, decreasing every wrong answer inorder to decrease healthbar */
var userName = document.getElementById("nameINPUT");
//starting from the first question at index 0
generate(0);
//generate from json structer data with index
function generate(index){
    /*  inserting the data of jsonData by the index parameter that will increase every time the I increase
        into the questionpannel's questions (in page quiz.html) by getElementById, and writing it by the innerHtml */

    document.getElementById("question").innerHTML = jsonData[index].q; 
    document.getElementById("opt1").innerHTML = jsonData[index].option1;
    document.getElementById("opt2").innerHTML = jsonData[index].option2;
    document.getElementById("opt3").innerHTML = jsonData[index].option3;
    document.getElementById("opt4").innerHTML = jsonData[index].option4;
}
/* Wrong, Correct and Ending functions are used by the library of:
scriptfunctions/sweetalert2.min.js
scriptfunctions/sweetalert2.min.css
which is included in quiz.html page */

function Wrong(){
    Swal.fire({
        icon: 'error', // success is the opposite.
        title: 'תשובה שגויה',
        text: jsonData[i].answer, // if answer is wrong, it will display correct answer
        footer: jsonData[i].info, // additional information about the answer
        })
}
function Correct(){
    Swal.fire({
        icon: 'success',
        title: 'תשובה נכונה!',
        text: 'כל הכבוד',
        footer: jsonData[i].info, // additional information about the answer
        })
}
function Ending(){
    if(i == 15){ // can be activated only when i (index) reaches 15, which is the last question
        Swal.fire({
            title: localStorage.getItem("nameINPUT") + "\n" + " הניקוד שקיבלת מתוך 15 השאלות" + "\n["+ currentCounter +"]",
            showDenyButton: true,
            confirmButtonText: `חזרה לשאלון`,
            denyButtonText: `חזרה לעמוד הראשי`,
          }).then((result) => {
            if (result.isConfirmed) {
                document.location = "quiz.html";
            } 
            else if (result.isDenied) {
                document.location = "../../index.html";
            }
          })
        }
        // title will contain the name input i stored in localstorage at page namesubmit.html, with string, and the score at the counter
        // in the ending, it will contain 2 buttons, one is option to return to the quiz page, and other is return to the main portal
}
/*  this functions first check that user have chosen an answer, if so, it enters the checking answer.
    checking with getElementById for example :
    if option1 is checked, and jsonData[i] which at the begging set to 0 so it means it is the first question structer.option1
    (option 1 of index 0 of the structer is euqal to the answer of that structer, if it does
    it will increase the currentCounter, and fire correct function, and if it doesnt it will decrease max, fire wrong function,
    and fire imageSwitch with sending the parameter of max)
    then after checking the answer, it will incrase i, and generate the new increased i to be set for new question structer, 
    so i will be set to 1 and then 2 and then 3 and so forward  */
function checkAnswer(){
    if(!document.getElementById("option1").checked && !document.getElementById("option2").checked && !document.getElementById("option3").checked
        && !document.getElementById("option4").checked){
            alert("You didn't check any answer");
        }
    
    else{
        if(document.getElementById("option1").checked && jsonData[i].option1 == jsonData[i].answer ){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option1").checked && jsonData[i].option1 != jsonData[i].answer){
            max--;
            Wrong();
            imageSwitch(max);
        }

        if(document.getElementById("option2").checked && jsonData[i].option2 == jsonData[i].answer ){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option2").checked && jsonData[i].option2 != jsonData[i].answer){
            max--;
            Wrong();
            imageSwitch(max)
        }

        if(document.getElementById("option3").checked && jsonData[i].option3 == jsonData[i].answer ){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option3").checked && jsonData[i].option3 != jsonData[i].answer){
            max--;
            Wrong();
            imageSwitch(max)
        }

        if(document.getElementById("option4").checked && jsonData[i].option4 == jsonData[i].answer){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option4").checked && jsonData[i].option4 != jsonData[i].answer){
            max--;
            Wrong();
            imageSwitch(max)
        }
        i++;
        generate(i);    
    }
}
/* function that switch the healthbar image, everytime max's value decrease for example: will change image when 2 answers
were wrong, and from 15 it dropped to 13, entered the first if, and changes the src image to the same id */
function imageSwitch(){
    console.log(max);
    var f = max;
    if (f <= 13 && f >= 11) {
        var b = document.getElementById('healthbar').src = "/image/13minus.png";
        if(f == 13){
            alert("ירד לך חיים");
        }
    }
    else if(f <= 10 && f >= 7){
        var c = document.getElementById('healthbar').src = "/image/10minus.png";
        if(f == 10){
            alert("ירד לך חיים");
        }  
    }
    else if(f <= 6 && f >= 4){
        var d = document.getElementById('healthbar').src = "/image/6minus.png";
        if(f == 6){
            alert("ירד לך חיים");
        }
    }
    else if(f <= 3 && f >= 0){
        var e = document.getElementById('healthbar').src = "/image/3minus.png";
        if(f == 3){
            alert("ירד לך חיים");
        }
    }
}
