var btn = document.getElementById("btn");
var output = document.getElementById("outputtext");

var number = Math.floor(Math.random()*100);
console.log(number);

btn.addEventListener("click" , function(){
  var input = document.getElementById("userInput").value;
  if(input == number){
    output.innerHTML = "Siz to`g`ri son topdingiz ${number}";
  }else if (input < number){
    output.innerHTML="Siz noto`g`ri son topdingiz biroz son qo`shing";
  }else if (input > number){
    output.innerHTML = "Siz noto`g`ri son topdingiz biroz son kamaytiring";
  }   
  }
);