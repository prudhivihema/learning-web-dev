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
// today(6-6-26)
let person = {
    name:"Hema",
    age: 18,
    skills: ["C++","HTML","CSS","JavaScript"],
    greet: function(){
        console.log("Hi I'm "+this.name+" and I'm "+this.age+" years old!");
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.skills[0]);
person.greet();

let btn = document.getElementById("toggleBtn");
btn.addEventListener("click",function(){
    console.log("Button was clicked!!");
})
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor="purple";
});
btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor="";
})

let form = document.getElementById("contactForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("messageInput").value;
    let formMessage = document.getElementById("formMessage");
    if(name===""||email===""||message===""){
        formMessage.innerText = "Please fill in all fields!!";
        formMessage.style.color="red";
    }else{
        formMessage.innerText = "Message sent successfully!!";
        formMessage.style.color = "green";
    }
})

