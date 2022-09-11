const container = document.querySelector(".container");

x16 = () => {
    for (let i = 0; i < 256; i++){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = "width: 5.6% ; height: 5.6%";
        container.appendChild(piece);
    }
}
x22 = () => {
    for (let i = 0; i < 484; i++){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = "width: 3.9% ; height: 3.9%";
        container.appendChild(piece);
    }
}
x26 = () => {
    for (let i = 0; i < 676; i++){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = "width: 3.2% ; height: 3.2%";
        container.appendChild(piece);
    }
}
x32 = () => {
    for (let i = 0; i < 1024; i++){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = "width: 2.5% ; height: 2.5%";
        container.appendChild(piece);
    }
}
x64 = () => {
    for (let i = 0; i < 4096; i++){
        let piece = document.createElement('div');
        piece.classList.add("piece");
        piece.style.cssText = "width: 1% ; height: 1%";
        container.appendChild(piece);
    }
}


x32()
let pieces = document.querySelectorAll(".piece");
pieces.forEach((piece) => {
    piece.addEventListener('mouseover', () => {
        piece.style.background = "red";
    })
})

                                                 