// gsap.to()
// gsap.from()

    // to methods for and to 
    // to -- > inital to final
    // from -- > final to inital  

// gsap.to("Animation element name",{what to is writen inside these box they are return in key value pair})

// gsap.to("#box",{
//     x:1000,                 //direction to move
//     duration : 2,           // duration animation time
//     delay : 1,              // it will start after the delay
//     rotate : 360,           // rotate the element 360 degree
//     backgroundColor:"blue", // write the properties in Camel Case
//     borderRadius : "50%",   // why 50% is written in "" because the % special char so we have  to write it in the ""
//     scale : 0.5,            // size Scalling
// })

// gsap.from("#box2",{
//     x:1000,
//     // y:10,
//     duration:2,
//     delay : 1,
// })


// gsap.from("h1",{
//     opacity : 0,
//     duration : 1,
//     y: 30,
//     delay: 1,
//     stagger : 0.3,      // one by one same targeted element if -1 then last to first
//     repeat:-1,           // repeat it onces more -1 for infinite use 
//     yoyo : true,        // return back to that position,
// })


////////////////////////TimeLine

    // it will run in synchronous way 

// var tl = gsap.timeline();

// tl.to("#box1", {
//     x : 1500,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1
// })

// t1.to("#box2",{
//     x:1500,
//     duration:1.5,
// })


// ------ More About TimeLine 

var t1 = gsap.timeline();

t1.from("h2" , {
    y : -20,
    opacity : 0,
    duration : 1,
    delay : 0.5
})

t1.from("h4",{
    y : -20,
    opacity : 0,
    duration : 1,
    stagger : 0.3,
})


t1.from("h1",{
    y : 20,
    opacity : 0,
    duration : 1,
    scale : 0.2,
})