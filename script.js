function htmlElmstop(){
    let htmlElm=document.getElementById("headerDiv");
    htmlElm.style.backgroundColor="white";
    htmlElm.style.textAlign="left";

    let newBtn=document.createElement("button");
    newBtn.id="cssExp";
   
    let newlink=document.createElement("a");
    newlink.textContent="How to Apply Styles";
    // newlink.setAttribute("href","#htmlELms")

    // newBtn.setAttribute("onCLick",expandDIv())

    newBtn.appendChild(newlink)
    htmlElm.appendChild(newBtn);
    
}



