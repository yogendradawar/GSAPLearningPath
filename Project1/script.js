var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        // ease: "back.out",
    });
});

image.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "view More"
    gsap.to(cursor,{
        scale : 4,
        backgroundColor : "#07070794",
    })
})


image.addEventListener("mouseleave",()=>{
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale : 1,
        backgroundColor : "#fff",
    })
})