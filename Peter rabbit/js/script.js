// //preloader

// const preload = function () {
//     document.querySelector( '#preloader' ).classList.add( 'loaded' );
//     // setTimeout( function () {

//     // }, 1000 );
//     }

// imagesLoaded( 'body', '#page', { image: 'section' }, preload );


//define functions

let bgMusic = document.getElementById('bg-music');
// bgMusic.loop = true;

const toggleBgMusic = function() {
    bgMusic.muted = false;
    bgMusic.play();
    document.querySelector('.play').style.visibility = 'hidden'
    document.querySelector('.pause').style.visibility = 'visible'

}

const offBgMusic = function() {
    bgMusic.muted = true;
    bgMusic.pause();
    document.querySelector('.play').style.visibility = 'visible'
    document.querySelector('.pause').style.visibility = 'hidden'

}

// const offBgMusic = function() {

//     bgMusic.pause();
//     bgMusic.muted = true;
//     if ( bgMusic.muted == false ) {
//         bgMusic.pause();
//         document.querySelector('.play').style.visibility = 'visible'
//         document.querySelector('.pause').style.visibility = 'hidden'
//     }
// }


const parallaxImages = function( event ) {
    let mouseX = window.innerWidth / 2 - event.clientX;
    let mouseY = window.innerWidth / 2 - event.clientY;
    veggiesOne.style.transform = 'translate('+ mouseX/20 +'px, '+ mouseY/20 +'px)'
    veggiesTwo.style.transform = 'translate('+ mouseX/10 +'px, '+ mouseY/10 +'px)'
  }

const toggleStart = function() {
    document.querySelector('.start-bg').style.animation = 'fade-out 5s forwards'
    document.querySelector('#starting-story h2').style.animation = 'fade-out 5s forwards '
}

const startButton = function() {
    document.querySelector('#starting-story h2').style.visibility = 'visible'
    document.querySelector('#starting-story h2').style.animation = 'fade-in 5s forwards'
    document.querySelector('#overflow').style.visibility = 'visible'
    document.querySelector('#overflow').style.position = 'initial'
    document.querySelector('#overflow').style.animation = 'fade-in 1s forwards '

}


const toggleEscaping = function() {
    peterEscaping.style.animation = "peter-escaping 3s forwards"
    peterEscaped.style.animation = "peter-escaped 3s forwards"
}

const toggleWink = function() {
    rabbitAnim.play('wink');
}

const toggleSneeze = function() {
    if ( music.paused ) {
        music.play();
        wateringCan.play( 'sneeze' )
        farmerVisible.style.visibility = 'visible';
        farmerShed.play('moving')
    } else {
        music.pause();
        wateringCan.play( 'idle' )
        farmerShed.play('looking')
    }
}

const toggleTeacup = function() {
    momTeacup.play('give-tea');
}

const toggleMom = function() {
    momChecking.style.visibility = 'visible';
    momChecking.style.animation = "mom-in 3s forwards";
}

const scrollAmount = function ( element ) {
    let scrollTop = innerHeight - element.getBoundingClientRect().top;
    let scrollHeight = element.offsetHeight + innerHeight;
    let scrollValue = scrollTop / scrollHeight;
    return scrollValue;
  }

// links selector



const selectLink = function ( event ) {
    // console.log( 'clicked on', event.currentTarget );
    highlightLink( event.currentTarget );

    }

const highlightLink = function ( element ) {
    for ( let link of links1 ) {
        link.classList.remove( 'selected' );
        element.classList.add( 'selected' );

        }
        
    }

const checkSections = function ( entries ) {
    // console.log( entries );
    for ( let entry of entries ) {
        if ( entry.intersectionRatio >= 0.5 ) {
            let hash = '#' + entry.target.id;
            for ( let link of links1 ) {
                if ( link.hash === hash ) highlightLink( link );
                }
        }
    }

    }
    
let observer = new IntersectionObserver( checkSections, {threshold:[0.5] } );

let links1 = document.querySelectorAll( '.timeline a' );

let sections = document.querySelectorAll( '#page section' );


// hamburger menu animation

let links = document.querySelectorAll('nav a');

let burger = document.querySelector('#burger');

const toggleOpen =function() {
    document.querySelector('body').classList.toggle('open');

    for (var i=0; i < links.length; i++) {
    if ( document.querySelector( 'body' ).classList.contains( 'open' ) ) {
        links[i].style.transitionDelay = i * 0.25 + 's';
        document.querySelector('.scared-peter').style.visibility = 'hidden';
        document.querySelector('.angry-farmer').style.visibility = 'hidden';
    } else {
        links[i].style.transitionDelay = '0s';
        document.querySelector('.scared-peter').style.visibility = 'visible';
        document.querySelector('.angry-farmer').style.visibility = 'visible';
    }
    }
}

