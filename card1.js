
let mainColorTarget,sibling1, sibling2;
let imgbox;


let mainSizeTarget, sizeParentNode;

function changeImage(imgsrc,imgbox,e){
mainColorTarget = e.target;

getSpans(mainColorTarget);
// console.log(mainTarget,sibling1,sibling2);
mainColorTarget.classList.add('color-active');
sibling1.classList.remove('color-active');
sibling2.classList.remove('color-active');

imgbox = document.getElementById(`${imgbox}`);
imgbox.src = imgsrc;

}



//Getting target siblings
function getSpans(mainColorTarget){
    if(mainColorTarget.nextElementSibling){
        sibling1 = mainColorTarget.nextElementSibling;
        if(sibling1.nextElementSibling){
            sibling2 = sibling1.nextElementSibling;
        }
        else{
            sibling2 = mainColorTarget.previousElementSibling;
    
        }
    }
    else{
        sibling1 = mainColorTarget.previousElementSibling;
        sibling2 = sibling1.previousElementSibling;
    }

}



//Changing size function.
function changeSize(e){
    mainSizeTarget = e.target;
    sizeParentNode = mainSizeTarget.parentNode;
    let spans = Array.from(sizeParentNode.getElementsByTagName('span'));
    // console.log(spans);

    spans.forEach(element=>{
        element.classList.remove('size-active');
    });
    mainSizeTarget.classList.add('size-active');
}

//Image changing function can also implemented like size changing function.