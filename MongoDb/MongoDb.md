

#MongoDb
##Instalação

###Download


Para instalar o MongoDb, após descompactarmos ele, precisamos criar a pasta `/data/db` para que ele persista localmente seus dados, essa pasta é a padrão, você pode mudar a localização dessa pasta via linha de comando: 

```
mongod --dbpath /minha/pasta
```

*Caso você esteja no Windows e não adicionou a pasta `bin` do MongoDb no seu `PATH`, terá que executar os binários localmente:*

```
cd /Pasta_do_MongoDb/bin
.\mongod
```



###MacOs

```
brew install mongodb
```

###Linux

```
apt-get install mongodb
```


##Console

Para interagirmos com o MongoDb via terminal precisamos rodar o binário

*Caso você esteja no Windows e não adicionou a pasta `bin` do MongoDb no seu `PATH`, terá que executar os binários localmente:*

```
cd /Pasta_do_MongoDb/bin
.\mongo
```


##Mão na massa


Para criar uma database usamos o comando `use` que cria uma database nova ou usa um já existente.

```
use workshop-be-mean
```

Após criamos a database vamos listá-la:

```
show dbs
```

Você deve ter notado que a database `worksop-be-mean` não foi criada né? Porque o MongoDb só irá realmente criar sua database quando você inserir um objeto em um coleção. Então vamos fazer isso:

```
db.teste.insert({a: true})
```

Listamos novamente com `show dbs` e voiala!

Perceba que a sintaxe de um comando no MongoDb é:

```
database.coleção.função()

db.teste.insert()
```

Quando usamos o comando `use` ele muda nossa database e aponta ela para a variável `db` usada no inicio dos comandos, então ela sempre apontará para a database atual, como podemos ver executando apenas seu nome:

```
db
workshop-be-mean

```
*Dica: instale o mongo-hacker, ver no github, manualmente*







