const quizDB =  [
    {
      question  : "Q1: What is the name of Draco Malfoy's son?",
       a  : "Scorpius",
       b  : "Lucius",
       c  : "Diego",
       d  : "Severus",
       e  : "Dane",                    
       ans : "ans1"
    },
    
    {
      question  : "Q2:What creature does Dumbledore have as a pet?",
       a  : "Efreet",
       b  : "Fey",
       c  : "Troll",
       d  : "Phoenix",
       e  : "Basilisk",                    
       ans  : "ans4"
    },
    
    {
      question  : "Q3:What is Voldemort's final horcrux?",
       a  : "A mirror",
       b  : "A snake",
       c  : "A brooch",
       d  : "Harry Potter",
       e  : "A violin",                    
       ans  : "ans2"
    },
    
    {
      question  : "Q4:Who takes over as headmaster of Hogwarts after Dumbledore's death?",
       a  : "Voldemort",
       b  : "Narcissa Black",
       c  : "Professor Trelawny",
       d  : "Delores Umbridge",
       e  : "Professor Snape",                    
       ans  : "ans5"
    },
    
    {
      question  : "Q5:Who killed Deatheater Antonin Dolohov during the Battle of Hogwarts?",
       a  : "Professor Flitwick",
       b  : "Ron Weasley",
       c  : "Falling Debris",
       d  : "Hermione Granger",
       e  : "A Troll",                    
       ans  : "ans1"
    }
  ];

  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const option5 = document.querySelector('#option5');
  const submit = document.querySelector('#submit');

  const answers = document.querySelectorAll('.answer');

  const showScore = document.querySelector("#showScore");


  let questionCount = 0;
  let score = 0;

  const loadQuestion = () => {

   // console.log(quizDB[0]);

    const questionList =quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    option5.innerText = questionList.e;

  }

  loadQuestion();

  const getcheckedAnswer = () => {
      let answer;
      answers.forEach((curAnsElem) =>{
          if(curAnsElem.checked){
              answer = curAnsElem.id;
          }
       
      });

      return answer;

  };

  const deselectAll = () =>{
      answers.forEach((curAnsElem) => curAnsElem.checked = false);
  }
  
  submit.addEventListener('click', () => {
      const checkedAnswer = getcheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You scored ✌ ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again<button>`

        showScore.classList.remove('scoreArea')
    }
  });