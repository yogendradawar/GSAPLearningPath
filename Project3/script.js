function splittedChar(){
    var h1 = document.querySelector("h1");
    var  h1Text = h1.textContent;
    var splittedText = h1Text.split("");

    let cluster = "";

    hlafValue = splittedText.length / 2;

    splittedText.forEach((ch,idx) => {
        if(idx < hlafValue){
            cluster += `<span class="fHalf">${ch}</span>`
        }
        else{
            cluster += `<span class="sHalf"span>${ch}</span>`
        }
    });

    h1.innerHTML = cluster;
}
splittedChar();

gsap.from("h1 .fHalf",{
    y:80,
    duration : 0.5,
    delay : 0.5,
    stagger : 0.15,
    opacity : 0,

})


gsap.from("h1 .sHalf",{
    y:80,
    duration : 0.5,
    delay : 0.5,
    stagger : -0.15,
    opacity : 0,

})