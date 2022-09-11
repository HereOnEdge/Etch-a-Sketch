const container = document.querySelector(".container");
let pickedColor = document.querySelector("#color-picker")
let pickColorVal = pickedColor.value;
let eraser = document.querySelector("#eraser");
let clear = document.querySelector("#clear");

xCustom = (x) => {
    for(let i = 0; i < x*x; i++ ){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        let dimension = (100 / (x*x)) * x;   
        piece.style.cssText = `width: ${dimension}%` ; `height: ${dimension}%`;
        container.appendChild(piece);
    }
}

xCustom(10)

let pieces = document.querySelectorAll(".piece");

eraser.addEventListener("click",() => {
    pieces.forEach((piece) => {
        piece.addEventListener("mouseover" , () => {
            piece.style.background = "#ffffff"           
        })
    })
})
pickedColor.addEventListener("change", () => {
    pickColorVal = pickedColor.value;
    pieces.forEach((piece) => {
        piece.addEventListener("mouseover", () => {
            piece.style.background = `${pickColorVal}`;
        })
    })
})
pickedColor.addEventListener("click", () => {
    pickColorVal = pickedColor.value;
    pieces.forEach((piece) => {
        piece.addEventListener("mouseover", () => {
            piece.style.background = `${pickColorVal}`;
        })
    })
})


pieces.forEach(Draw = (piece) => {
    piece.addEventListener('mouseover', () => {
        piece.style.background = `${pickColorVal}`;
    })
})
clear.addEventListener("click", () => {
    pieces.forEach((piece) => {
        piece.style.background = "#ffffff";
    })
})







                                                 