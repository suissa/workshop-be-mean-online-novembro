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






