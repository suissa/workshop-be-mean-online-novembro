

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

//Inserindo diretamente via parametro
db.teste.insert({a: true})

//Inserindo via variável
var json = {b: 'TESTE'}
db.teste.insert(json)

```

Quando usamos o comando `use` ele muda nossa database e aponta ela para a variável `db` usada no inicio dos comandos, então ela sempre apontará para a database atual, como podemos ver executando apenas seu nome:

```
db
workshop-be-mean

```
*Dica: instale o mongo-hacker, ver no github, manualmente*


```
db.teste.find()
{
  "_id": ObjectId("546142385b9f2b586cb31d06"),
  "a": true
}
{
  "_id": ObjectId("546142665b9f2b586cb31d07"),
  "b": "TESTE"
}
```


###ObjectId

Você deve ter percebido esse campo após listarmos os objetos da nossa coleção

http://docs.mongodb.org/manual/reference/object-id/

Para apagarmos os dados dessa coleção de teste possuímos 2 comandos: `remove` e `drop`.

O `remove` apenas apaga os dados, porém a coleção continua existindo, já com o `drop` ele apaga a coleção inteira, como podemos ver abaixo:

```
suissacorp(mongod-2.4.8) workshop-online-novembro> db.teste.remove()
Removed 2 record(s) in 1ms
suissacorp(mongod-2.4.8) workshop-online-novembro> db.teste.find()
Fetched 0 record(s) in 0ms -- Index[none]
suissacorp(mongod-2.4.8) workshop-online-novembro> show collections
system.indexes
teste
suissacorp(mongod-2.4.8) workshop-online-novembro> db.teste.drop()
true
suissacorp(mongod-2.4.8) workshop-online-novembro> show collections
system.indexes
suissacorp(mongod-2.4.8) workshop-online-novembro> 

```








