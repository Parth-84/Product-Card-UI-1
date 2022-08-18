let img = document.querySelector('#product-img');
let img2 = document.querySelector('#product-img2');
let img3 = document.querySelector('#product-img3');

let color1 = document.getElementById('c1');
let color2 = document.getElementById('c2');
let color3 = document.getElementById('c3');

let size1 = document.getElementById('s1');
let size2 = document.getElementById('s2');
let size3 = document.getElementById('s3');
let size4 = document.getElementById('s4');

let allsizespan =  document.querySelectorAll('.size-class');
let allsizespan2 =  document.querySelectorAll('.size-class2');
let allcolorspan =  document.querySelectorAll('.color-class');
let allcolorspan2 =  document.querySelectorAll('.color-class2');
console.log(allsizespan);  
console.log(allcolorspan);  
function changeImage2(params){
    img2.src = params;
}
function changeImage3(params){
    img3.src = params;
}

function addClass(event){
    allsizespan[0].classList.remove('size-active');
    allsizespan[1].classList.remove('size-active');
    allsizespan[2].classList.remove('size-active');
    allsizespan[3].classList.remove('size-active');
    let x = event.currentTarget;
    x.className += " size-active";
}
function addClass2(event){
    allsizespan2[0].classList.remove('size-active');
    allsizespan2[1].classList.remove('size-active');
    allsizespan2[2].classList.remove('size-active');
    allsizespan2[3].classList.remove('size-active');
    let x = event.currentTarget;
    x.className += " size-active";
}
function addColorClass(event){
    allcolorspan[0].classList.remove('color-active');
    allcolorspan[1].classList.remove('color-active');
    allcolorspan[2].classList.remove('color-active');
    let x = event.currentTarget;
    x.className += " color-active";
}
function addColorClass2(event){
    allcolorspan2[0].classList.remove('color-active');
    allcolorspan2[1].classList.remove('color-active');
    allcolorspan2[2].classList.remove('color-active');
    let x = event.currentTarget;
    x.className += " color-active";
}

color1.addEventListener('click',()=>{
    img.src = './Images/card1/card1_1.png';
    color1.classList.add('color-active');
    color2.classList.remove('color-active');
    color3.classList.remove('color-active');
    
});
color2.addEventListener('click',()=>{
    img.src = './Images/card1/card1_2.png';
    color1.classList.remove('color-active');
    color2.classList.add('color-active');
    color3.classList.remove('color-active');
});
color3.addEventListener('click',()=>{
    img.src = './Images/card1/card1_3.png';
    color1.classList.remove('color-active');
    color2.classList.remove('color-active');
    color3.classList.add('color-active');
});


size1.addEventListener('click',()=>{
    size1.classList.add('size-active');
    size2.classList.remove('size-active');
    size3.classList.remove('size-active');
    size4.classList.remove('size-active');
    
});
size2.addEventListener('click',()=>{
    size1.classList.remove('size-active');
    size2.classList.add('size-active');
    size3.classList.remove('size-active');
    size4.classList.remove('size-active');
});
size3.addEventListener('click',()=>{
    size1.classList.remove('size-active');
    size2.classList.remove('size-active');
    size3.classList.add('size-active');
    size4.classList.remove('size-active');
});
size4.addEventListener('click',()=>{
    size1.classList.remove('size-active');
    size2.classList.remove('size-active');
    size3.classList.remove('size-active');
    size4.classList.add('size-active');
});

