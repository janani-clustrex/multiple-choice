
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
        "answer": "option11"
    },
    {
        "question": "Which part of brain controls voluntary action? ",
        "option1": "mid brain",
        "option2": "hind brain",
        "option3": "fore brain",
        "option4": "none ofthese",
        "answer": "option11"
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
    //     "question": "What is the currency of french indochina?",
    //     "option1": "rupee",
    //     "option2": "yen",
    //     "option3": "dollar",
    //     "option4": "piastre",
    //     "answer": "option41"
    // },
    // {
    //     "question": "which country of the world has largest hindu population after India?",
    //     "option1": "nepal",
    //     "option2": "mauritus",
    //     "option3": "Bangladesh",
    //     "option4": "srilanka",
    //     "answer": "option21"
    // },
    // {
    //     "question": "In which country teachers are paid more than other occupations?",
    //     "option1": "Luxemburg",
    //     "option2": "switzerland",
    //     "option3": "Germany",
    //     "option4": "none of these",
    //     "answer": "option11"
    // },

]
var questionNo = 0;
var selectedOption = "";
var score = 0;
function check(element) {
    selectedOption = element.id;
}


function next() {
    // if nothing is selcted and next is clicked
    if (selectedOption === "") {
        questionNo = questionNo + 1;
    }
    //checking questions except for last one
    //change the button from next to finish
        if (questionNo == MyJSON.length - 2) {
            document.getElementById("next").innerHTML = "FINISH";
        }
        //to excecute all the questions and terminate after  it 
        if (questionNo < MyJSON.length - 1) {
            //to check whether the answer is correct or wrong except for last one
            if (selectedOption === MyJSON[questionNo].answer) {
                score = score + 1;
                questionNo = questionNo + 1;
                console.log('selectedOption', selectedOption)
                document.getElementById(selectedOption).checked = false;
                selectedOption = "";
            }
            //wrong one
            else  {
                questionNo = questionNo + 1;
                document.getElementById(selectedOption).checked = false;
                selectedOption = "";
            }

            //to go to next question
            document.getElementById("question").innerHTML = MyJSON[questionNo].question;
            document.getElementById("option1").innerHTML = MyJSON[questionNo].option1;
            document.getElementById("option2").innerHTML = MyJSON[questionNo].option2;
            document.getElementById("option3").innerHTML = MyJSON[questionNo].option3;
            document.getElementById("option4").innerHTML = MyJSON[questionNo].option4;
        }
        //to check last question
        else if (questionNo == MyJSON.length - 1) {
            
            //correct one
            if (selectedOption === MyJSON[questionNo].answer) {
                score = score + 1;
                questionNo = questionNo + 1;
                document.getElementById(selectedOption).checked = false;
                selectedOption = "";

            }
            //wrong one
            else {
                questionNo = questionNo + 1;
                document.getElementById(selectedOption).checked = false;
                selectedOption = "";
            }//to make the questions disappear from the screen
            var x = document.getElementById("mcq");
            x.style.display = "none";
            var y = document.getElementById("next");
            y.style.display = "none";
        }

        else {
            //after last question,to give score
           
            document.getElementById("Score").innerText = "score:" + score + "\nwell done!!! try again";
            document.getElementById("Score").style.fontsize = "12em";
        }
    }

