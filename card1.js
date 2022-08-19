//1). Variables for the change color/image function
let mainColorTarget, colorParentNode, imgbox;

//2). Variables for the size change function
let mainSizeTarget, sizeParentNode;


//Image/Color chnaging function
function changeImage(imgsrc,imgbox,e){

mainColorTarget = e.target;
colorParentNode = mainColorTarget.parentNode;

let colorSpans = Array.from(colorParentNode.getElementsByTagName('span'));

colorSpans.forEach(element=>{
    element.classList.remove('color-active');
});

mainColorTarget.classList.add('color-active');
imgbox = document.getElementById(`${imgbox}`);

imgbox.src = imgsrc;

}




//Changing size function.
function changeSize(e){
    mainSizeTarget = e.target;
    sizeParentNode = mainSizeTarget.parentNode;
    let sizeSpans = Array.from(sizeParentNode.getElementsByTagName('span'));
    // console.log(sizeSpans);

    sizeSpans.forEach(element=>{
        element.classList.remove('size-active');
    });
    mainSizeTarget.classList.add('size-active');
}
