
var MyJSON = [
    {
        "question": "Which is the highest mountain peak in the world?",
        "option1": "himalayas",
        "option2": "mount k2",
        "option3": "mount everest",
        "option4": "mount cook",
        "answer": "option31"
    },
    {
        "question": "What is the tip of cellbody in neuron known as?",
        "option1": "dendrite",
        "option2": "mycelin sheath",
        "option3": "axon",
        "option4": "nerve ending",
        "answer": "option31"
    },
    {
        "question": "Which part of brain controls voluntary action? ",
        "option1": "mid brain",
        "option2": "hind brain",
        "option3": "fore brain",
        "option4": "none ofthese",
        "answer": "option31"
    },
    // {
    //     "question": "Who sung vandhe mataram ?",
    //     "option1": "Bankim chandra chatterjee",
    //     "option2": "Abanindranath tagore",
    //     "option3": "Lala lajput rai",
    //     "option4": "None",
    //     "answer": "option11"
    // },
    // {
    //     "question": "Who is the master of health and family welfare?",
    //     "option1": "Arun jaitley",
    //     "option2": "Ravi Shankar Naidu",
    //     "option3": "Piyush Goyal",
    //     "option4": "Jagat Prakash Nadda",
    //     "answer": "option41"
    // },
    // {
    //     "question": "Who found ball pen?",
    //     "option1": "J L Baird",
    //     "option2": "Petrache Poenaru",
    //     "option3": "Laszlo Biro",
    //     "option4": "Louis Pasteur",
    //     "answer": "option31"
    // },
    // {
    //     "question": "From where did India get sugarcane plant at first?",
    //     "option1": "Japan",
    //     "option2": "China",
    //     "option3": "Indonesia",
    //     "option4": "None",
    //     "answer": "option21"
    // },
    // {
    //     "question":"What is the currency of french indochina?",
    //     "option1":"rupee",
    //     "option2":"yen",
    //     "option3":"dollar",
    //     "option4":"piastre",
    //     "answer":"option41"
    // },
    //     { 
    //      "question":"which country of the world has largest hindu population after India?",
    //      "option1":"nepal",
    //      "option2":"mauritus",
    //      "option3":"Bangladesh",
    //      "option4":"srilanka",
    //      "answer":"option21"
    //     },
    //     {
    //       "question":"In which country teachers are paid more than other occupations?",
    //       "option1":"Luxemburg",
    //       "option2":"switzerland",
    //       "option3":"Germany",
    //       "option4":"none of these",
    //       "answer":"option11"
    //     },
       
]
var questionNo = 0;
console.log("i am in")
var selectedOption;
var score = 0; 
var x="score:"+score;
x.style.textAlign="right";
function check(element) {
    selectedOption = element.id;
}


function next() {
    

    
   if(questionNo == MyJSON.length-2){
     document.getElementById("next").innerHTML="FINISH";
   }
    if(questionNo<MyJSON.length-1){
    if (selectedOption === MyJSON[questionNo].answer) {
        score = score + 1;
        alert("answer is correct  score:" + score);
        document.getElementById(selectedOption).checked = false;
        selectedOption="";
        questionNo = questionNo + 1;

    }
    else {
        alert("answer is wrong score:"+score);
        console.log(selectedOption)
        document.getElementById(selectedOption).checked = false;
         selectedOption="";
         questionNo = questionNo + 1;
    }
}
    else{
        alert("game over!!!");
    }
    
    console.log("value", document.getElementById("option1"))
    document.getElementById("question").innerHTML = MyJSON[questionNo].question;
    document.getElementById("option1").innerHTML = MyJSON[questionNo].option1;
    document.getElementById("option2").innerHTML = MyJSON[questionNo].option2;
    document.getElementById("option3").innerHTML = MyJSON[questionNo].option3;
    document.getElementById("option4").innerHTML = MyJSON[questionNo].option4;

}
