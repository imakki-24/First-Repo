var Inputans = require('readline-sync')
var score = 0
var Questions = ["Which character has a twin?", "Who was Monica-s first kiss?","How many sisters does Joey have?","How many times has Ross been married?","What nickname did Monica-s dad give her?",]


var options = ["A: Rachel , B: Phoebe ", "A: Chandler , B: Ross ", "A: 7 , B: 6 ", "A: 3 , B: 4 ", "A: Tiny Electronica , B: Little Harmonica "]

var Answers = ["B", "B", "A", "A", "B"]
var Answers1 = ["b", "b", "a", "a", "b"]
for(i=0;i<Questions.length;i++)
  {
    console.log(Questions[i])
     var input = Inputans.question(options[i]+" : ")
    if(input===Answers[i]||input===Answers1[i])
    { console.log("Correcct!!!")
      score++;
    }
    else
    {
      console.log("Ehhhhh!!!!!")
    }
    console.log("Your Current Score is " + score)
    console.log(" ")
  }

if(score === Questions.length)
{
  console.log(" Well Done !!! ")
}