window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
    }
};

var selected = document.querySelector(".selected");
var optionsContainer = document.querySelector(".box-border");
var optionsList = document.querySelector(".option");
var idsound1 = document.getElementById('Sound-1');
var recording = "off";
var playing ="off";
var metronome = "off";
var beatpad;

selected.addEventListener("click", function(){
   optionsContainer.classList.toggle("active"); 
   selected.classList.toggle("active");
});


document.getElementById("metronome").addEventListener("click", function(){
    var id = document.getElementById("metronome").src;
    var idsrc = id.substr(length-14,14);
    if(metronome==="off"){
        metronome="on";
        document.getElementById("metronome").src = "images/metronome2.png";
    }
    else{
        metronome="off";
        document.getElementById("metronome").src = "images/metronome1.png";
    }
});

var beatpad_01 = new Audio();
beatpad_01.src="Sound_0.wav";
var beatpad_02 = new Audio();
beatpad_02.src="Sound_0.wav";
var beatpad_03 = new Audio();
beatpad_03.src="Sound_0.wav";
var beatpad_04 = new Audio();
beatpad_04.src="Sound_0.wav";
var beatpad_05 = new Audio();
beatpad_05.src="Sound_0.wav";
var beatpad_06 = new Audio();
beatpad_06.src="Sound_0.wav";
var beatpad_07 = new Audio();
beatpad_07.src="Sound_0.wav";
var beatpad_08 = new Audio();
beatpad_08.src="Sound_0.wav";
var beatpad_09 = new Audio();
beatpad_09.src="Sound_0.wav";
var beatpad_10 = new Audio();
beatpad_10.src="Sound_0.wav";
var beatpad_11 = new Audio();
beatpad_11.src="Sound_0.wav";
var beatpad_12 = new Audio();
beatpad_12.src="Sound_0.wav";
var beatpad_13 = new Audio();
beatpad_13.src="Sound_0.wav";
var beatpad_14 = new Audio();
beatpad_14.src="Sound_0.wav";
var beatpad_15 = new Audio();
beatpad_15.src="Sound_0.wav";
var beatpad_16 = new Audio();
beatpad_16.src="Sound_0.wav";
var metronomebeep1 = new Audio();
metronomebeep1.src="hibeep.wav";
var metronomebeep2 = new Audio();
metronomebeep2.src="lobeep.wav";


