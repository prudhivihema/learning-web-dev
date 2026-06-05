let name = "Hema";
let age = 18;
let islearning = true;
console.log(name);
console.log(age);
console.log(islearning);
function greet(){
    console.log("Hello! I'm "+name+" and I'm "+age+" years old!");
}
greet("Hema",18);
let darkMode = false;

function changeText(){
    let btn = document.getElementById("toggleBtn");
    if(darkMode === false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.innerText = "Light Mode";
        darkMode = true;
    }else{
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color="#333333";
        btn.innerText="Dark Mode";
        darkMode = false;
    }
}
let hobbies = ["coding","music","gaming"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies.length);
hobbies.push("reading");
console.log(hobbies[3]);
hobbies.pop();
console.log(hobbies);
for(let i=0;i<hobbies.length;i++){
    console.log(hobbies[i]);
}
let skills = ["C++","Problem Solving","HTML","CSS","JavaScript"];
let skillsList = document.getElementById("skillsList");
skills.forEach(function(skill){
    let li = document.createElement("li");
    li.innerText = skill;
    skillsList.appendChild(li);
})




