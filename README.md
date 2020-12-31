# Desafio Greenmile

> Autor: Isaac Ribeiro 

## Objetivo
Criar um mini projeto de automação de testes, utilizando o [Cypress.io](https://github.com/cypress-io), que execute o evento de long click, em um componente web, e consiga validar se o tamanho em escala foi alterado para 225x225 pixels. Em outras palavras, o objetivo é realizar um teste que faça com que o Cypress verifique se um evento de long click sobre um quadrado verde que aparece na tela, faz com que ele expanda seu tamanho.

## Pré-requisitos

1. **Componente web:** https://codepen.io/choskim/pen/RLYebL
2. Utilizar o framework de automação **Cypress**

## Problema

Durante a realização dos testes, foi detectado uma divergência, o Cypress não consegue fazer a verificação do tamanho do quadrado porque o evento de long click não é detectado pela aplicação, o que acarreta um erro (Figura 01). Ao realizar diversas pesquisas na web, foi detectado que esse problema é ocasionado por conta da biblioteca [hammer.js](https://hammerjs.github.io/). Essa biblioteca é uma biblioteca JavaScript que dispara eventos para os gestos realizados em suas aplicações com HTML+JS, ou seja, a hammer.js fica esperando/escutando alguma ação contecer, como por exemplo touch, mouse ou pointerEvents, para disparar um determinado evento. A raiz do poblema está no fato de que a biblioteca hammer.js não consegue reconhecer ações sintéticas feitas através de um outro framework, como o Cypress, o que faz com que não haja o disparo do evento, fazendo com que o evento de expansão do quadrado não seja realizado. 


> Figura 01 - Problema na validação após a ação de long click
![Print 1](https://github.com/isaacribbeiro/Desafio-Greenmile/blob/master/img/print%20screen%20(1).png)


## Solução

A solução encontrada para resolver este problema, foi retirar a importação da biblioteca hammer.js, e adaptar o código do componente para utilizar apenas o JavaScript propriamente dito, conforme o código abaixo. Com isso, o Cypress conseguiu realizar o teste com o long click normalmente, alcançando com o objetivo esperado (Figura 02).

```sh
var square = document.getElementsByClassName("square")[0];

var timer;
const tempo = 500;

const mouseDown = () => {
  timer = setTimeout(function () {
    square.classList.toggle("expand");
  }, tempo);
};

const mouseUp = () => {
  clearTimeout(timer);
};

square.addEventListener("mousedown", mouseDown);
square.addEventListener("mouseup", mouseUp);
```


> Figura 02 - Validação do teste após resolução do problema
![Print 2](https://github.com/isaacribbeiro/Desafio-Greenmile/blob/master/img/print%20screen%20(2).png)


## Execução

Para a execução deste projeto na sua máquina, basta seguir os passos adiante. Vale ressaltar que é necessário que você tenha instalado o Node JS ([Instalar Node JS](https://nodejs.org/en/)).

1. Abrir o terminal e clonar o repositório:

```sh
git clone https://github.com/isaacribbeiro/Desafio-Greenmile.git
```

2. Abrir o terminal na pasta que foi clonada, e digitar o comando a seguir, para instalar as dependências e o Cypress:

```sh
npm install
```

3. Em seguida, digitar o comando a seguir para iniciar o processo de teste com o Cypress:

```sh
npm run cypress:open
```

4, Por fim, basta clicar sobre o teste que vai aparecer na sua tela para que ele seja executado.

## Ferramentas

![Ferramentas](https://github.com/isaacribbeiro/Desafio-Greenmile/blob/master/img/ferramentas.png)