var Sound_0 = new Audio();
Sound_0.src = "Sound_0.wav";
var Sound_01 = new Audio();
Sound_01.src="kick/kick1.wav";
Sound_01.innerHTML = "KICK 1";
var Sound_02 = new Audio();
Sound_02.src="kick/kick2.wav";
Sound_02.innerHTML = "KICK 2";
var Sound_03 = new Audio();
Sound_03.src="kick/kick3.wav";
Sound_03.innerHTML = "KICK 3";
var Sound_04 = new Audio();
Sound_04.src="808/808-1.wav";
Sound_04.innerHTML = "808 1";
var Sound_05 = new Audio();
Sound_05.src="808/808-2.wav";
Sound_05.innerHTML = "808 2";
var Sound_06 = new Audio();
Sound_06.src="808/808-3.wav";
Sound_06.innerHTML = "808 3";
var Sound_07 = new Audio();
Sound_07.src="808/808-4.wav";
Sound_07.innerHTML = "808 4";
var Sound_08 = new Audio();
Sound_08.src="Snare/Snare1.wav";
Sound_08.innerHTML = "SNARE 1";
var Sound_09 = new Audio();
Sound_09.src="Snare/Snare2.wav";
Sound_09.innerHTML = "SNARE 2";
var Sound_10 = new Audio();
Sound_10.src="Snare/Snare3.wav";
Sound_10.innerHTML = "SNARE 3";
var Sound_11 = new Audio();
Sound_11.src="vocals/AintGotToBallDRose.wav";
Sound_11.innerHTML = "DROSE";
var Sound_12 = new Audio();
Sound_12.src="vocals/Blam.wav";
Sound_12.innerHTML = "BLAM";
var Sound_13 = new Audio();
Sound_13.src="vocals/Bow.wav";
Sound_13.innerHTML = "BOW";
var Sound_14 = new Audio();
Sound_14.src="vocals/Igh.wav";
Sound_14.innerHTML = "IGH";
var Sound_15 = new Audio();
Sound_15.src="vocals/It's Lit.wav";
Sound_15.innerHTML = "IT'S LIT";
var Sound_16 = new Audio();
Sound_16.src="vocals/What.wav";
Sound_16.innerHTML = "WHAT";
var Sound_17 = new Audio();
Sound_17.src="Hat/hat1.wav";
Sound_17.innerHTML = "HAT 1";
var Sound_18 = new Audio();
Sound_18.src="Hat/hat2.wav";
Sound_18.innerHTML = "HAT 2";
var Sound_19 = new Audio();
Sound_19.src="Hat/hat3.wav";
Sound_19.innerHTML = "HAT 3";
var Sound_20 = new Audio();
Sound_20.src="Hat/hat4.wav";
Sound_20.innerHTML = "HAT 4";
var Sound_21 = new Audio();
Sound_21.src="Hat/hat5.wav";
Sound_21.innerHTML = "HAT 5";
var Sound_22 = new Audio();
Sound_22.src="Hat/hat6.wav";
Sound_22.innerHTML = "HAT 6";
var Sound_23 = new Audio();
Sound_23.src="Snare/Snare4.wav";
Sound_23.innerHTML = "SNARE 4";
var Sound_24 = new Audio();
Sound_24.src="Snare/Snare5.wav";
Sound_24.innerHTML = "SNARE 5";
var Sound_25 = new Audio();
Sound_25.src="Snare/Snare6.wav";
Sound_25.innerHTML = "SNARE 6";
var Sound_26 = new Audio();
Sound_26.src="Snare/Snare7.wav";
Sound_26.innerHTML = "SNARE 7";
var Sound_27 = new Audio();
Sound_27.src="Snare/Snare8.wav";
Sound_27.innerHTML = "SNARE 8";
var Sound_28 = new Audio();
Sound_28.src="Snare/Snare9.wav";
Sound_28.innerHTML = "SNARE 9";
var Sound_29 = new Audio();
Sound_29.src="kick/kick4.wav";
Sound_29.innerHTML = "KICK 4";
var Sound_30 = new Audio();
Sound_30.src="kick/kick5.wav";
Sound_30.innerHTML = "KICK 5";
var Sound_31 = new Audio();
Sound_31.src="kick/kick6.wav";
Sound_31.innerHTML = "KICK 6";
var Sound_32 = new Audio();
Sound_32.src="kick/kick7.wav";
Sound_32.innerHTML = "KICK 7";
var Sound_33 = new Audio();
Sound_33.src="kick/kick8.wav";
Sound_33.innerHTML = "KICK 8";
var Sound_34 = new Audio();
Sound_34.src="808/808-5.wav";
Sound_34.innerHTML = "808 5";



var playSound = function(beatpad){
    var getid = beatpad.target.getAttribute('id');
    document.getElementById(getid).classList.add('animation');
    setTimeout(function() {
        document.getElementById(getid).classList.remove('animation');
    }, 401);
    var getsound = eval(getid);
    if(getsound.paused){
        audio.src = getsound.src;
        getsound.play();
    }else{
        getsound.currentTime = 0;    
    }
}

var rangeSlider = document.getElementById("bpm");
var rangeBullet = document.getElementById("bpm-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value + " BPM 4/4";
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
}

var metronome1 = null;
var metronome2 = null;
var bpm = rangeSlider.value;
var rate = 60000/bpm;

var playMetronome = function (){
    metronomebeep1.play();
}

var playMetronome2 = function(){
    metronomebeep2.play();
}

function stopMetronome() {
  clearInterval(metronome2);
  clearInterval(metronome1);
}

var playProgress = null;
var recordProgress = null;
var playSlider = document.getElementById("playbar");
var playMax = playSlider.max;
var playValue = null;
function stopFunction() {
  clearInterval(playProgress);
}

var playplay = function(a){
    var time = allSounds.time[a]*playEnd;
    var sound = allSounds.sound[a];
    setTimeout(function(){ 
        if(sound.paused){
            sound.play();
        }else{
            sound.currentTime = 0;
        }
        }, time);
}

let playlength = [0];
var playEnd;


var playSlideFunction = function(){
    var playMath = (240/rangeSlider.value)*4000;
    playEnd = Math.round(playMath);
    playValue = eval(playSlider.value);
    playSlider.max = playEnd;
    if (playValue>=playEnd){
        playValue=0;
    }else{
        playValue += 100;  
    }
    playSlider.value=playValue;
}

