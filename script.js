var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var img = document.querySelector("#img")


main.addEventListener('mousemove',function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.7,
        ease:"back.out"
    })
})

img.addEventListener('mouseenter',function(dets){
    cursor.innerHTML="This is Pikachu"
    gsap.to("#cursor",{
            scale:5,
            duration:0.6,
            backgroundColor:"#fff",
            
    })
})

img.addEventListener('mouseleave',function(dets){
    cursor.innerHTML=""
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.7,
        ease:"back.out",
        scale:1.2,
        backgroundColor:"rgb(77, 77, 72)",
        // border:"3px solid slategray"
    })
})