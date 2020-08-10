window.addEventListener("load",()=>{

// variables
const body=document.querySelector("body");
const slider=document.querySelector(".line");
const mouse=document.querySelector(".mouse");
const keyb=document.querySelector(".keyb");
const cursor=document.querySelector(".cursor");
const mbtn=document.querySelectorAll(".mbtns button")
const cords=document.querySelectorAll(".axis");
const rspace=document.querySelector(".rspace");
var rightmenu=document.querySelector(".rmenu");
const error=document.querySelector(".error");
const input=document.querySelector(".kbtns input");
const kinfo=document.querySelectorAll(".kinfo");
const mboard=document.querySelector(".mboard");
const kboard=document.querySelector(".kboard");









getcord();



// eventlistners
keyb.addEventListener("click", ()=>{
  slider.style.transform="translateX(100%)";
  keyb.style.background="#D6F1FB";
    mouse.style.background="#EFF3FB";
    mboard.style.transform="translateX(-100%)";
    kboard.style.transform="translateX(0%)";

})


mouse.addEventListener("click", ()=>{
  slider.style.transform="translateX(0%)";
  mouse.style.background="#D6F1FB";
    keyb.style.background="#EFF3FB";
    mboard.style.transform="translateX(0%)";
kboard.style.transform="translateX(100%)";
})




mbtn.forEach((item, i) => {
item.addEventListener("click",()=>{
  switch (i) {
    case 0:
    cursor.style.backgroundImage='url("resource/circle.png")';
    break;
    case 1:
    cursor.style.backgroundImage='url("resource/ironman.png")';
    break;
    case 2:
    cursor.style.backgroundImage='url("resource/shit.png")';
    break;
      }
    getcursor();
    body.style.cursor='none';
    clear();
  })
});

window.addEventListener("contextmenu",(e)=>{
e.preventDefault();
rightmenu.style.display="block";
if(e.pageX>1210)
{
var x = e.pageX - 337;
rightmenu.style.left= x + 'px';
}else{

  rightmenu.style.left=e.pageX + 'px';
 }
   rightmenu.style.top=e.pageY + 'px';
   setTimeout(rmenugone,2000);
});

window.addEventListener("click",()=>{
rmenugone();
});


input.addEventListener("keyup",(e)=>{
console.log(e);
var regi=/^[a-zA-X0-9\.-]$/;
error.style.color="#212121";
if(input.value==""){
  error.style.color="red";
  error.innerHTML="Enter any one letter";
}else {
  if(regi.test(input.value))
  {
    error.style.color="green";
    error.innerHTML="Valid!!";
   kinfo[0].innerHTML="Key : "+input.value;
   kinfo[1].innerHTML="KeyCode : "+e.keyCode;
  }else {
    error.style.color="red";
    error.innerHTML="Enter only one letter";
  }
}


});


// function

function getcursor(){
  window.addEventListener("mousemove",(e)=>{
  cursor.style.top=e.pageY + 'px' ;
  cursor.style.left=e.pageX + 'px' ;

  });
}


function getcord() {
  window.addEventListener("mousemove",(e)=>{
  cords[1].innerHTML="Y-Axis : "+ e.pageY ;
  cords[0].innerHTML= "X-Axis : "+ e.pageX ;
});
}

function clear(){
  mbtn.forEach((item, i) => {
    item.style.cursor='none';
    cursor.style.display="block";
    mouse.style.cursor='none';
    keyb.style.cursor='none';
      slider.style.cursor='none';

  });
}

function rmenugone(){
  rightmenu.style.display="none";
}

// this is end
});