document.getElementById("recordbutton").addEventListener("mouseover", function(){
    document.getElementById('pressshift').classList.add('active');
});
document.getElementById("recordbutton").addEventListener("mouseleave", function(){
    document.getElementById('pressshift').classList.remove('active');
});

document.getElementById("playbutton").addEventListener("mouseover", function(){
    document.getElementById('pressspace').classList.add('active');
});
document.getElementById("playbutton").addEventListener("mouseleave", function(){
    document.getElementById('pressspace').classList.remove('active');
});

document.getElementById("recordbutton").addEventListener("click", function(){
    var button = document.getElementById("playbutton").src;
    var buttonsrc = button.substr(length-8,8);
    if(buttonsrc==="images/play.png"){
        document.getElementById("playbutton").src="images/stop.png";
    }else{
        document.getElementById("playbutton").src="images/play.png";
    }
    if(recording==="off"){
        recording="on";
        document.getElementById("recordbutton").src="images/recordred.png";
    }else{
        recording="off";
        document.getElementById("recordbutton").src="images/record.png";
    }
    var button = document.getElementById("playbutton").src;
    var buttonsrc = button.substr(length-8,8);
    bpm = rangeSlider.value;
    rate = 60000/bpm;
    if(playing==="off" && metronome==="on"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        playMetronome();
        playMetronome2();
        metronome1 = setInterval(playMetronome,4*rate);
        metronome2 = setInterval(playMetronome2,rate);
        setTimeout(playMetronome2,rate);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="off" && metronome==="off"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="on" && metronome==="on"){
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }else{
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }
});




/*allSounds.every(playSong());, this one didnt work     allSounds.forEach((k, v) => playSong(k,v));


for (const prop in allSounds;) {
  console.log(`allSounds.${prop} = ${allSounds[prop]}`);
  
  setTimeout(playASound,allSounds.sound[i], allSounds.time[i]);
  
}
    for (var i in allSounds){
        playplay(i.length-i.length);
        setTimeout(playASound,allSounds.sound[0],allSounds.time[0])
        console.log(i.length-i.length);
        console.log(allSounds.sound);
    }
    console.log(allSounds.sound.length);
    
    for (var i in allSounds){
        i = allSounds[i].length;
        console.log(i+1);
    }

*/


document.getElementById("playbutton").addEventListener("click", function(){
    var button = document.getElementById("playbutton").src;
    var buttonsrc = button.substr(length-8,8);
    bpm = rangeSlider.value;
    rate = 60000/bpm; 
    if(playing==="off" && metronome==="on"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        playMetronome();
        playMetronome2();
        metronome1 = setInterval(playMetronome,4*rate);
        metronome2 = setInterval(playMetronome2,rate);
        setTimeout(playMetronome2,rate);
        document.querySelector(".playbarcontainer").classList.add("active");
        for (var i in playlength){
            playplay(i);
        }
    }else if (playing==="off" && metronome==="off"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        document.querySelector(".playbarcontainer").classList.add("active");
        for (var i in playlength){
            playplay(i);
        }
    }else if (playing==="on" && metronome==="on"){
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }else{
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }
});


document.addEventListener('keyup', event => {
    if(event.keyCode === 32) {
    var button = document.getElementById("playbutton").src;
    var buttonsrc = button.substr(length-8,8);
    bpm = rangeSlider.value;
    rate = 60000/bpm;
    if(playing==="off" && metronome==="on"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        playMetronome();
        playMetronome2();
        metronome1 = setInterval(playMetronome,4*rate);
        metronome2 = setInterval(playMetronome2,rate);
        setTimeout(playMetronome2,rate);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="off" && metronome==="off"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="on" && metronome==="on"){
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }else{
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }
    }
})
                          
