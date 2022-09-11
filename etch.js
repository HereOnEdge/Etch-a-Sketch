let container = document.querySelector(".container");
let pickedColor = document.querySelector("#color-picker");
let pickColorVal = pickedColor.value;
let backgroundColor = document.querySelector("#background-color");
let pickBackColor = backgroundColor.value;
container.style.background = `${pickBackColor}`;
let eraser = document.querySelector("#eraser");
let clear = document.querySelector("#clear");
let draw = document.querySelector("#drawer");
let customRange = document.querySelector("#custom-size");
let rangeOutput = customRange.value
let rangeContainer = document.createElement("span")
rangeContainer.classList.add("range-container");
let label = document.querySelector("label")
rangeContainer.textContent = `${rangeOutput}x${rangeOutput}`; 
label.appendChild(rangeContainer);
let mainHTMl = document.querySelector("main");


xCustom = (x) => {
    if(container.classList.value !== "container"){
        console.log("its working")
        container = document.createElement("div");
        container.classList.add("container");
        container.style.background = `${pickBackColor}`;
        mainHTMl.insertBefore(container, document.querySelector(".options"))
    } else {
        console.log("not working")
    }
    let dimension = (100 / (x*x)) * x;
    for(let i = 0; i < x*x; i++ ){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = `width: ${dimension}%`;
        container.appendChild(piece);
    }
    let pieces = document.querySelectorAll(".piece");
    eraser.addEventListener("click",() => {
        pieces.forEach((piece) => {
            piece.addEventListener("mouseover" , () => {
                piece.style.background = `${pickBackColor}`;
            })
        })
    })
    backgroundColor.addEventListener("change", () => {
        pickBackColor = backgroundColor.value;
        container.style.background = `${pickBackColor}`;
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
    
    pieces.forEach((piece) => {
        piece.addEventListener('mouseover', () => {
            piece.style.background = `${pickColorVal}`;
        })
    })
    clear.addEventListener("click", () => {
        pieces.forEach((piece) => {
            piece.style.background = `${pickBackColor}`;
        })
    })
    draw.addEventListener("click", () => {
        pieces.forEach((piece) => {
            piece.addEventListener('mouseover', () => {
                piece.style.background = `${pickColorVal}`;
            })
        })
    })


}
xCustom(rangeOutput)

customRange.addEventListener("change", () => {
    rangeOutput = customRange.value;
    rangeContainer.textContent = `${rangeOutput}x${rangeOutput}`;
    container.remove();
    container.classList.toggle("container")
    console.log(container.classList)
    xCustom(rangeOutput);
})
// customRange.addEventListener("click", xCustom(rangeOutput))
// customRange.addEventListener("change", xCustom(rangeOutput))



