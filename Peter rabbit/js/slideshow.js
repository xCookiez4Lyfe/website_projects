// function definitions
const playSlides = function () {
    timer = setInterval( nextSlide, interval );
}

const nextSlide = function () {
    $images.fadeOut(1000);
    $captions.fadeOut(1000);
    currentSlide++;
    
    if ( currentSlide >= $images.length ) currentSlide = 0;
    console.log( 'switching to slide', currentSlide );
    $images.eq( currentSlide ).fadeIn(1000);
    $captions.eq( currentSlide ).fadeIn(1000);
}

const pauseSlides = function (event) {
    clearInterval( timer );
}

// variable declarations
let $images = $( '.slideimg' );
let $captions = $( '#captions p' );
let currentSlide = 0;
let interval = 5000;
let timer;

// script initialisation
$images.not( $images.first() ).hide();
$captions.not( $captions.first() ).hide();

playSlides();

$images.on( 'mouseenter', pauseSlides );
$images.on( 'mouseleave', playSlides );
$( '#slides' ).on( 'click', nextSlide );