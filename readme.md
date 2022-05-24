# LearnDB

Um app que fiz para mim mesmo, para servir como uma espécie de manual de referencias para coisas que uso esporádicamente e tem detalhes que são esquecidos com o tempo (ou com o não uso). Além do desafio de não conhecer as ferramentas - Desconhecia expressJS até esse projeto -, coloquei um desafio de tempo, de ter um app minimamente funcional em quinze dias. É claro que sendo assim, a parte visual acabou sendo prejudicada.

Coisas que aprendi com esse projeto:

- Aprendi o framework de testes (JEST) e consegui aplicar ele para checar se o programa esta criando os campos certos no model, tambem aprendi, embora fora desse projeto, a testar os valores de retorno das funções. Mas nem todas as funções retornam um valor, algumas só executam algo, por exemplo, mudam o valor de um DOM html. Como checar se esse tipo de função via JEST?

- O modelo de renderização segue muito o padrão django, de renderizar os htmls. É bem simples mas o modelo que se usa mais, pelo pouco que conheço, é servir uma html no backend, com um front pegando as informações do back e modificando o html conforme o usuario navega. Ainda desconheço os frameworks de front (react, angular), então a parte prática ainda é uma caixa preta, mas em um futuro proximo pretendo aprender um deles.

- Checar se todos os modulos aceitam ECMA imports, porque tive que reescrever o projeto inteiro em 'require' por conta disso.

- O deploy pode dar bastante dor de cabeça, principalmente por conta dos detalhes. Importante levar esse tempo em conta tambem.

- Montar o basico do MVC foi bem tranquilo, pois eu já conhecia ele vindo do django. A autenticação por outro lado, com as sessions e tudo mais foi um caos porque, mais uma vez, o django fazia tudo por mim. Então tive que aprender a usar passport (e decifrar seu terrivel guia oficial).

