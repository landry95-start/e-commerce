const bar = document.getElementById('bar');
const nav = document.getElementById('text');

const close = document.getElementById('close');

if (bar) {
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener("click",()=>{
        nav.classList.remove('active');
        });
    };
  
    
/*Sproduct*/

var MainImg = document.getElementById("MainImg");
var smallImg = document.querySelectorAll(".small-img");

smallImg[0].addEventListener("click",()=>{
    MainImg.src=smallImg[0].src;
})

smallImg[1].addEventListener("click",()=>{
    MainImg.src=smallImg[1].src;
})

smallImg[2].addEventListener("click",()=>{
    MainImg.src=smallImg[2].src;
})

smallImg[3].addEventListener("click",()=>{
    MainImg.src=smallImg[3].src;
})
