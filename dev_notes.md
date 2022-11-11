### Funcionamento Express

## Basico

Primeiro vc tem que lembrar como funciona o express. Vc tem um
arquivo principal e basicamente nele está assim:

```
const express = require('express)
const app = express()

app.use(coisa_1)
app.use(coisa_2)

app.listen(8000, () => { "frase de servidor rodando" })
```

## View Engine

Provavelmente vc vá renderizar algumas paginas html. Pra isso vc precisa de um "view engine"
```
const path = require('path')

app.set('views', path.join(__dirname, '/static/html'));
app.set('view engine', 'ejs')
```

A segunda linha diz pro express usar o 'ejs' como view engine. Existem varias outras, livre escolha.

A primeira fala pro express que o caminho views (que é o padrão) de ontem tem suas htmls está nesse caminho "/static/html". 

"__dirname" retorna o caminho completo de onde ele ta sendo chamado.

Se o seu "index.js" estiver na raiz, "__dirname" retorna o caminho até lá. "path.join()" existe para juntar esse primeiro trecho do caminho para o lugar que realmente estão seus htmls.

## Rotas

Quando vc abre o navegador, o express olha para o endereço e tenta "abrir" o endereço correspondente.

Ex, vc está acessando https://seusite.com/login

O express vai pegar o "/login" e vai buscar nas rotas se existe alguma coisa que bata. Se sim, ele vai processar.

# Definindo Rotas

Primeiro vc tem que definir um arquivo de rotas
```
const express = require('express')
const myrouter = express.Router()

myrouter.use(express.static(path.join(__dirname, '../static')))
```

Primeiras duas linhas, "import" express e instancia
um novo roteador.

Terceira linha diz aonde estão os arquivos estaticos (htmls, etc) que ele vai usar.

# Views

Depois que o usario acessa o '/login' digitando no navegador o express vai tentar processar a rota. 
Vc tem que definir o que ele vai fazer:

```
myrouter.get('/login', (req, res) => {
    try {
        res.render(path.join(__dirname, '../static/html/index'), { status: "" })
    } catch (err) {
        console.log(err)
    }
})

```
Ignorando o try/catch, que ele está fazendo é, se
o usuario acessar "/login", responda renderizando esse html (index) que esta nesse local __dirname + '../static'

myrouter.get é o metodo que se está usando para pegar informacoes. get pede a info para o servidor mandando no proprio endereço do site (à vista de todos)

se preciso, existe myrouter.post, que faz a informação ir "escondido" por assim dizer. se usa post, toda vez que usuario preenche algum tipo de "formulario"

res é que tipo de resposta o express vai dar quando vem uma requisicao http (append, cookie, sendFile, etc)

req representa o request http. O que é? Quando vc acessa uma pagina, existe informacoes sobre a pagina(usuario, cookie, post de formularios, etc). Toda essa informação vem para o req.