document.addEventListener('keyup', event => {
    if(event.code === 'ShiftLeft') {
    var button = document.getElementById("playbutton").src;
    var buttonsrc = button.substr(length-8,8);
    if(buttonsrc==="images/play.png"){
        document.getElementById("playbutton").src="images/stop.png";
    }else{
        document.getElementById("playbutton").src="images/play.png";
    }
    if(recording==="off"){
        recording="on";
        document.getElementById("recordbutton").src="images/recordred.png";

    }else{
        recording="off";
        document.getElementById("recordbutton").src="images/record.png";
    }
    bpm = rangeSlider.value;
    rate = 60000/bpm;
    if(playing==="off" && metronome==="on"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        playMetronome();
        playMetronome2();
        metronome1 = setInterval(playMetronome,4*rate);
        metronome2 = setInterval(playMetronome2,rate);
        setTimeout(playMetronome2,rate);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="off" && metronome==="off"){
        document.getElementById("playbutton").src="images/stop.png";
        playing = "on";
        playProgress = setInterval(playSlideFunction,100);
        document.querySelector(".playbarcontainer").classList.add("active");
        playlength.forEach(function(element){
        playplay(element);
    });
    }else if (playing==="on" && metronome==="on"){
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }else{
        document.getElementById("playbutton").src="images/play.png";
        recording = "off";
        document.getElementById("recordbutton").src="images/record.png";
        playing = "off";
        stopFunction();
        stopMetronome();
        document.querySelector(".playbarcontainer").classList.remove("active");
        playSlider.value=0;
    }
    }
})


