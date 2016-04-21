var score = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scoreCounter = score.length;
var scoreSorter = score.sort();
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (var i = 0; i <= scoreCounter; i++) {
    if (score[i] >= 91){
      gradeA++;
    }else if (score[i] >= 81){
      gradeB++;
    }else if (score[i] >= 71){
      gradeC++;
    }else if (score[i] >= 61){
      gradeD++;
    } else if (score[i] >= 61){
      gradeF++;
    }

};
//How many of each

    console.log("A's", gradeA);
    console.log("B's", gradeB);
    console.log("C's", gradeC);
    console.log("D's", gradeD);
    console.log("F's", gradeF);


console.log("Scores", scoreSorter);

//Find the Lowest grade
console.log("Lowest Score", scoreSorter[0]);


// Find the highest grade 
console.log("Highest Score", scoreSorter[scoreSorter.length - 1]);

                   