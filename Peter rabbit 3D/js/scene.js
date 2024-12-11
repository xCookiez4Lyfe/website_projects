'use strict'

// function definitions
const rotateScene = function (event) {
    rY += event.originalEvent.movementX / 5;
    $scene.css('--rY', rY + 'deg');

    $tree.css('transform', ' translate3d(-45px, -350px, -150px) rotateY('+(-rY)+'deg)');

    $bush2.css('--rY', -rY + 'deg');
    $bush3.css('--rY', -rY + 'deg');
    $bush5.css('--rY', -rY + 'deg');
    $bush1.css('--rY', rY + 'deg');
    $bush4.css('--rY', rY + 'deg');


    $flopsyFront.css('--rY', -rY + 'deg');
    $cottonTailFront.css('--rY', -rY + 'deg');
    $peterFront.css('--rY', -rY + 'deg');


    if (rY > 75) {
        $scene.css('--rY', 75 + 'deg');

        $tree.css('transform', ' translate3d(-45px, -350px, -150px) rotateY('+(-75)+'deg)');
        $flopsyFront.css('--rY', -75 + 'deg');
        $cottonTailFront.css('--rY', -75 + 'deg');
        $peterFront.css('--rY', -75 + 'deg');


    } else if (rY < -75) {
        $scene.css('--rY', -75 + 'deg');

        $tree.css('transform', ' translate3d(-45px, -350px, -150px) rotateY('+(75)+'deg)');
        $flopsyFront.css('--rY', 75 + 'deg');
        $cottonTailFront.css('--rY', 75 + 'deg');
        $peterFront.css('--rY', 75 + 'deg');

    } 
    
    if (rY > 50) {

        $bush2.css('--rY', -50 + 'deg');
        $bush3.css('--rY', -50 + 'deg');
        $bush5.css('--rY', -50 + 'deg');

    } else if (rY < -50) {

        $bush2.css('--rY', 50 + 'deg');
        $bush3.css('--rY', 50 + 'deg');
        $bush5.css('--rY', 50 + 'deg');
    }

    if (rY > 15) {

        $bush1.css('--rY', 15 + 'deg');
        $bush4.css('--rY', 15 + 'deg');

    } else if (rY < -15) {

        $bush1.css('--rY', -15 + 'deg');
        $bush4.css('--rY', -15 + 'deg');

}   

}

const openDoor = function() {
    document.querySelector('.front-door-1').style.animation = '1.5s open-door ease-in-out forwards';

    music1.play();

    const text4 = document.querySelector('.character-text4')
    

    text4.classList.remove('show'); 
    void text4.offsetWidth; 
    text4.classList.add('show');


}

const closeDoor = function() {
    document.querySelector('.front-door-1').style.animation = '1.5s close-door ease-in-out forwards';

    music2.play();
}

const openBasket = function() {
    document.querySelector('.top2').style.animation = '1s open-basket ease-in-out forwards';
    music4.play();
}

const closeBasket = function() {
    document.querySelector('.top2').style.animation = '0.5s close-basket ease-in-out forwards';
    music5.play();
}




const placeFood = function() {
    document.querySelector('.berry').style.animation = '3s 1s move-berry ease-in-out forwards';
    document.querySelector('.bread').style.animation = '3s 2s move-bread ease-in-out forwards';
    document.querySelector('.honey').style.animation = '3s 3s move-honey ease-in-out forwards';
    music6.play();
}


const openCurtains = function() {
    windowFrame.play('draw-curtains');
    music3.play();

    const text5 = document.querySelector('.character-text5')
    

    text5.classList.remove('show-mopsy'); 
    void text5.offsetWidth; 
    text5.classList.add('show-mops');
}

const startSmoke = function() {
    document.querySelector('.smoke').style.visibility = 'visible';
    music7.play();

}




const moveChar = function (event) {
    let tX = Math.random() * 160 - 10;
    let tZ = Math.random() * 320 - 50;
    // console.log(tX, tZ);
    $flopsy.css('--tX', tX + 'px');
    $flopsy.css('--tZ', tZ + 'px');

}

const moveChar2 = function (event) {
    let tX = Math.random() * 300 + 80;
    let tZ = Math.random() * 170 + 150;
    // console.log(tX, tZ);
    $cottonTail.css('--tX', tX + 'px');
    $cottonTail.css('--tZ', tZ + 'px');

}


let bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.05;

const offBgMusic = function() {


    if (bgMusic.muted == true) {
        bgMusic.muted = false;
    }

    document.querySelector('.play').style.visibility = 'visible'
    document.querySelector('.pause').style.visibility = 'hidden'

}

const toggleBgMusic = function() {

    document.querySelector('.play').style.visibility = 'hidden'
    document.querySelector('.pause').style.visibility = 'visible'

    if (bgMusic.muted == false) {
        bgMusic.muted = true;
    }

}

const toggleNight = function() {
    document.querySelector('.day').style.visibility = 'visible'
    document.querySelector('.night').style.visibility = 'hidden'

    document.body.style.background = "rgb(8, 19, 26)";
    document.body.style.animation = 'night 5s forwards';

    document.querySelector('.sky').style.visibility = 'hidden'
    document.querySelector('.food1').style.visibility = 'hidden'
    document.querySelector('.food2').style.visibility = 'hidden'
    document.querySelector('.food3').style.visibility = 'hidden'
    document.querySelector('.picnic').style.visibility = 'hidden'
    document.querySelector('.basket').style.visibility = 'hidden'
    document.querySelector('.stars').style.visibility = 'visible'
    document.querySelector('.stars').style.animation = 'fade-in 7s '
    
    document.querySelector('.front-door').style.pointerEvents = 'none'
    document.querySelector('.front-door-1').style.pointerEvents = 'none'

    music2.play();

    document.querySelector('.animated-window').style.pointerEvents = 'none'
    document.querySelector('.chimney').style.pointerEvents = 'none'

    document.querySelector('.smoke').style.visibility = 'hidden'
    document.querySelector('.front-inside').style.visibility = 'hidden'

    music7.pause();

    document.querySelector('.front-door-1').style.animation = '0.5s close-door ease-in-out forwards'

    music8.pause();
    music9.play();
    bgMusic.pause();

    document.querySelector('.char1').style.animation = 'fade-out 1s forwards'
    document.querySelector('.char2').style.animation = 'fade-out 1s forwards '
    document.querySelector('.char3').style.animation = 'fade-out 1s forwards'

    document.querySelector('.char1').style.pointerEvents = 'none'
    document.querySelector('.char2').style.pointerEvents = 'none '
    document.querySelector('.char3').style.pointerEvents = 'none'


}

const toggleDay = function() {

    document.querySelector('.day').style.visibility = 'hidden'
    document.querySelector('.night').style.visibility = 'visible'

    document.body.style.background = "rgb(94, 196, 214)";
    document.body.style.animation = 'day 5s forwards';

    document.querySelector('.sky').style.visibility = 'visible'
    document.querySelector('.char1').style.visibility = 'visible'
    document.querySelector('.char2').style.visibility = 'visible'
    document.querySelector('.char3').style.visibility = 'visible'
    document.querySelector('.food1').style.visibility = 'visible'
    document.querySelector('.food2').style.visibility = 'visible'
    document.querySelector('.food3').style.visibility = 'visible'
    document.querySelector('.picnic').style.visibility = 'visible'
    document.querySelector('.basket').style.visibility = 'visible'
    document.querySelector('.stars').style.visibility = 'hidden'

    document.querySelector('.front-door').style.pointerEvents = 'auto'
    document.querySelector('.front-door-1').style.pointerEvents = 'auto'
    document.querySelector('.animated-window').style.pointerEvents = 'auto'
    document.querySelector('.chimney').style.pointerEvents = 'auto'
    document.querySelector('.front-inside').style.visibility = 'visible'

    music8.play();
    music9.pause();


    bgMusic.muted = false;
    bgMusic.play();


    document.querySelector('.char1').style.animation = 'fade-in 1s'
    document.querySelector('.char2').style.animation = 'fade-in 1s'
    document.querySelector('.char3').style.animation = 'fade-in 1s'
    
    document.querySelector('.char1').style.pointerEvents = 'auto'
    document.querySelector('.char2').style.pointerEvents = 'auto '
    document.querySelector('.char3').style.pointerEvents = 'auto'

}

const fallingApples = function () {
    apples.play('apples-falling');
    music10.play();
    
}

