$(document).ready(function() {


	//const euros = [29.76, 41.85, 46.5];
//const sum = euros.reduce((total, amount) => total + amount); 
//console.log(sum) // 118.1

//Gets random #'s'
var chosenNumScore = Math.floor((Math.random() * 120) + 19);
var chosenCrysScoreOne = Math.floor((Math.random() * 12) + 1);
var chosenCrysScoreTwo = Math.floor((Math.random() * 12) + 1);
var chosenCrysScoreThree = Math.floor((Math.random() * 12) + 1);
var chosenCrysScoreFour = Math.floor((Math.random() * 12) + 1);

$( "#chosenNumId" ).text( chosenNumScore )

//Arrays random #'s will be pushed into'
//var numScoreArray = []
//var numCrysScoreArray = []
var numTotal = [0]
var numSum = numTotal.reduce((total, amount) => total + amount);

function numSumFunction(total, amount) {
	numSum = numTotal.reduce((total, amount) => total + amount);
	$("#totalId").text(numSum);
	// return total + amount
	//console.log(total)
	//console.log(amount)
}
//Win/Loss Counters
var initialWin = 1
var initialLose = 1
//Numbers to be added
//var numJoin = []

$( "#totalId" ).text( numTotal )
$( "#winId" ).text( "0" )
$( "#loseId" ).text( "0" )

function callFunction(previousValue, currentValue){
	return previousValue + currentValue
}


//Initializes Game
function startGame() {
	 chosenNumScore = Math.floor((Math.random() * 120) + 19);
	 chosenCrysScoreOne = Math.floor((Math.random() * 12) + 1);
	 chosenCrysScoreTwo = Math.floor((Math.random() * 12) + 1);
	 chosenCrysScoreThree = Math.floor((Math.random() * 12) + 1);
	 chosenCrysScoreFour = Math.floor((Math.random() * 12) + 1);
	//var numScoreArray = []
	//var numCrysScoreArray = []
	 numTotal = [0]
	 $( "#totalId" ).text( numTotal )
	 $( "#chosenNumId" ).text( chosenNumScore )
	 numSum = 0
}

//function getSum(total, num) {
    //return total + num;
//}




   		////First Button CLick Tests
     $( "#crystalIdOne"  ).on("click" , function() {
     	numTotal.push(chosenCrysScoreOne);
     	numSumFunction()
     	 WinLossTest()
     	//callFunction(previousValue, currentValue)
        //$("#totalId").text(numTotal);
        ////console.log(eval(numTotal))
        //console.log("Hello World")
        //inputFunc =[eval(numJoin)];

   });

       $( "#crystalIdTwo" ).on("click" , function() {
       	numTotal.push(chosenCrysScoreTwo);
       	numSumFunction()
       	 WinLossTest()
       // $("#totalId").text(numTotal);
       // console.log(eval(numTotal))
       // console.log("Hello World")
        //inputFunc =[eval(numJoin)];

   });

         $( "#crystalIdThree" ).on("click" , function() {
         numTotal.push(chosenCrysScoreThree);
         numSumFunction()
          WinLossTest()
        //$("#totalId").text(numTotal);
       // console.log(eval(numTotal))
       // console.log("Hello World")
        //inputFunc =[eval(numJoin)];

   });

       $( "#crystalIdFour" ).on("click" , function() {
         numTotal.push(chosenCrysScoreFour);
         numSumFunction()
          WinLossTest()
      //$("#totalId").text(numTotal);
     // console.log(eval(numTotal))
     // console.log("Hello World")
        //inputFunc =[eval(numJoin)];
  });


       function WinLossTest() {
       	 if (numSum == chosenNumScore) {
		      $( "#winId" ).text( initialWin++ )
		      alert("Winner")
		        // Resets the game
		        startGame();
		   }

		    if (numSum > chosenNumScore) {
		      $( "#loseId" ).text( initialLose++ )
		      alert("Loser")
		        // Resets the game
		        startGame();
		   }

		   console.log(numTotal, chosenNumScore, numSum)	
       }

       //Win Situation
       console.log(numTotal.reduce(numSumFunction))
       console.log(chosenNumScore)
       console.log(numTotal)
 if (numTotal.reduce(callFunction) == chosenNumScore) {
      $( "#winId" ).text( initialWin++ )
        // Resets the game
        startGame();
   }
   //Lose Situation
   if (numTotal.reduce(callFunction) > chosenNumScore) {
      $( "#loseId" ).text( initialLose++ )
        // Resets the game
        startGame();
   }

 })

 //


         //Second Button Click Tests
       // $( "#crystalIdOne" ).click(function() {
		// console.log("Hello World");
		//});

       // $( "#crystalIdTwo" ).click(function() {
		// console.log("Hello World");
		//});

       // $( "#crystalIdThree" ).click(function() {
		// console.log("Hello World");
		//});

        // $( "#crystalIdFour" ).click(function() {
         //	numTotal.push(chosenCrysScoreFour)
			//console.log("Hello World");
		//	$("#totalId").text(eval(numTotal) )
		//});







