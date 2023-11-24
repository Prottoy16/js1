

var numOfwon=0;
var numOflost=0;

 for(var i=0;i<5;i++){

    var guessNumber=parseInt(prompt("Enter a number between 1 to 5 : "));

    var randomNumber=Math.floor(Math.random()*5)+1;

    if(guessNumber==randomNumber){
        console.log("You have won");
        numOfwon++;
    }
    else {
        console.log("You have lost. Random number was : "+randomNumber);
        numOflost++;
    }

 }

 document.write("Total number of won is : "+numOfwon+"<br> ");
 document.write("Total number of lost is : "+numOflost);

