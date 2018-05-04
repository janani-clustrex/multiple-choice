
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
        "option2":"Azadirachta indica" ,
        "option3":"Ficus religiosa",
        "option4":" Ficus benghalensis",
          "answer":"option11"
      },
      {
         "question":"what is theme of book history of loss of vietnam by confucian leader phan boi chau?",
          "option1":"loss of sovereignity",
          "option2":"severing ties with china",
           "option3":"french colonialisation",
           "option4":"anti-colonial movement in vietnam",
           "answer":"option11,option21"
      },
        { "question": "From where did India get sugarcane plant at first?",
        "option1": "Japan",
        "option2": "China",
        "option3": "Indonesia",
        "option4": "None",
        "answer": "option21"
    },
    {
       "question":"What is chemical formula of sucrose?",
       "option1":"C6H12O6",
       "option2":"CH3COCH3",
       "option3":"C2H5OH",
       "option4":"C12H22O11",
       "answer":"option41"
    },
    {
        "question":"what is pen name of charlotte bronte",
        "option1":"Currer Bell",
        "option2":"Coralie",
        "option3":"Curzio Malaparte",
        "option4":"Cousin Annie",
        "answer":"option11"
    },

    ]

var easyMyJSON = [
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
        "answer": "option11,option31"
    },
    {
        "question": "Which part of brain controls voluntary action? ",
        "option1": "mid brain",
        "option2": "hind brain",
        "option3": "fore brain",
        "option4": "none ofthese",
        "answer": "option11"
    },
    {
        "question": "Who sung vandhe mataram ?",
        "option1": "Bankim chandra chatterjee",
        "option2": "Abanindranath tagore",
        "option3": "Lala lajput rai",
        "option4": "None",
        "answer": "option11"
    },
    {
        "question": "Who is the master of health and family welfare?",
        "option1": "Arun jaitley",
        "option2": "Ravi Shankar Naidu",
        "option3": "Piyush Goyal",
        "option4": "Jagat Prakash Nadda",
        "answer": "option41"
    },]
    var mediumMYJSON=[
    {
        "question": "Who found ball pen?",
        "option1": "J L Baird",
        "option2": "Petrache Poenaru",
        "option3": "Laszlo Biro",
        "option4": "Louis Pasteur",
        "answer": "option31"
    },
    {
        "question":"Who is author of book harry potter?",
        "option1":"Susanna Clarke",
        "option2":"Michael Scott",
        "option3":"Cornelia Funke",
        "option4":"J K Rowling",
         "answer":"option41"

    },
    {
        "question": "What is the currency of french indochina?",
        "option1": "rupee",
        "option2": "yen",
        "option3": "dollar",
        "option4": "piastre",
        "answer": "option41"
    },
    {
        "question": "which country of the world has largest hindu population after India?",
        "option1": "nepal",
        "option2": "mauritus",
        "option3": "Bangladesh",
        "option4": "srilanka",
        "answer": "option21"
    },
    {
        "question": "In which country teachers are paid more than other occupations?",
        "option1": "Luxemburg",
        "option2": "switzerland",
        "option3": "Germany",
        "option4": "none of these",
        "answer": "option11"
    },

]
var type = localStorage.getItem("gameType")
if(type === 'easy') {
    MyJSON = easyMyJSON;
    
}
else if(type === 'medium') {
    MyJSON = mediumMYJSON;
}
else {
    MyJSON = toughMYJSON;
}
console.log(MyJSON)
function check(element) {
    selectedOption = selectedOption + "," + element.id;

    //document.getElementsById("option").multiple = true;

}

function setQuestion() {
            document.getElementById("question").innerHTML = MyJSON[0].question;
            document.getElementById("option1").innerHTML = MyJSON[0].option1;
            document.getElementById("option2").innerHTML = MyJSON[0].option2;
            document.getElementById("option3").innerHTML = MyJSON[0].option3;
            document.getElementById("option4").innerHTML = MyJSON[0].option4;
}
function disableRadio() {
    // if nothing is selcted and next is clicked
    if (selectedOption === "") {
        QuestionNo = QuestionNo + 1;

    }
    else {
        for (i = 0; i < selectedOptionArray.length; i++) {
            selectedOption = "";
            document.getElementById(selectedOptionArray[i]).checked = false;
        }
        QuestionNo = QuestionNo + 1;

    }
}
function next() {
    selectedOption = selectedOption.substr(1);
    selectedOptionArray = selectedOption.split(",");

    //checking questions except for last one
    //change the button from next to finish
    console.log(QuestionNo);
    if ( QuestionNo == MyJSON.length - 2) {
        document.getElementById("next").innerHTML = "FINISH";
    }
    //to excecute all the questions and terminate after  it 
    if (QuestionNo < MyJSON.length - 1) {

        //to check whether the answer is correct or wrong except for last one
        if (selectedOption === MyJSON[QuestionNo].answer) {
            score = score + 1;
            disableRadio();
            
           
        }
        //wrong one
        else {
            disableRadio()
            

        }
       

            //to go to next question
            document.getElementById("question").innerHTML = MyJSON[QuestionNo].question;
            document.getElementById("option1").innerHTML = MyJSON[QuestionNo].option1;
            document.getElementById("option2").innerHTML = MyJSON[QuestionNo].option2;
            document.getElementById("option3").innerHTML = MyJSON[QuestionNo].option3;
            document.getElementById("option4").innerHTML = MyJSON[QuestionNo].option4;
        
    }
    //to check last question
    else if (QuestionNo === MyJSON.length - 1) {
        //correct one

        if (selectedOption === MyJSON[QuestionNo].answer) {
            score = score + 1;
            disableRadio()
            console.log(score);
           

        }
        //wrong one
        else {
            disableRadio()
           
        }//to make the questions disappear from the screen

        var a= document.getElementById("mcq");
        a.style.display = "none";
        var b= document.getElementById("next");
        b.style.display = "none";
        document.getElementById("Score").innerText = "score:" + score + "\nwell done!!! game over!!!";


    }

}

