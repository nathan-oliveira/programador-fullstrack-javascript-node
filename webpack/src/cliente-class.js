export default class Cliente {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá tudo bem tudo bem meu nome é ${this.nome}!`)
  }
}