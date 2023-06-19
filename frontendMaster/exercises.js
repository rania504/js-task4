//function excercise
function multiply(x,y) {
    return x*y;
}
multiply(5,3);


const yell=function(saying){
    return saying.toUpperCase()
}
yell("hello")

function longerThan(a1,a2){
    return a1.length > a2.length
}

//arrow function exercise
const devide=(x,y)=> x/y;

const whisper=(text)=>{ 
    const lc=text.toLowerCase();
    console.log(lc);
    return lc;
}

const shorterThan=(a1,a2)=> a1.length < a2.length;


//event exercise
let truebutton=optionButtons[0];
truebutton.addEventListener("click",(event)=>{
    truebutton.textContent=truebutton.textContent.toUpperCase();
});


let h1=document.getElementsByTagName("h1");
h1.addEventListener("mouseover",()=>{
    h1.textContent="hovering";
});
h1.addEventListener("mouseout",()=>{
    h1.textContent="Quiz.js";
});



//conditional exercise
let firstname="rania";
let lastname="khalifa";
if(firstname.length>lastname.length){
    console.log(firstname,"is longer than",lastname);
}
else{
    console.log(lastname,"is longer",firstname);
}


function isempty(array){
    if(array.length===0){
        return true;
    }
    else{
        return false;
    }
}


//map &filter exercise
const names=spices.map(spice => spice.name);

const endInY=spices.filter(s => s.nickname.endsWith("y"))