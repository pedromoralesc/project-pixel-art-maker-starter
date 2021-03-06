// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const canvas = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");
const heigh = document.getElementById("inputHeight");
const weight = document.getElementById("inputWeight");
const pickColor = document.getElementById("colorPicker");



function makeGrid(inputHeight,inputWeight) {
    while (canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
    for(let rows = 0; rows < inputHeight; rows ++){
        const trs = document.createElement("TR");
        canvas.appendChild(trs);
        
        for( let columns = 0 ; columns <  inputWeight; columns ++){
            const tds = document.createElement("TD");
            trs.appendChild(tds);
            
        }
    }
}
size.addEventListener("submit", function(e){
    e.preventDefault();
    makeGrid(heigh.value , weight.value);
}, false);

function respondToTheClick(e){
    if(!e.target.style.backgroundColor){
        e.target.style.backgroundColor = pickColor.value
    }else{
        e.target.removeAttribute("style");
    }
    
}
canvas.addEventListener('click', respondToTheClick);