dir="rtl";
var i = 0;
var currentCounter = 0;
var userName = document.getElementById("nameINPUT");
//התחלה משאלה ראשונה
generate(0);
//generate from json array data with index
function generate(index){

    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("opt1").innerHTML = jsonData[index].option1;
    document.getElementById("opt2").innerHTML = jsonData[index].option2;
    document.getElementById("opt3").innerHTML = jsonData[index].option3;
    document.getElementById("opt4").innerHTML = jsonData[index].option4;
}
function Wrong(){
    Swal.fire({
        icon: 'error', // success is the opposite.
        title: 'תשובה שגויה',
        text: jsonData[i].answer,
        footer: jsonData[i].info,
        })
}
function Correct(){
    Swal.fire({
        icon: 'success',
        title: 'תשובה נכונה!',
        text: 'כל הכבוד',
        footer: jsonData[i].info,
        })
}
function Ending(){
    if(i == 15){
        Swal.fire({
            title: localStorage.getItem("nameINPUT") + " your score out of 15 is" + "\n["+ currentCounter +"]",
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonText: `LeaderBoard`,
            confirmButtonText: `חזרה לשאלון`,
            denyButtonText: `חזרה לעמוד הראשי`,
          }).then((result) => {
            if (result.isConfirmed) {
                document.location = "quiz.html";
            } 
            else if (result.isDenied) {
                document.location = "../../index.html";
            }
            else if(result.isDismissed){
                document.location = "scoreboard.html";
            }
          })
        }
}

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
            Wrong();
        }

        if(document.getElementById("option2").checked && jsonData[i].option2 == jsonData[i].answer ){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option2").checked && jsonData[i].option2 != jsonData[i].answer){
            Wrong();
        }

        if(document.getElementById("option3").checked && jsonData[i].option3 == jsonData[i].answer ){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option3").checked && jsonData[i].option3 != jsonData[i].answer){
            Wrong();
        }

        if(document.getElementById("option4").checked && jsonData[i].option4 == jsonData[i].answer){
            currentCounter++;
            Correct();
        }
        else if(document.getElementById("option4").checked && jsonData[i].option4 != jsonData[i].answer){
            Wrong();
        }
        i++;
        generate(i);    
    }
}