for (var i=0; i < links.length; i++) {
    links[i].addEventListener('click', toggleOpen)

}

// chase/timeline scene animation

window.addEventListener('scroll', () => {
    let value = scrollAmount( chase ); 
    // console.log(scrollAmount(escapescene));
    console.log(scrollAmount(garden));

    if ((scrollAmount(chase) <= 0.9) ) {
        anim1.style.left = value * 1200 + 'px';
        anim2.style.left = value * 1200 + 'px';
    }

    if ((scrollAmount(garden) >= 0.45) && (scrollAmount(garden) <= 2.75)) {
        timelineVis.style.visibility = 'visible';
        timelineVis.style.animation = 'fade-in 0.5s ';
        
    } else {
        timelineVis.style.visibility = 'hidden';
        timelineVis.style.animation = 'fade-out 0.5s '
    }
    
});


//define variables

let assetsLoaded = 0;

let assetsTotal = 16; 

let timelineVis = document.querySelector('.timeline');

let anim1 = document.querySelector( '.scared-peter' );

let anim2 = document.querySelector( '.angry-farmer' );

let veggiesOne = document.querySelector('#veggies1');

let veggiesTwo = document.querySelector('#veggies2');

let farmerVisible = document.querySelector('#farmer-shed');

let sneeze = document.querySelector('#sneeze');

let homeBg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#home-bg'),
    artboard: 'homepage-bg',
    autoplay: true
    } );

let homeBg1 = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#home-bg-1'),
    artboard: 'homepage-bg-2',
    autoplay: true
    } );

let peterRabbit = document.querySelector('#peter-rabbit')
let rabbitAnim = new rive.Rive ({
    src: 'media/assets.riv',
    canvas: peterRabbit,
    artboard: 'peter-rabbit',
    autoplay: true
})

let gardenFg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#garden-fg'),
    artboard: 'chase-fg',
    autoplay: true
    } );

let gardenBg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#garden-bg'),
    artboard: 'garden-bg',
    autoplay: true
    } );

let chaseFg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#chase-fg'),
    artboard: 'chase-fg',
    autoplay: true
    } );

let shedBg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#shed-bg'),
    artboard: 'shed-bg',
    autoplay: true
    } );

let escapeFg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#escape-fg'),
    artboard: 'escape-fg',
    autoplay: true
    } );

let sickBg = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#bedroom-bg'),
    artboard: 'bedroom-bg',
    autoplay: true
    } );

peterBed = document.querySelector('#peter-resting');
let peterRest = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: peterBed,
    artboard: 'peter-resting',
    autoplay: true
    } );

let gardenPeter = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#garden-peter'),
    artboard: 'garden-peter',
    autoplay: true
    } );

let sneezeButton = document.querySelector( '#watering-can' );
let wateringCan = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: sneezeButton,
    artboard: 'watering-can',
    autoplay: true
    } );

let farmerShed = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: document.querySelector('#farmer-shed'),
    artboard: 'farmer-shed',
    autoplay: true
    } );


let peterEscaping = document.querySelector('#escaping-peter');
let escapingPeter = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: peterEscaping,
    artboard: 'scared-idle-peter',
    autoplay: true
    } );

let peterEscaped = document.querySelector('#escaped-peter');  
let escapedPeter = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: peterEscaped,
    artboard: 'idle-peter',
    autoplay: true
    } );

momChecking = document.querySelector('#mom-checking');
let momTeacup = new rive.Rive( {
    src: 'media/assets.riv',
    canvas: momChecking,
    artboard: 'mom-teacup',
    autoplay: true
    } );

let fenceEscape = document.querySelector('#escapescene .fences');


//script initialisation

document.body.scrollIntoView();


for ( let link of links1 ) {
    link.addEventListener( 'click', selectLink );
    }

for ( let section of sections ) {
    observer.observe( section );
    }
     
document.querySelector('.play').addEventListener('click', toggleBgMusic);
document.querySelector('.pause').addEventListener('click', offBgMusic);

document.querySelector('.start-button').addEventListener('click', startButton);    

document.querySelector('.start-bg').addEventListener('click', toggleStart);

burger.addEventListener('click', toggleOpen);

peterRabbit.addEventListener('click', toggleWink);

sneezeButton.addEventListener('click', toggleSneeze);

fenceEscape.addEventListener('click', toggleEscaping);

momChecking.addEventListener('click', toggleTeacup);

peterBed.addEventListener('click', toggleMom);

document.addEventListener('mousemove', parallaxImages); 

document.addEventListener('click', parallaxImages);

AOS.init();