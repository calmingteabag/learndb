# Como deploy express no heroku

Não é preciso configurar muito, só prestar atenção em alguns detalhes

## Paths

A dor de cabeça por causa do '__dirname'. Em commonJS, ele teoricamente lê o caminho até
o arquivo que vc precisa e pronto. Usando 'import' vc perde isso. A solução é simular
o comportamento do '__dirname' assim:

```
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```
import.meta.url retorna o caminho completo de onde ele ta sendo chamado. Ai vc só
corta a parte que vc quer com o path.dirname.

IMPORTANTE

se o projeto estiver usando require, não é necessario usar import.meta.url e simular o __dirname.
O __dirname já é embutido como padrão no node sem precisar disso.

## Ainda sobre paths

Só lembrando: '../' sobe um diretorio, './' procura no mesmo diretorio

## package.json

Se vc está usando algo do tipo
``` 
"scripts": {
    "test": "jest",
    "run": "nodemon meuapp.js"
},
```

terá que mudar a linha "run" (ou qualquer outro nome que tenha colocado) para
```
"scripts": {
    "test": "jest",
    "start": "node meuapp.js"
},
```

## express

Provavelmente no local, o app deve estar configurado assim:

```
const app = express()
const port = 8000
```
O port deve ser mudado para

```
const app = express()
const port = process.env.PORT || 8000
```

## Sequelize ou orms

Mude o caminho local para usar 'process.env.DATABASE_URL'

## imports

Node não aceita es6 e require ao mesmo tempo
tenha em mente que se um modulo precisar de require, o projeto inteiro tem que ser
mudado para require