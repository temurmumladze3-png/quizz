fetch("./questions.json")
.then((data)=>data.json())
.then((data)=>{
    setTimeout(()=>{
questions=[...data];
    renderQuestion();

    },2000)
   


})

let questions=[
    
]
const container=document.querySelector(".container")

const options=document.querySelector(".options")
const h2=document.querySelector("h2")
const btn=document.getElementById("next-btn")
let curentindex=0
let currentscore=0
const score=document.getElementById("score")
function renderQuestion(){
    options.innerHTML=""
    btn.disabled=true;
    h2.textContent=questions[curentindex].question;
for(let i=0;i<questions[curentindex].options.length;i++){


const div=document.createElement('div')
div.classList.add('option')
const radio=document.createElement("input");
radio.type=`radio`
 radio.name = `question-${curentindex}`
//radio.id=`question-${curentindex}-${i}`
radio.value=questions[curentindex].options[i]
radio.addEventListener("input",()=>{
    btn.disabled=false;
    
    const labels=[...document.querySelectorAll('label')]
    labels.forEach(l=>{
        l.classList.remove('active')
    })
    label.classList.add("active")
})
const label=document.createElement('label')
//label.htmlFor=`question-${curentindex}-${i}`;
label.textContent=questions[curentindex].options[i]
//div.append(radio,label)
label.append(radio)
//div.append(label)
options.append(label)}}


btn.addEventListener("click",()=>{
    const chosenOption=document.querySelector('input[type="radio"]:checked')
    if(chosenOption===null) return;
    const chosenValue=chosenOption.value;
    if(chosenValue===questions[curentindex].correct){
currentscore++
        score.textContent= `your score: ${ currentscore} `
    }
    curentindex++;
    if(curentindex<questions.length){
        renderQuestion()
    }else{
        quizComplete()
    }
    
})
function quizComplete(){
    container.innerHTML=`
    <h2>Quiz Completed</h2>
    
    <p>your score is ${currentscore} / ${questions.length}
    <button type="button" onclick="location.reload()">Restart Quiz!</button>`
}