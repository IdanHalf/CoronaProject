//var i = 0;
//function names()
//{
//    var newName = document.querySelectorAll(".ns");
//    for(var i = 0; i < 10; i++){
//        document.getElementById("name").i.innerHTML = "name: banana";
//    }
//    //for(var i = 0; i < newName.length; i++){
//    //    if(document.getElementById("nameNscore").i.innerHTML == "name:"){
//    //        document.getElementById("nameNscore").i.innerHTML = "name: banana";//+ username;
//    //}
//}
//
//
//    //for(i = 0; i < document.getElementById("nameNscore").length ;i++){
//    //        if(document.getElementById("name").innerHTML == "name:"){
//    //            document.getElementById("name").innerHTML = "name: banana";//+ username;
//    //        }
//    //}
//
//function scores(){
//    if(document.getElementById("score").innerHTML == "score:"){
//        document.getElementById("score").innerHTML = "habsha";
//    }  
//}

function tableCreate(name,score) {
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width = '566px';
    for(var i = 0; i < 1; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('name'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}
tableCreate();

