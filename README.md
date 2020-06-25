# Rainbow

Acesse a página clicando [aqui](https://social-network-c1b66.firebaseapp.com/)

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Planejamento do Projeto](#2-planejamento-do-projeto)
* [3.Aprendizado](#3-aprendizado)
* [4. Tecnologias Utilizadas](#4-tecnologias-utilizadas)
* [5. Autoria](#5-autoria)
* [6. Guias, dicas e leituras
  complementares](#6-guias-dicas-e-leituras-complementares)

***

## 1. Prefácio

A Rede Social "Rainbow" surgiu com a intenção de conectar pessoas LGBTQI+ num ambiente de descontração seguro.
Nessa aplicação, quando logado, é possível que o usuário interaja com os demais por meio de publicação de fotos e texto, comentários e curtidas.
Caso o usuário ainda não tenha uma conta, oferecemos a possibilidade de logar com o Google ou de se registrar a partir de algum outro e-mail.

## 2. Planejamento do projeto

A nível de organização, o nosso projeto foi dividido por sprints e para guiar nosso trabalho, contamos com a estruturação de Histórias de Usuário e só avançamos conforme a HU anterior estivesse totalmente usual e sem nenhum bug.

#### História 1
Como definição de pronto dessa primeira história, decidimos que o usuário poderia escolher entre criar uma conta definindo e-mail e senha ou logar com o Google.

Caso escolha criar uma conta, na tela de registro o usuário pode definir o nome que irá aparecer no display, nas publicações e na interação por comentários.
Ele deve inserir um e-mail e uma senha válidos, caso algum dos campos esteja inválido, a página exibe uma mensagem de erro e solicita que o usuário tente novamente. Quando o cadastro do usuário é feito com sucesso, automaticamente ele é direcionado para a página de login. 

Na página de login, se o usuário insere algum e-mail inválido ou digita uma senha errada, novamente a página exibe uma mensagem de erro para que ele tente novamente. Quando obtém sucesso tanto no login com o Google, quanto no login por e-mail e senha, o usuário é automaticamente direcionado para o Feed da rede social.

#### História 2

As definições de pronto dessa história consistem no usuário conseguir criar, modificar no mesmo lugar (in place), deletar apenas suas publicações, visualizar todos os posts em ordem cronológica - do mais recente ao mais antigo, dar likes, comentar nas publicações e visualizar quantos likes e comentários tem em cada publicação. 

Além disso, o usuário também consegue alterar sua foto de perfil quando logado na página.

#### Informações adicionais

* A aplicação foi pensada no modelo _mobile first_ e tornamos a página responsiva para telas desktop;
* A aplicação foi construída em uma Single Page Aplication;
* Para armazenar os dados de usuário e posts, foi utilizado o banco de dados Firebase. Através dessa tecnologia, o usuário consegue deslogar e atualizar a página sem perder os dados que publicou e visualizou anteriormente;
* Para ter um direcionamento da identidade visual da página, trabalhamos com protótipos de alta fidelidade.


## 3. Aprendizado

* Manipulação da maior parte do layout da página em Flexbox - CSS
* Uso de callbacks, consumo de Promises e uso de ES Modules - JS
* Firebase Authentication, Firestore, onSnapshot, onAuthStateChanged e Firebase Hosting - Firebase
* Colaboração por Git e GitHub.

## 4. Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Firebase
* Node.js
* Trello
* Figma

### Desenvolvido por

[Nathalia Monalisa](https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fgithub.com%2Fnmonalisa)

[Renata Almeida](https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fgithub.com%2Frenataalmeids%2F)

[Thalita Gonçalves](https://github.com/thalitagoncalves/)

#### O projeto foi proposto no Bootcamp @Laboratoria.


