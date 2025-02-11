function moveRandomEl(Element){
    Element.style.position="absolute";
    Element.style.top=Math.floor(Math.random()*90+5)*"%";
    Element.style.left=Math.floor(Math.random()*90+5)*"%";
}
const moveRandom=document.querySelector("#tenor-gif-embed");
moveRandom.addEventListener("mouseenter",function(e){
    moveRandomEl(e.target);  
})