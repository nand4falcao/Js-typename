function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    fill("red");
    stroke("black")
    textSize(40);
    textAlign(CENTER,CENTER);
    
    
    let maximo = width;
    let minimo = 0;
    let palavra = "youtube";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    text(parcial,200,200);
    
  //if(mouseX < 50) {
    //  let palavra = "y";
      //text(palavra, 200, 200);
  //} else {
    //  let palavra = "youtube";
      //text(palavra, 200, 200);
  }