# Google Sheets Query Finder

Pequeno tutorial de como criar uma fazer um sistema de busca de uma base de dados no Google Sheets usando a [Google Sheets API](https://developers.google.com/sheets/api/guides/concepts).

## Base de teste

Para testar o conceito do exemplo será utilizada a base de dados [Dark Souls 3 Weapons](https://www.kaggle.com/datasets/l3llff/-dark-souls-3-weapon), disponível no **Kaggle**. A base contém informações sobre as armas do jogo **Dark Souls III** com um total de 287 armas e 17 colunas. A base de dados pode ser encontrada [aqui](https://www.kaggle.com/datasets/l3llff/-dark-souls-3-weapon).

Esta base de dados foi escolhida por ser pequena, de simples entendimento e está bem documentada. O arquivo original do Kaggle está no formato CSV e tem a descrição de cada coluna (em inglês). Algumas dessas colunas serão utilizadas nesse exemplo.

<img src="https://i.ibb.co/mcMQ6W0/d9vaiq1-535a73db-2761-4750-82c2-dc433c669f38.png" alt="Imagem das armas da base de dados utilizada neste exemplo" style="zoom:50%;" />

> Imagem de um conjunto de armas do dataset escolhido para este exemplo. **Fonte:** [Dark Soul 3 Weapons (Kaggle)](https://www.kaggle.com/datasets/l3llff/-dark-souls-3-weapon).

A Database foi salva num arquivo **Google Sheets** e foi tornada **pública** através do link abaixo:

> https://docs.google.com/spreadsheets/d/1-eeEwPbFubO4cYiIerHPaB2BN90sihb7sOTvekqa5Iw/edit?usp=sharing

## Autenticar a Google API

Para trabalhar com o Google Sheets é necessário criar uma API específica para aquela tabela



## Aplicativo Next JS

Para acessar os dados da Database será criado um _Crud_ (Um site) através da tecnologia **Next JS**\* como _front end_ e _node js_ como backend

> \* Na prática pode-se utilizar qualquer tecnologia web que permita uma programação razoável, eu escolhi o Next JS

Seguiremos os seguintes passos:

1. Criar um projeto de aplicativo Next 
```bash
npx create-next-app google-sheet-dashboard
```
2. Instalar o pacote do Google API para simplificar o processo de autenticação e acesso a planilha

```bash
npm install googleapis
```

