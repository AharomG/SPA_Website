import { createImg } from "./img.js";

export function imgRow(...img){
    let $imgRow = document.createElement("div");
    $imgRow.id = "imgRullete";
    let $imgContainer = document.createElement("div");
    $imgContainer.classList.add("imgs");
    img.forEach( (el,i) => $imgContainer.appendChild(createImg(`imgRullete${i}`,el,"Image")));
    let lastImg = $imgContainer.querySelectorAll("img");
    lastImg[0].setAttribute("class","Active");
    $imgRow.appendChild($imgContainer);
    let $option = createImg(`rullete0`,"app/assets/arrowRight.png","Next");
    $imgRow.appendChild($option);
    $option = createImg(`rullete1`,"app/assets/arrowLeft.png","Before");
    $imgRow.appendChild($option);    

    return $imgRow;
}