const toggleStart = function() {
    document.querySelector('.start-screen').style.animation = 'fade-out 5s forwards'
    document.querySelector('.start-screen h2').style.animation = 'fade-out 5s forwards '
    document.querySelector('.start-screen').style.pointerEvents = 'none'

    document.querySelector('.container').style.animation = 'pop-up 7s forwards'
}


const text1Show = function () {
    const text1 = document.querySelector('.character-text1')
    

    text1.classList.remove('show'); 
    void text1.offsetWidth; 
    text1.classList.add('show');
}

const text2Show = function () {
    const text2 = document.querySelector('.character-text2')
    

    text2.classList.remove('show'); 
    void text2.offsetWidth; 
    text2.classList.add('show');
}

const text3Show = function () {
    const text3 = document.querySelector('.character-text3')
    

    text3.classList.remove('show'); 
    void text3.offsetWidth; 
    text3.classList.add('show');
}




// variable declarations
let $body = $('body');
let $scene = $('.scene');
let $treeFront = $('.tree .front');

let $sky = $('.changing-sky');

let rX = -15;
let rY = 30;

let $bush1 = $('.bush-1');
let $bush2 = $('.bush-2');
let $bush3 = $('.bush-3');
let $bush4 = $('.bush-4');
let $bush5 = $('.bush-5');


let $treeLeaf1 = $('.leaf-1');
let $treeLeaf2 = $('.leaf-2');
let $treeLeaf3 = $('.leaf-3');
let $treeLeaf4 = $('.leaf-4');

let $tree = $('.tree');

let $basket = $('.basket');
let $door = $('.front-door');
let $fdoor = $('.front-door-1');
let $fhouse = $('.house .front');
let $fwindow = $('.house .window-frame');
let $animWindow = $('.animated-window');

let $flopsy = $('.char1');
let $flopsyFront = $('.flopsy');

let $cottonTail = $('.char2');
let $cottonTailFront = $('.cotton-tail');

let $peter = $('.char3');
let $peterFront = $('.peter');

let $chimney = $('.chimney');

let windowAnim = document.querySelector('#window-anim');
let windowFrame = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: windowAnim,
    artboard: 'window'
    } );

let appleAnim = document.querySelector('#apples');
let apples = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: appleAnim,
    artboard: 'apples',
    autoplay: true
    } );

var audio1 = document.getElementById("music1");
  audio1.volume = 0.2;

var audio2 = document.getElementById("music2");
    audio2.volume = 0.2;

var audio3 = document.getElementById("music3");
    audio3.volume = 0.2;

var audio4 = document.getElementById("music4");
    audio4.volume = 0.1;

var audio5 = document.getElementById("music5");
    audio5.volume = 0.1;

var audio6 = document.getElementById("music6");
    audio6.volume = 0.1;

var audio7 = document.getElementById("music7");
    audio7.volume = 0.1;

var audio8 = document.getElementById("music8");
    audio8.volume = 0.1;

var audio9 = document.getElementById("music9");
    audio9.volume = 0.05;

var audio10 = document.getElementById("music10");
    audio10.volume = 0.1;

// script initialisation


$body.on('mousedown', function () {
    $body.on( 'mousemove', rotateScene )
});

$body.on('mouseup', function () {
    $body.off( 'mousemove', rotateScene )
});


$('.face').prop('draggable', false);

$basket.on( 'mouseover', openBasket );
$basket.on( 'mouseout', closeBasket );

$basket.on( 'click', placeFood);

$fdoor.on( 'click', openDoor);

$door.on( 'click', closeDoor);

$animWindow.on('click', openCurtains);

$tree.on('click', fallingApples);

$chimney.on('click', startSmoke);


$flopsy.on('mouseover', moveChar);
$cottonTail.on('mouseover', moveChar2);

$flopsy.on('click', text1Show);
$cottonTail.on('click', text2Show);
$peter.on('click', text3Show);

setInterval (moveChar, 4000);

setInterval (moveChar2, 3000);


document.querySelector('.play').addEventListener('click', toggleBgMusic);
document.querySelector('.pause').addEventListener('click', offBgMusic);

document.querySelector('.day').addEventListener('click', toggleDay);

document.querySelector('.night').addEventListener('click', toggleNight);

document.querySelector('.start-screen').addEventListener('click', toggleStart);