document.addEventListener('keyup', event => {
    if(event.code === 'Digit1') {
    beatpad = '01';
    playSoundKey(beatpad_01);
    document.getElementById("beatpad_01").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_01").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_01);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'Digit2') {
    beatpad = '02';
    playSoundKey(beatpad_02);
    document.getElementById("beatpad_02").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_02").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_02);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'Digit3') {
    beatpad = '03';
    playSoundKey(beatpad_03);
    document.getElementById("beatpad_03").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_03").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_03);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'Digit4') {
    beatpad = '04';
    playSoundKey(beatpad_04);
    document.getElementById("beatpad_04").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_04").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_04);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyQ') {
    beatpad = '05';
    playSoundKey(beatpad_05);
    document.getElementById("beatpad_05").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_05").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_05);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyW') {
    beatpad = '06';
    playSoundKey(beatpad_06);
    document.getElementById("beatpad_06").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_06").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_06);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyE') {
    beatpad = '07';
    playSoundKey(beatpad_07);
    document.getElementById("beatpad_07").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_07").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_07);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyR') {
    beatpad = '08';
    playSoundKey(beatpad_08);
    document.getElementById("beatpad_08").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_08").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_08);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyA') {
    beatpad = '09';
    playSoundKey(beatpad_09);
    document.getElementById("beatpad_09").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_09").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_09);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyS') {
    beatpad = '10';
    playSoundKey(beatpad_10);
    document.getElementById("beatpad_10").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_10").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_10);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyD') {
    beatpad = '11';
    playSoundKey(beatpad_11);
    document.getElementById("beatpad_11").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_11").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_11);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyF') {
    beatpad = '12';
    playSoundKey(beatpad_12);
    document.getElementById("beatpad_12").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_12").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_12);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyZ') {
    beatpad = '13';
    playSoundKey(beatpad_13);
    document.getElementById("beatpad_13").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_13").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_13);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyX') {
    beatpad = '14';
    playSoundKey(beatpad_14);
    document.getElementById("beatpad_14").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_14").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_14);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyC') {
    beatpad = '15';
    playSoundKey(beatpad_15);
    document.getElementById("beatpad_15").classList.add('animation');
    setTimeout(function() {
       document.getElementById("beatpad_15").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_15);
  }
})

document.addEventListener('keyup', event => {
    if(event.code === 'KeyV') {
    beatpad = '16';
    playSoundKey(beatpad_16);
    document.getElementById("beatpad_16").classList.add('animation');
    setTimeout(function() {
    document.getElementById("beatpad_16").classList.remove('animation');
    }, 401);
    recordSoundKey(beatpad_16);
  }  
})




/*record and play buttons
if record button is on, listen to play button and add background color of 

turn play to on




document.getElementById("beatpad_02").addEventListener("click", function(){
    playSoundButton(beatpad_02);
});
*/

var playSoundKey = function(beatpad){
    if(beatpad.paused){
        audio.src = beatpad.src;
        beatpad.play();
    }else{
        beatpad.currentTime = 0;    
    }
}

options = document.querySelectorAll(".option");
beatpad = document.querySelectorAll(".beatpad");
cell = document.querySelectorAll('#maintable td');

options.forEach(elem =>{
    elem.addEventListener('dragstart', dragStart);
    elem.addEventListener("click", playSound);
 });

beatpad.forEach(elem => {
    elem.addEventListener("dragover",dragOver);
    elem.addEventListener("drop",drop);
    elem.addEventListener("dragleave",dragLeave);
    elem.addEventListener("click", playSound);
    elem.addEventListener("click", recordSound);
    elem.addEventListener("mouseover", hoverKey);
    elem.addEventListener("mouseleave", unhoverKey);
});

cell.forEach(elem => {
    elem.addEventListener("dragstart", dragSound)
});


function hoverKey(event){
    var number = event.target.id.substr(event.target.id.length-2);
    var numberclass = 'key' + number;
    document.getElementById(numberclass).classList.add("active");
}

function unhoverKey(event){
    var number = event.target.id.substr(event.target.id.length-2);
    var numberclass = 'key' + number;
    document.getElementById(numberclass).classList.remove("active");
}

function dragSound(event){
    console.log(event.target.id);
}



/**this goes in record buttons
    var playMath = (240/rangeSlider.value)*4000;
    var playEnd = Math.round(playMath);
    var tablePosition = playEnd/128;
    recordProgress = setInterval(playSlideFunction,100);
var sound = new recordedSound
allsounds.push(sound);
*/
var allSounds = {
    sound: [Sound_0],
    time: [0]
};

function recordSound(event){
    if (recording==="on"){
        eval(event);
        var id = event.target.getAttribute('id');
        var beatpadSound = eval(id);
        allSounds['sound'].push(beatpadSound);
        allSounds['time'].push(playValue/playEnd);
        playlength.push(playlength.length);
        var row = id.substr(id.length-2);
        var position = Math.round(((playValue/playSlider.max)*128)+1);
        var track = 'track' + row;
        var eventsrc = beatpadSound.src.substr(event.src.length-11);
        if (eventsrc !== "Sound_0.wav"){
        document.getElementById(track).cells[position].classList.add('soundactive');
        }
    }
}

function recordSoundKey(event){
    if (recording==="on"){
        allSounds['sound'].push(event);
        allSounds['time'].push(playValue/playEnd);
        playlength.push(playlength.length);
        var position = Math.round(((playValue/playSlider.max)*128)+1);
        var track = 'track' + beatpad;
        var eventsrc = event.src.substr(event.src.length-11);
        if (eventsrc !== "Sound_0.wav"){
        document.getElementById(track).cells[position].classList.add('soundactive');
        }
    }
}

function dragStart(event){
    event.dataTransfer.setData("text",event.target.id);
}
function dragOver(event){
    event.preventDefault();
    var data = event.dataTransfer.setData("text",event.target.id);
    var addactive = event.target.getAttribute('id');
    document.getElementById(addactive).classList.add("active");
}

function dragLeave(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text",event.target.id);
    var addactive = event.target.getAttribute('id');
    document.getElementById(addactive).classList.remove("active");
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var datadroppedon = event.target.getAttribute('id');
    document.getElementById(datadroppedon).classList.remove("active");
    document.getElementById(datadroppedon).classList.add("hassound");
    var number = event.target.id.substr(event.target.id.length-2);
    var padnumber = "pad" + number;
    const sound = eval(data).src;
    const soundname = eval(data).innerHTML;
    const beatpad = eval(datadroppedon);
    var padrow = document.getElementById(padnumber);
    beatpad.src = sound;
    padrow.innerHTML = soundname;

}

    
    
/*this is for the visualizer and every time a sound is played, the .src needs swapped*/

var audio = new Audio();
audio.src = '';
audio.controls = false;
audio.loop = false;
audio.autoplay = false;
audio.muted = true;

// Establish all variables that your Analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
// Initialize the MP3 player after the page loads all of its HTML into the window
window.addEventListener("load", initMp3Player, false);
function initMp3Player(){
	document.getElementById('audio_box').appendChild(audio);
	context = new webkitAudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
    canvas = document.getElementById('analyser_render');
    ctx = canvas.getContext('2d');

	// Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}

// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = 'black'; // Color of the bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 4;
		bar_width = 1;
        bar_y=canvas.height/2;
		bar_height = -(fbc_array[i] / 4);
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, bar_y, bar_width, bar_height);
	}
    for (var i = 0; i < bars; i++) {
		bar_x = i * 4;
		bar_width = 1;
        bar_y=canvas.height/2;
		bar_height = (fbc_array[i]/4);
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, bar_y, bar_width, bar_height);
	}
}
