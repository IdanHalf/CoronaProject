dir="rtl";
var i = 0;
var currentCounter = 0;
//התחלה משאלה ראשונה
generate(0);
//generate from json array data with index
function generate(index){
    document.getElementById("question").innerHTML = jsonData[index].q ;
    document.getElementById("opt1").innerHTML = jsonData[index].option1;
    document.getElementById("opt2").innerHTML = jsonData[index].option2;
    document.getElementById("opt3").innerHTML = jsonData[index].option3;
    document.getElementById("opt4").innerHTML = jsonData[index].option4;
}

function checkAnswer(){
    if(document.getElementById("option1").checked && jsonData[i].option1 == jsonData[i].answer ){
        currentCounter++;
    }
    if(document.getElementById("option2").checked && jsonData[i].option2 == jsonData[i].answer ){
        currentCounter++;
    }
    if(document.getElementById("option3").checked && jsonData[i].option3 == jsonData[i].answer ){
        currentCounter++;
    }
    if(document.getElementById("option4").checked && jsonData[i].option4 == jsonData[i].answer ){
        currentCounter++;
    }
    //adding i for the next question
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#348322;'>")
        document.write("<p style='color:#79B96A; font-size:18pt;'>Your score is: "+ currentCounter);
        document.write("</body>")
    }
    //קריאה לשאלה הבאה
    generate(i);
}