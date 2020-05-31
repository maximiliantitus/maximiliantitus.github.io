
var leftButton = document.querySelector('.btn-arrow-left');
var rightButton = document.querySelector('.btn-arrow-right');
var mainImage = document.querySelector('.main-shoe');
var mainImageSrc = document.querySelector('.main-shoe').src;    
var imagePosition = parseInt(mainImageSrc[mainImageSrc.length-10]);
var swoosh = document.querySelector('.swoosh-shoe');
var sooole = document.querySelector('.sooole-shoe');
var mdsole = document.querySelector('.mdsole-shoe');
var bckprt = document.querySelector('.bckprt-shoe');
var bodddy = document.querySelector('.bodddy-shoe');
var baaack = document.querySelector('.baaack-shoe');
var laaces = document.querySelector('.laaces-shoe');
var tnglin = document.querySelector('.tnglin-shoe');
var tongue = document.querySelector('.tongue-shoe');
var toline = document.querySelector('.toline-shoe');
var tostrp = document.querySelector('.tostrp-shoe');
var wavlin = document.querySelector('.wavlin-shoe');
var ankstr = document.querySelector('.ankstr-shoe');
var toeprt = document.querySelector('.toeprt-shoe');

var partPosition = document.getElementById('partidentifier');

rightButton.addEventListener('click', rightarrow);
leftButton.addEventListener('click', leftarrow);

function rightarrow(){
    if(imagePosition < 4){
        imagePosition += 1;
    }else{
        imagePosition = 0;
    }
    mainImage.src = 'images/' + imagePosition + "-shoe.png";
    swoosh.src = 'images/' + imagePosition + swoosh.src.substr(length-16,16);
    sooole.src = 'images/' + imagePosition + sooole.src.substr(length-16,16);
    mdsole.src = 'images/' + imagePosition + mdsole.src.substr(length-16,16);
    bckprt.src = 'images/' + imagePosition + bckprt.src.substr(length-16,16);
    bodddy.src = 'images/' + imagePosition + bodddy.src.substr(length-16,16);
    baaack.src = 'images/' + imagePosition + baaack.src.substr(length-16,16);
    laaces.src = 'images/' + imagePosition + laaces.src.substr(length-16,16);
    tnglin.src = 'images/' + imagePosition + tnglin.src.substr(length-16,16);
    tongue.src = 'images/' + imagePosition + tongue.src.substr(length-16,16);
    toline.src = 'images/' + imagePosition + toline.src.substr(length-16,16);
    tostrp.src = 'images/' + imagePosition + tostrp.src.substr(length-16,16);
    wavlin.src = 'images/' + imagePosition + wavlin.src.substr(length-16,16);
    ankstr.src = 'images/' + imagePosition + ankstr.src.substr(length-16,16);
    toeprt.src = 'images/' + imagePosition + toeprt.src.substr(length-16,16);

}


function leftarrow(){
    if(imagePosition > 0){
        imagePosition -= 1;
    }else{
        imagePosition = 4;
    }
    mainImage.src = 'images/' + imagePosition + "-shoe.png";
    swoosh.src = 'images/' + imagePosition + swoosh.src.substr(length-16,16);
    sooole.src = 'images/' + imagePosition + sooole.src.substr(length-16,16);
    mdsole.src = 'images/' + imagePosition + mdsole.src.substr(length-16,16);
    bckprt.src = 'images/' + imagePosition + bckprt.src.substr(length-16,16);
    bodddy.src = 'images/' + imagePosition + bodddy.src.substr(length-16,16);
    baaack.src = 'images/' + imagePosition + baaack.src.substr(length-16,16);
    laaces.src = 'images/' + imagePosition + laaces.src.substr(length-16,16);
    tnglin.src = 'images/' + imagePosition + tnglin.src.substr(length-16,16);
    tongue.src = 'images/' + imagePosition + tongue.src.substr(length-16,16);
    toline.src = 'images/' + imagePosition + toline.src.substr(length-16,16);
    tostrp.src = 'images/' + imagePosition + tostrp.src.substr(length-16,16);
    wavlin.src = 'images/' + imagePosition + wavlin.src.substr(length-16,16);
    ankstr.src = 'images/' + imagePosition + ankstr.src.substr(length-16,16);
    toeprt.src = 'images/' + imagePosition + toeprt.src.substr(length-16,16);
}

    

document.querySelector('.greybutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src ='images/' +  swooshPosition + "-" + parts + "-grey.png";
});     

document.querySelector('.blackbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-blck.png";
}); 
document.querySelector('.greenbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-gren.png";
});  

document.querySelector('.blushbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-blsh.png";
});  

document.querySelector('.tanbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-taan.png";
}); 

document.querySelector('.creambutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-crem.png";
}); 

document.querySelector('.offyellowbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-offy.png";
}); 

document.querySelector('.darkgreybutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-dgry.png";
}); 

document.querySelector('.brownbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-brwn.png";
}); 

document.querySelector('.whitebutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-whte.png";
}); 

document.querySelector('.redbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-redd.png";
}); 

document.querySelector('.lightbluebutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-blue.png";
}); 

document.querySelector('.lighterbluebutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-lblu.png";
}); 

document.querySelector('.lightbrownbutton').addEventListener('click',function(){
    var imageselect = document.querySelector('.main-shoe').src;
    var part = document.querySelector('.partidentifier');
    var swooshPosition = imageselect[imageselect.length-10];
    var partID = "." + part.src.substr(length-10, 6) + "-shoe";
    var partidentifier = document.querySelector(partID);
    var parts = partID.substr(length-11,6);
    partidentifier.src = 'images/' + swooshPosition + "-" + parts + "-lbrn.png";
}); 

document.querySelector('.solepart').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "sooole.png";
    partID = '.sooole-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
});

document.querySelector('.swooshpart').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "swoosh.png";
    partID = '.swoosh-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
});   
document.querySelector('.ankstr').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "ankstr.png";
    partID = '.ankstr-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.midsolepart').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "mdsole.png";
    partID = '.mdsole-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
});   
document.querySelector('.toeprt').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "toeprt.png";
    partID = '.toeprt-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.bodddy').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "bodddy.png";
    partID = '.bodddy-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.baaack').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "baaack.png";
    partID = '.baaack-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.bckprt').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "bckprt.png";
    partID = '.bckprt-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.laaces').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "laaces.png";
    partID = '.laaces-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.tnglin').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "tnglin.png";
    partID = '.tnglin-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.tongue').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "tongue.png";
    partID = '.tongue-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.toline').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "toline.png";
    partID = '.toline-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.querySelector('.tostrp').addEventListener('click',function(){
    var part = document.querySelector('.partidentifier');
    part.src = 'images/' + "tostrp.png";
    partID = '.tostrp-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 
document.getElementById('wavlin').addEventListener('click',function(){
    var part = document.getElementById('partidentifier');
    part.src = 'images/' + "wavlin.png";
    partID = '.wavlin-shoe';
    document.getElementById('dropdown').className = 'dropdown';
    document.getElementById('buttonsection').className = 'buttonsection';
}); 

document.getElementById('partidentifier').addEventListener('click',function(){
    document.getElementById('dropdown').className = 'dropdown2';
    document.getElementById('buttonsection').className = 'buttonsection2';
});
