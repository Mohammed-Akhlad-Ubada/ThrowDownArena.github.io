var count = 0;
var user = 0;
var comp = 0;
var arr = ["Rock", "Paper", "Scissor"];
function setting() {
    if (count > 5) {
        if (document.getElementById("b1").value == 1) {
            stone();
        }
        else if (document.getElementById("b2").value == 1) {
            paper();
        }
        else {
            scissor();
        }
    }

}

function stone() {
    
    var val = "Rock";
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
      
      if(user !=5 && comp!=5)
      {
        document.getElementById("com1").innerHTML=randomElement;
        document.getElementById("pla1").innerHTML=val;
    if (randomElement == "Scissor") {
        user++;
     alert("you got point");
    }
    else if (val == randomElement) {
        alert("tie");
    }
    else {
        comp++;
        alert("computer got point");
    }
    count++;
    document.getElementById("com").innerHTML=comp;
    document.getElementById("pla").innerHTML=user;
    if(user ==5 || comp==5)
    {
    if(comp<user)
    {
        document.getElementById("res").style.color="green";
        document.getElementById("res").innerHTML="Congratulations you won";
        document.getElementById("im").src="images/happy.png"
    }
    else{
        document.getElementById("res").style.color="red";
        document.getElementById("res").innerHTML="Better Luck Next Time Computer Won";
        document.getElementById("im").src="images/sad.png"
    }
    }
}
}
function paper() {

    var val = "Paper";
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
 if(user !=5 && comp!=5){
    document.getElementById("com1").innerHTML=randomElement;
        document.getElementById("pla1").innerHTML=val;
    if (randomElement == "Rock") {
        user++;
      
        alert("you got point");
    }
    else if (val == randomElement) {
       alert("tie");
        
    }
    else {
        comp++;
        alert("computer got point");
        
    }
    count++;
    document.getElementById("com").innerHTML=comp;
    document.getElementById("pla").innerHTML=user;
    if(user ==5 || comp==5)
    {
    if(comp<user)
    {
        document.getElementById("res").style.color="green";
        document.getElementById("res").innerHTML="Congratulations you won";
        document.getElementById("im").src="images/happy.png"
    }
    else{
        document.getElementById("res").style.color="red";
        document.getElementById("res").innerHTML="Better Luck Next Time Computer Won";
        document.getElementById("im").src="images/sad.png"
    }
    }
}
}
function scissor() {

    var val = "Scissor";
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
    if(user !=5 && comp!=5){
        document.getElementById("com1").innerHTML=randomElement;
        document.getElementById("pla1").innerHTML=val;
    if (randomElement == "Paper") {
        user++;
        alert("you got point");
        
    }
    else if (val == randomElement) {
        alert("tie");
       
    }
    else {
        comp++;
        alert("Computer got point");
       
    }
    count++;
    document.getElementById("com").innerHTML=comp;
    document.getElementById("pla").innerHTML=user;
    if(user ==5 || comp==5)
    {
    if(comp<user)
    {
        document.getElementById("res").style.color="green";
        document.getElementById("res").innerHTML="Congratulations you won";
        document.getElementById("im").src="images/happy.png"
    }
    else{
        document.getElementById("res").style.color="red";
        document.getElementById("res").innerHTML="Better Luck Next Time Computer Won";
        document.getElementById("im").src="images/sad.png"
    }
    }
}
}