function init() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const image = new Image();
    let imgWidth;
    let  imgHeight;
    image.src = 'img/tucan.jpg'; 
    const xWidth = canvas.width;
    const yHeight = canvas.height;
    const scale = 1.05;
    const yPosition = -4.5;
    const xDistance = 0.75;
    let xPosition = 0;
    let xReset;
    let yReset; 
    //Ésta función controla la ejecución de los métodos del objeto 
    function controls() {
        const imagePrincipal = new objectImage(image, imgWidth, imgHeight);
        imagePrincipal.changePositions();
        imagePrincipal.draw();
        window.requestAnimationFrame(controls);
    }

    //Se crea una clase para el objeto de imagen, con las propiedades
    //de la instancia, en este caso la única imagen 
    class objectImage {
        constructor(image, imgWidth, imgHeight) {
            this.image = image,
            this.imgWidth = imgWidth,
            this.imgHeight = imgHeight
        } 
        //Esté método cambia la posción de la imagen de acuerdo al ancho
        //y reseta los valores, se ejecuta antes de que carga la imagen y cuando finaliza se detiene
        changePositions() {
            image.onload = function() {
                imgWidth = image.width * scale;
                imgHeight = image.height * scale;
                
                if (imgWidth > xWidth) {
                    xPosition = xWidth - imgWidth;
                }
                if (imgWidth > xWidth) {
                    xReset = imgWidth;
                } else {
                    xReset = xWidth;
                }
                if (imgHeight > yHeight) {
                    yReset = imgHeight;
                } else {
                    yReset = yHeight;
                }
            }
        }
        //Éste método crea la imagen
        draw() {
            ctx.clearRect(0, 0, xReset, yReset); 
            
            if (imgWidth <= xWidth) {
                if (xPosition > xWidth) {
                    xPosition = -imgWidth + xPosition;
                }
                if (xPosition > 0) {
                    ctx.drawImage(image, -imgWidth + xPosition, yPosition, imgWidth, imgHeight);
                }
                if (xPosition - imgWidth > 0) {
                    ctx.drawImage(image, -imgWidth * 2 + xPosition, yPosition, imgWidth, imgHeight);
                }
            }
            else {
                if (xPosition > (xWidth)) {
                    xPosition = xWidth - imgWidth;
                }
                if (xPosition > (xWidth-imgWidth)) {
                    ctx.drawImage(image, xPosition - imgWidth + 1, yPosition, imgWidth, imgHeight);
                }
            }
            ctx.drawImage(image, xPosition, yPosition,imgWidth, imgHeight);
            xPosition += xDistance;
        }    
    }
    window.requestAnimationFrame(controls); 
}
init();