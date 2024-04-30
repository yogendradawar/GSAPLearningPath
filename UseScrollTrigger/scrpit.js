// gsap.from("#page1 #box",{
//     scale : 0 ,
//     delay : 1,
//     duration : 2,
//     rotate : 360,
// })

// How to show the animation on second only when going to that page Or Active the animation
    //To maintain that we are Using the ScrollTrigger . 
        //First We have to export that scrolltrigger from gsap web 

    
// gsap.from("#page2 #box",{
//     scale : 0 ,
//     // delay : 1,
//     duration : 2,
//     rotate : 360,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scoller:"body",
//         markers : true,
//         start : "top 50%",
//     }
// })

// gsap.from("#page2 h1",{
//     opacity : 0,
//     duration: 2,
//     x:500,
//     scrollTrigger : {
//         trigger : "#page2 h1",
//         scroller : "body",
//         start : "top 50%",
//         // markers : true,
//     }
// })


gsap.from("#page2 h2",{
    opacity : 0,
    duration: 2,
    x:-500,
    scrollTrigger : {
        trigger : "#page2 h2",
        scroller : "body",
        start : "top 50%",
        // markers : true,
    }
})

gsap.from("#page2 #box",{
    scale : 0,
    opacity : 0,
    duration : 1,
    rotate : 720,
    scrollTrigger : {
        trigger : "#page2 #box",
        scroller : "body",
        start : "top 60%",
        // markers : true,
        end : "top 30%",
        scrub : 2,                //scrub means animation will scroll between start and end.
    }
})


gsap.to("#page2 h1", {
    transform:"translateX(-200%)",
    scrollTrigger : {
        trigger : "#page2 ",   // pin jab bhi lgate hai tb trigger krenge parent ko  
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -150%",
        scrub : 1,
        pin : true,
    }

})