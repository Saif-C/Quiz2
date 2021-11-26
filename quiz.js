function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(t) {
    if (t < 10) {t = "0" + t};
    return t;
  }



function buttonfunc(){
    let score = 0;
    let givenName = document.getElementById("one").value;
    console.log(givenName);
    if (givenName == ""){
        alert("Please enter your name!!");
    }
    else{
        alert("see your score on right side");
    }

    let radio1 = document.querySelector("#pglanguage").checked;
    let radio2 = document.querySelector("#Mlanguage").checked;
    let emoji = document.querySelector("#emoji");
    
    if (radio2 == true){
        score+= 1;    
        document.getElementById('s1').innerHTML = ">-> Question 1 is correct. [1 point]";
        emoji.innerText = String.fromCodePoint(0x2714);
    }
    else{
        emoji.innerText = String.fromCodePoint(0x274C);
        document.getElementById('s1').innerHTML = ">-> Question 1 is incorrect.";
    }

    let op3 = document.querySelector("#op3").checked;
    let op4 = document.querySelector("#op4").checked;    
    let op7 = document.querySelector("#op7").checked;
    let op11 = document.querySelector("#op11").checked;
    
    if (op3 == true){
        score+= 0.50;
        document.getElementById('s2').innerHTML = ">-> Question 2 is correct. [2 point]";
    }
    if (op4 == true){
        score+= 0.50;
    }
    if (op7 == true){
        score+= 0.50;
    }
    if (op11 == true){
        score+= 0.50;
    }
    else{
        document.getElementById('s2').innerHTML = ">-> for Q2 You will not get full marks, you missed options .";
        document.getElementById('s3').innerHTML = "**(All four options were right)";
    }
    
    let lastans = document.getElementById("q3").value;
    let emojib = document.querySelector("#emojib");

    if (lastans == "Cascading Style Sheets"){
        console.log("correct");
        score+=3;
        emojib.innerText = String.fromCodePoint(0x2714);
        document.getElementById('s4').innerHTML = ">-> Question 3 is correct. [3 point]";
    }
    else if (lastans == "Cascading style sheets"){
        console.log("correct");
        score+=3;
        emojib.innerText = String.fromCodePoint(0x2714);
        document.getElementById('s4').innerHTML = ">-> Question 3 is correct. [3 point]";

    }
    else if (lastans == "cascading style sheets"){
        console.log("correct");
        score+=3;
        emojib.innerText = String.fromCodePoint(0x2714);
        document.getElementById('s4').innerHTML = ">-> Question 3 is correct. [3 point]";
    } 
    else{
        console.log("Question3 is incorrect");
        emojib.innerText = String.fromCodePoint(0x274C);
        document.getElementById('s4').innerHTML = ">-> Question 3 is incorrect.";
    }
    document.getElementById("final").innerHTML = score;
    if (score<2){
        document.getElementById("s5").innerHTML = "|/\...Fail";
    }
    else{
        document.getElementById("s5").innerHTML = "|/\ ...Pass";
    }
}


