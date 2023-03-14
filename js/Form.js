class Form {
  constructor() {
    // CRIE OS ELEMENTOS DA CLASSE
    this.imput = createImput("").attribute("placeholder", "Digite seu nome";
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png","ti´tulo do jogo");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    // DEFINA A POSIÇÃO DOS ELEMENTOS
    this.titleImg.position(120, 100);
    this.input.position(widht / 2 - 110, height / 2 - 80); 
    this.playButton.position(widht / 2 - 90, height / 2 - 20);
    this.greeting.position(widht / 2 - 300. height / 2 -100);
  }
  hide() {
   // USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
    this.greeting.hide();
    this.playButton.hide();
    this.inpu.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.playbutto.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = ` Olá ${this.input.value()} </br>espere outro jogador entrar...´;
      this.greeting.html(message);
      player.name = this.in´put.value();
      player.index = 1;        });
      

   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementsPosition();
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.handleMousePressed();
  }
}
