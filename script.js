let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex=slideIndex+1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

// places slider

const initSlider=()=>{
  const imagelist =document.querySelector(".slide-wrapper .img-list");
  const slideButtons=document.querySelectorAll(".slide-wrapper .slidebutton");

  slideButtons.forEach(Button =>{
    Button.addEventListener("click",()=>{
      const direction =Button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imagelist.clientWidth*direction;
      imagelist.scrollBy({left: scrollAmount, behavior:"smooth"});
    });
  });  
}

window.addEventListener("load",initSlider)


// Blog part
function SubForm (){
  $.ajax({
    url:"https://api.apispreadsheets.com/data/8eC0oR6rCLEqZl0a/",
    type:"post",
    data:$("#myForm").serializeArray(),
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert("There was an error :(")
    }
  });
}


    
// Popup of kannada phrases
        document.getElementById("button").addEventListener("click",function(){
            document.querySelector(".popup").style.display="flex";
            document.body.style.position = 'fixed';
        })
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup").style.display="none";
            document.body.style.position = '';
        })


//
const username = document.querySelector('.username');

const email = document.querySelector('.email');

const message = document.querySelector('.message');

const button = document.querySelector('.btn');

username.addEventListener('click', ()=>{
    username.style.backgroundColor='lime';
})

username.addEventListener('blur', ()=>{
    username.style.backgroundColor='white';
})

email.addEventListener('click', ()=>{
    email.style.backgroundColor='lime';
})

email.addEventListener('blur', ()=>{
    email.style.backgroundColor='white';
})

message.addEventListener('click', ()=>{
    message.style.backgroundColor='lime';
})

message.addEventListener('blur', ()=>{
    message.style.backgroundColor='white';
})

button.addEventListener('click', (event)=>{

    if(username.value == "" || email.value == "" || message.value == ""){
        alert("Form can't be empty");
        event.preventDefault();
    }
})
