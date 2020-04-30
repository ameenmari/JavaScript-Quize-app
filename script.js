

let shuffledQuestions , currentQuestionIndex


const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-button')



const questionContainerElement=document.getElementById('question-container');
const startBtn=document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
startBtn.addEventListener('click', startGame);

nextButton.addEventListener('click',()=>{

 
    currentQuestionIndex++;

    setNextQuestion()

})

function startGame(){
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
shuffledQuestions=questions.sort(()=> Math.random() - .5);
currentQuestionIndex=0;

setNextQuestion();

}

function setNextQuestion(){

    resetState();
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question){

    questionElement.innerText=question.question

question.answers.forEach(answer=>{


    //    console.log(answer.text)
    
    const button =  document.createElement('button')
    button.innerText= answer.text;
    button.classList.add('btn')



if(answer.correct){
    button.dataset.correct=answer.correct; 
}

button.addEventListener('click',selectAnswer);
answerButtonsElement.appendChild(button)

})}


function resetState(){

 clearStatusClass(document.body);
nextButton.classList.add('hide')
while(answerButtonsElement.firstChild){

answerButtonsElement.removeChild
(answerButtonsElement.firstChild)

}
}

function selectAnswer(e){


    const selectedButton=e.target;
    const correct=selectedButton.dataset.correct;

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    })



    if(shuffledQuestions.length > currentQuestionIndex + 1){

        nextButton.classList.remove('hide')
    }else{

        startBtn.innerText='Restart'
        startBtn.classList.remove('hide')
    
    }

}

function setStatusClass(element ,correct){

    clearStatusClass(element)

if(correct){

    element.classList.add('correct')


}else{

    element.classList.add('wrong')
}

}

function clearStatusClass(element){

element.classList.remove('correct')
element.classList.remove('wrong')

}

const questions=

[
   { 
        question:' what is 2+2 ?',  
        answers:[{text:'4',correct:true},{text:'22', correct: false}]
   },

   { 
    question:' what is 68-8 ?',  
    answers:[{text:'16',correct:false},{text:'60', correct:true}]
},



{ 
    question:' what is 8+8 ?',  
    answers:[{text:'16',correct:true},{text:'32', correct: false},{text:'16',correct:false},{text:'60', correct:false}]
},

{ 
    question:' what is 12+8 ?',  
    answers:[{text:'20',correct:true},{text:'32', correct: false},{text:'4',correct:false},{text:'22', correct: false}]
},


{ 
    question:' what is 88+8 ?',  
    answers:[{text:'16',correct:false},{text:'96', correct: true},{text:'20',correct:false},{text:'32', correct: false}]
},









];