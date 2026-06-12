
let clicked = false;
function changeText(){
    let button= document.getElementById("myBtn");
if(clicked===false){
    document.body.style.backgroundColor="#000080 " ;
    document.body.style.color = "white";
    clicked = true;
}else{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    clicked = false;
}
}