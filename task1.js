let image = document.querySelectorAll("img");
let copy;
for(let item of image){
    item.addEventListener("mouseenter" ,function(e){
        copy=this.cloneNode(true);
        console.log(copy);
        document.body.appendChild(copy);
        copy.classList.add("copied");
        copy.style.top = e.pageY + "px"
        copy.style.left = e.pageX + "px"
    })
    item.addEventListener("mouseleave" , function(e){
        document.body.removeChild(copy)
    })
    item.addEventListener("mousemove" , function(e){
        copy.style.top = e.pageY +10+ "px"
        copy.style.left = e.pageX +10+ "px"
    })
}