const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imagen = new Image();

imagen.src = 'img/tucan.jpg';
const xPosicion = canvas.width;
const yPosicion = canvas.height;
const velocidad = 30; 
const escala = 1.05;
const y = -4.5;
const dx = 0.75;
let imgWidth;
let  imgHeight;
let x = 0;
let resetearX;
let resetearY;


imagen.onload = function() {
    imgWidth = imagen.width * escala;
    imgHeight = imagen.height * escala;
    
    if (imgWidth > xPosicion) {
        x = xPosicion - imgWidth;
    }
    if (imgWidth > xPosicion) {
        resetearX = imgWidth;
    } else {
        resetearX = xPosicion;
    }
    if (imgHeight > yPosicion) {
        resetearY = imgHeight;
    } else {
        resetearY = yPosicion;
    }
    return setInterval(draw, velocidad);
}

function draw() {
    ctx.clearRect(0, 0, resetearX, resetearY); 
    
    if (imgWidth <= xPosicion) {
        if (x > xPosicion) {
            x = -imgWidth + x;
        }
        if (x > 0) {
            ctx.drawImage(imagen, -imgWidth + x, y, imgWidth, imgHeight);
        }
        if (x - imgWidth > 0) {
            ctx.drawImage(imagen, -imgWidth * 2 + x, y, imgWidth, imgHeight);
        }
    }
    else {
        if (x > (xPosicion)) {
            x = xPosicion - imgWidth;
        }
        if (x > (xPosicion-imgWidth)) {
            ctx.drawImage(imagen, x - imgWidth + 1, y, imgWidth, imgHeight);
        }
    }
    ctx.drawImage(imagen, x, y,imgWidth, imgHeight);
    x += dx;
}
