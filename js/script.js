'use strict'

let image = Array.from(document.querySelectorAll('.slider-block__image'))
const arrows = Array.from(document.querySelectorAll('.slider__arrow'))
const imageIndex = document.querySelector('.slider__index-current span')
const imageLength = document.querySelector('.slider__index-length span')







imageLength.textContent = image.length;
let indexImage = 0;
imageIndex.textContent = (indexImage + 1)

function addActive() {
    image[indexImage].classList.add('active')
}
function removeActive() {
    image[indexImage].classList.add('active')
}

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        console.log(arrow)
        if(arrow.classList.contains('slider__arrow-next')) {
            if(indexImage != image.length - 1) {
                image[indexImage].classList.remove('active')
                indexImage++
                imageIndex.textContent = indexImage + 1
                image[indexImage].classList.add('active')
            } else {
                image[indexImage].classList.remove('active')
                indexImage = 0
                imageIndex.textContent = indexImage + 1
                image[indexImage].classList.add('active')
            }
        }
        if(arrow.classList.contains('slider__arrow-prev')) {
            if(indexImage != 0) {
                image[indexImage].classList.remove('active')
                indexImage--
                imageIndex.textContent = indexImage + 1
                image[indexImage].classList.add('active')
            } else {
                image[indexImage].classList.remove('active')
                indexImage = image.length - 1
                imageIndex.textContent = indexImage + 1
                image[indexImage].classList.add('active')
            }
        }
    })
})




/*animation*/

var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
var el = document.querySelector('.icobutton'),
elSpan = el.querySelector('span'),
// mo.js timeline obj
timeline = new mojs.Timeline(),

// tweens for the animation:

// burst animation
tween1 = new mojs.Burst({
    parent: el,
    duration: 1500,
    shape : 'circle',
    fill : [ '#e49c49', '#e49c49', '#e49c49', '#e49c49', '#e49c49', '#e49c49' ],
    opacity: 0.6,
    childOptions: { radius: {20:0} },
    radius: {40:120},
    count: 9,
    isSwirl: true,
    easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
}),
// ring animation
tween2 = new mojs.Transit({
    parent: el,
    duration: 750,
    type: 'circle',
    radius: {0: 65},
    fill: 'transparent',
    stroke: '#e49c49',
    strokeWidth: {15:0},
    opacity: 0,
    easing: mojs.easing.bezier(0, 1, 0.5, 1)
}),
// icon scale animation
tween3 = new mojs.Tween({
    duration : 900,
    onUpdate: function(progress) {
        var scaleProgress = scaleCurve(progress);
        elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
    }
});

// add tweens to timeline:
timeline.add(tween1, tween2, tween3);

// when clicking the button start the timeline/animation:
/*el.addEventListener('mouseenter', function() {
timeline.replay();
});*/




/*call*/
const getCall = Array.from(document.querySelectorAll('.button-link'))
const form = document.querySelector('.form')
const formButton = document.querySelector('.form__button')
const mail = document.querySelector('.mail')
const body = document.querySelector('body')
const field = Array.from(document.querySelectorAll('.field'))

getCall.forEach((call) => {
    call.addEventListener('click', (event) => {
        event.preventDefault()
        form.classList.add('mail-active')
        body.style.overflow = 'hidden'
    })
})


form.addEventListener('submit', (event) => {
    form.classList.remove('mail-active')
    mail.classList.add('mail-active')
    body.style.overflow = 'hidden'
    timeline.replay();
    event.preventDefault()
    field.forEach((e) => {
        e.value = ''
    })
    setTimeout(() => {
        mail.classList.remove('mail-active') 
        body.style.overflow = 'visible' 
    }, 3000)
})

const circles = Array.from(document.querySelectorAll('.service img'))

/*
let count = 0;

setInterval(function(){
    circles.forEach((circle) => {
        if(count) {
            circle.src = 'img/circle2.png'
            count++
        } else {
            circle.src = 'img/circle.png'
            count--
        }
        
})
},100)
*/

