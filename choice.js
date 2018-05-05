
var i = 0;
var QuestionNo = 0;
var selectedOption = "";
var selectedOptionArray = [];
var score = 0;
var MyJSON = {};
var toughMYJSON = [
  {
    "question": "What is the scientific name of tulsi",
    "option1": "Ocimum tenuiflorum",
    "option2": "Azadirachta indica",
    "option3": "Ficus religiosa",
    "option4": " Ficus benghalensis",
    "answer": "option1"
  },
  {
    "question": "what is theme of book history of loss of vietnam by confucian leader phan boi chau?",
    "option1": "loss of sovereignity",
    "option2": "severing ties with china",
    "option3": "french colonialisation",
    "option4": "anti-colonial movement in vietnam",
    "answer": "option1,option2"
  },
  {
    "question": "From where did India get sugarcane plant at first?",
    "option1": "Japan",
    "option2": "China",
    "option3": "Indonesia",
    "option4": "None",
    "answer": "option2"
  },
  {
    "question": "What is chemical formula of sucrose?",
    "option1": "C6H12O6",
    "option2": "CH3COCH3",
    "option3": "C2H5OH",
    "option4": "C12H22O11",
    "answer": "option4"
  },
  {
    "question": "what is pen name of charlotte bronte",
    "option1": "Currer Bell",
    "option2": "Coralie",
    "option3": "Curzio Malaparte",
    "option4": "Cousin Annie",
    "answer": "option1"
  },

]

var easyMyJSON = [
  {
    "question": "Which is the highest mountain peak in the world?",
    "option1": "himalayas",
    "option2": "mount k2",
    "option3": "mount everest",
    "option4": "mount cook",
    "answer": "option3"
  },
  {
    "question": "What is the tip of cellbody in neuron known as?",
    "option1": "dendrite",
    "option2": "mycelin sheath",
    "option3": "axon",
    "option4": "nerve ending",
    "answer": "option1"
  },
  {
    "question": "Which part of brain controls voluntary action? ",
    "option1": "mid brain",
    "option2": "hind brain",
    "option3": "fore brain",
    "option4": "none ofthese",
    "answer": "option1"
  },
  {
    "question": "Who sung vandhe mataram ?",
    "option1": "Bankim chandra chatterjee",
    "option2": "Abanindranath tagore",
    "option3": "Lala lajput rai",
    "option4": "None",
    "answer": "option1"
  },
  {
    "question": "Who is the master of health and family welfare?",
    "option1": "Arun jaitley",
    "option2": "Ravi Shankar Naidu",
    "option3": "Piyush Goyal",
    "option4": "Jagat Prakash Nadda",
    "answer": "option4"
  },]
var mediumMYJSON = [
  {
    "question": "Who found ball pen?",
    "option1": "J L Baird",
    "option2": "Petrache Poenaru",
    "option3": "Laszlo Biro",
    "option4": "Louis Pasteur",
    "answer": "option3"
  },
  {
    "question": "Who is author of book harry potter?",
    "option1": "Susanna Clarke",
    "option2": "Michael Scott",
    "option3": "Cornelia Funke",
    "option4": "J K Rowling",
    "answer": "option4"

  },
  {
    "question": "What is the currency of french indochina?",
    "option1": "rupee",
    "option2": "yen",
    "option3": "dollar",
    "option4": "piastre",
    "answer": "option4"
  },
  {
    "question": "which country of the world has largest hindu population after India?",
    "option1": "nepal",
    "option2": "mauritus",
    "option3": "Bangladesh",
    "option4": "srilanka",
    "answer": "option2"
  },
  {
    "question": "In which country teachers are paid more than other occupations?",
    "option1": "Luxemburg",
    "option2": "switzerland",
    "option3": "Germany",
    "option4": "none of these",
    "answer": "option1"
  },

]
var type = localStorage.getItem("gameType")

// to set the required level
if (type === 'easy') {
  MyJSON = easyMyJSON;

}
else if (type === 'medium') {
  MyJSON = mediumMYJSON;
}
else {
  MyJSON = toughMYJSON;
}

/**
 *Store multiple options 
 */
function check(element) {
  selectedOption = selectedOption + "," + element.id;
}

/**
 * Set the question and its options
 */
function setQuestion() {
  document.getElementById("question").innerHTML = MyJSON[QuestionNo].question;
  document.getElementById("optTxt1").innerHTML = MyJSON[QuestionNo].option1;
  document.getElementById("optTxt2").innerHTML = MyJSON[QuestionNo].option2;
  document.getElementById("optTxt3").innerHTML = MyJSON[QuestionNo].option3;
  document.getElementById("optTxt4").innerHTML = MyJSON[QuestionNo].option4;
}


/**
 * Check whether the answer is correct or wrong except for last one
 */
function checkAnswer() {
  if (selectedOption === MyJSON[QuestionNo].answer) {
    score = score + 1;
    disableRadio();
    QuestionNo = QuestionNo + 1;
  }
  //wrong one
  else if (selectedOption !== MyJSON[QuestionNo].answer) {
    disableRadio()
    QuestionNo = QuestionNo + 1;
  }
  else {
    QuestionNo = QuestionNo + 1;
  }
}


/**
 * to disable the options selected for previous question
*/
function disableRadio() {
  if (selectedOption !== "") {
    for (i = 0; i < selectedOptionArray.length; i++) {
      selectedOption = "";
      document.getElementById(selectedOptionArray[i]).checked = false;
    }
  }
}


/**
 * if next is clicked,the function checks if the answer is correct or wrong
 * if answer is correct,score is incremented and is moved to next question clearing the previous ones answer
 * if answer is wrong or nothing is selected,it moves to next question and clears the previous answer if selected
 */
function next() {
  //to make it equal to the given answer by removing the first character (,)
  selectedOption = selectedOption.substr(1);
  //to split the answer into parts to enable checking of each correct answer 
  selectedOptionArray = selectedOption.split(",");
  //change the button from next to finish during the last question
  if (QuestionNo == MyJSON.length - 2) {
    document.getElementById("nextText").innerHTML = "FINISH";
  }
  //to excecute all the questions ,check them and move to next question
  if (QuestionNo < MyJSON.length - 1) {
    checkAnswer();
    //to go to next question
    setQuestion();

  }
  //to check last question and give the final score
  else if (QuestionNo === MyJSON.length - 1) {
    checkAnswer();
    //to make the questions disappear from the screen
    createRespage()
  }
}


/**
 * to go to homepage
 */
function reload() {
  window.location.href = "file:///home/clustrex-1/Desktop/JANANI/multiple-choice/home.html";
}


/**
 * to hide the question and its option and next button and give the final score
 */
function createRespage() {
  //to hide question and its options
  var a = document.getElementById("mcq");
  a.style.display = "none";
  //to hide next button
  var b = document.getElementById("next");
  b.style.display = "none";
  //to show lastpage
  var b = document.getElementById("lastPage");
  b.style.display = "block";
  //to give the final score
  var x = MyJSON.length;
  document.getElementById("Score").innerText = "score:" + score + " out of " + x + "\nwell done!!! game over!!!";
}