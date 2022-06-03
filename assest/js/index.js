//dark
var darks=document.querySelectorAll(".light .moon");
darks.forEach(function(ele){
    ele.addEventListener("click", function(){
        document.body.classList.toggle("dark");
        for(i=0;i<darks.length;i++){
            darks[i].classList.toggle("bx-sun");
        }
    })
})

// start
var aniEle=document.querySelectorAll(".scroll");
var move_top=document.querySelector(".move_icon");
function checkView(element){
    var rect=element.getClientRects()[0];
    var heightScr=window.innerHeight;   
    if(!(rect.bottom <0 || rect.top>heightScr)){
        element.classList.add("start");
    }
    else{
        element.classList.remove('start');
    }
}
function check(){
    aniEle.forEach(function(ele){
        checkView(ele);
    })
}
window.addEventListener("scroll", check);


//move top
function scrollFunc(){
    if (document.body.scrollTop>60 || document.documentElement.scrollTop >60){
        move_top.style.display="block";
        move_top.classList.add("move_up");
    }
    else{
        move_top.classList.remove("move_up");
    }
}

move_top.addEventListener("click", function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll", scrollFunc);


// công ty
    var slideIndex;
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) { 
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";  
        dots[slideIndex].className += " active";
        slideIndex++;
        if (slideIndex > slides.length - 1) {
          slideIndex = 0
        }    
        setTimeout(showSlides, 5000);
    }
    showSlides(slideIndex = 0);

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }


//tym
var tyms=document.querySelectorAll(".tym");
tyms.forEach(function(ele){
    ele.onclick=function(){
        ele.classList.toggle("bxs-heart");
        ele.classList.toggle("fa-solid");
    }
});


var mini_menu=document.querySelector(".mini_menu");
mini_menu.addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("app");
});

var aEles=document.querySelectorAll(".menu a");
aEles.forEach(function(ele){
    ele.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(`.${e.target.className} ul`).classList.toggle("expands");
        document.querySelector(`.${e.target.className} .plus`).classList.toggle("disable");
        document.querySelector(`.${e.target.className} .minus`).classList.toggle("able");
    });
});


var previous= document.querySelector(".opt_left");
var next=document.querySelector(".opt_right");
var index;   
function move_job() {
    var i;
    var jobs = document.querySelectorAll(".job_menu");
    var nots = document.querySelectorAll(".not");
    for (i = 0; i < jobs.length; i++) {
       jobs[i].style.display = "none";  
    }
    for (i = 0; i < nots.length; i++) { 
        nots[i].className = nots[i].className.replace(" move", "");
    }
    jobs[index].style.display = "flex";  
    nots[index].className += " move";
    if (index<=0){
        previous.style.display="none";
    }
    else{
        previous.style.display="block";
    }
    if (index>= jobs.length-1){
        next.style.display="none";
    }
    else{
        next.style.display="block";
    }
}
move_job(index = 0);
previous.addEventListener("click", function(){
    index--;
    move_job();
})
next.addEventListener("click", function(){
    index++;
    move_job();
})

function currentJob(n) {
    move_job(index = n);
  }


