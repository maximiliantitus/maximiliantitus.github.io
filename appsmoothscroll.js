function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }
    function ease(t, b, c, d) {
	return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    };
    requestAnimationFrame(animation);
}


function reportCoverSize() {
    var cover = document.querySelector(".cover");
    var targetPosition = cover.getBoundingClientRect().bottom;
    var topmath = targetPosition/7.5;
    var topsection = document.querySelector(".topsection");
    var middlesection = document.querySelector(".middlesection");
    var bottomsection = document.querySelector(".bottomsection");
    var scrolldown = document.querySelector(".scrolldown");
    var icon = document.querySelector(".icon");
    topsection.style.top = String(topmath) + "%";
    middlesection.style.top = String(topmath+100) + "%";
    bottomsection.style.top = String(topmath+200) + "%";  
    scrolldown.style.top = String(topmath-45) + "%";
    icon.style.top = String(topmath-43) + "%";
}

window.onresize = reportCoverSize;
window.onload = reportCoverSize;

var logo = document.querySelector(".logo");
logo.addEventListener('click', function(){
    smoothScroll('.mainsection',800);
    document.querySelector('.morecontainer').classList.remove('active');
});

var beatpad = document.querySelector('.topsectionbutton');
beatpad.addEventListener('click', function(){
    smoothScroll('.topsection',800);
    document.querySelector('.morecontainer').classList.remove('active');
});


var shoecustomizer = document.querySelector('.bottomsectionbutton');
shoecustomizer.addEventListener('click', function(){
    smoothScroll('.bottomsection',800);
    document.querySelector('.morecontainer').classList.remove('active');
});


var sputnik = document.querySelector('.middlesectionbutton');
sputnik.addEventListener('click', function(){
    smoothScroll('.middlesection',800);
    document.querySelector('.morecontainer').classList.remove('active');
});



var moreButton = document.querySelector('.morebutton');
moreButton.addEventListener("click", function(){
   document.querySelector('.morecontainer').classList.toggle('active');
});
