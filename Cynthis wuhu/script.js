const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })

    tl.from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(){
        document.querySelector("circle").style.transform = 'translate(${dets.clientX}px, ${dets.clientY})'
    })
}

circleMouseFollower();
firstpageAnim();

document.querySelectorAll(".elem")
.forEach(function(elem){
elem.addEventListener("mousemove", function(dets){
console.log("helloo ");
})
});

document.querySelectorAll(".elem")
.forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        console.log("hello");
    })
})