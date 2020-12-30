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
![]()

*O projeto desenvolvido é o proposto pela [NextLevelWeek#3](https://nextlevelweek.com/?utm_source=convertkit&utm_medium=email&utm_campaign=NLW3+Workshops&utm_term=Leads+OmniStack&utm_content=Workshop+5) da Rocketseat.* 

## Versão Web

![Happy-Web.gif](https://media.giphy.com/media/JAwSpBWaquHNFGhsJQ/giphy.gif)

## Versão Mobile

![Happy-Mobile.gif](https://github.com/SusanaMCosta/Happy/blob/main/happy-mobile.gif)

## Informações

O Happy é uma aplicação que conecta pessoas à orfanatos/instituições que cuidam de outras pessoas. Para visualizar onde esses orfanatos se localizam e quais estão mais perto de sua localização, basta clicar no botão no canto inferior a direita da tela inicial; a partir daí, o usuário é direcionado para um mapa contendo as localizações dos orfanatos, sinalizadas com um marcador com a logo da aplicação. Uma das facilidades do Happy, é que ele permite que o usuário cadastre novas instituições, bastando clicar no botão que também se localiza na parte inferior a direita da página.  

## Ferramentas

![ferramentas.png](https://github.com/SusanaMCosta/Happy/blob/main/fer.png)

## Instalação e Start

Cada parte do projeto tem suas dependências e é necessário instalá-las individualmente antes da execução. Para isso, certifique-se de que tenha o [NPM](https://www.npmjs.com/) ou o [YARN](https://yarnpkg.com/) instalado em seu ambiente, além, é claro, o repositório clonado em seu ambiente.

Clone o repositório com:

```sh
> git clone https://github.com/SusanaMCosta/Happy.git
```

As demonstrações utilizam YARN por padronização, mas, caso use NPM, basta substituir onde estiver escrito ```yarn``` por ```npm```.

**Instalando dependências do projeto web:**

```sh
> cd happy/web
> yarn install
```

Para executar o projeto web completo é necessário ter um token de autenticação da API do Mapbox. Acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo ```.env``` e coloque seu token como valor da chave ```REACT_APP_MAPBOX_TOKEN```.

Exemplo:
```sh
> REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agora starte o projeto em seu ambiente com:
```sh
> yarn start
```

Acesse: ```http://127.0.0.1:3000/``` para visualizar.

**Instalando dependências do projeto backend:**
```sh
> cd happy/backend
> yarn install
```

Para executar o projeto **backend** é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:
```sh
> yarn typeorm migration:run
> yarn dev
```

Acesse: ```http://127.0.0.1:3333/``` para visualizar.
