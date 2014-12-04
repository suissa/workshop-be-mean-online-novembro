##AngularJs

###INTRO - Teoria

##Iniciando

Para iniciar uma aplicação com o AngularJs possuímos 3 formas: 

- ng-app
- ng-app + angular.module
- angular.bootstrap

Vamos usamos a diretiva `ng-app` como visto no exemplo do exercício 01:

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Workshop Be MEAN</title>
</head>
<!-- Iniciando minha aplicação com ng-app -->
<body data-ng-app>
  <!-- Parseando essa expressão -->
    {{ 2 + 2}}
    <script src="angular.min.js"></script>
</body>
</html>
```

Mas usando apenas dessa forma nós não temos controle sobre nossa aplicação então para isso vamos nomear nossa aplicação e criar um módulo para ela como visto abaixo no exercício 02:

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Workshop Be MEAN</title>
</head>
<html>
  <!-- Inicio minha aplicação com um nome -->
  <body data-ng-app="workshopBeMEAN">

    Olá mundo, 2 + 2 = {{ 2 + 2}}

    <script src="angular.min.js"></script>
    <script>
    // iniciando um módulo com o nome da nossa aplicação
      angular.module('workshopBeMEAN', []);
    </script>
  </body>
</html>
```


###Two way data-binding

Agora vamos entrar no mundo do two way data-binding, mas o que seria isso?
Basicamente ele trabalha amarrando um elemento da `view` com o seu `model` onde quando a `view` mudar de valor automagicamente o valor do `model`. E como isso é feito?

Infelizmente com dirty checking, onde em cada ciclo do `$digest` o Angular compara todos os valores se mudaram ele atualiza onde é necessário. Isso acarreta problemas de performance quando você possuir mais de 2000 objetos sendo "observados".

Já que quando criamos uma variável no `$scope` ou um objeto na view esse valor já estará sendo "observado" o número de objetos pode crescer sem muito controle e comprometer sua performance, para isso existe a técnica de [bind Once](https://github.com/tadeuszwojcik/angular-once).

Vamos voltar ao nosso exercício 03:

```
<body data-ng-app="workshopBeMEAN">

    <!-- Adicionamos um input para inserirmos um valor para nome
        adicionamos o atributo nd-model para linkarmos o valor
        na váriavel do nosso escopo local $scope.nome
        Ou seja
        Estou criando uma variável nome
     -->
    <label for="nome">Seu nome: 
      <input type="text" data-ng-model="nome"> 
    </label>


    <!-- Utilizamos o valor de nome que está no nosso escopo local -->
    Olá mundo, {{ nome }}
    <!-- O valor em {{ nome }} é atualizado automagicamente através
        do two-way data binding
    -->

    <script src="angular.min.js"></script>
    <script>
      angular.module('workshopBeMEAN', []);

    </script>
  </body>
```

Então agora eu adicionei um `input` que fará o papel do nosso `model` e adicionei um texto chamando a variável `nome` que fará o papel da nossa `view`.

Logo quando eu modificar o valor do meu `model` automagicamente a `view` será atualizada. Para ver isso funcionando basta digitar qualquer coisa no input.



