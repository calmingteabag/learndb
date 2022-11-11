# Esqueceu como faz passport? I got you

# app.js

No seu app.js ou index.js (arquivo de entrada da sua aplicação), vc vai por NESSA ordem:

```
import passport from algum_lugar

const session = require('cookie-session')

app.use(session({
    secret: "uma string random inventada",
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
```

A ideia do app.use(session) é mantar vc autenticado, sem precisar fazer login em cada pagina restrita. Vc loga uma vez (na pagina de login) e o usuario permanece logado.

Cookie session é pra manter o usuario salvo no navegador, e não no servidor

# passport.js

Vou admitir que vc não vai criar uma linguiça e vai querer dividir as coisas, então o passport
vai tar separado. Não vou colar o codigo aqui mas vou explicar o que acontece no passport.js

Primeiro vc tem que criar um database com o usuario, pro seu app saber quem esta se logando ou não.

Ai vc tem
passport.use(new GoogleStrategy)

O que ele faz é, depois que o usuario clica no 'login with google', o google retorna uma salsisha com um monte de informação do usuario (email, nome, foto, etc) QUE fica (dentro do passport) numa variavel chamada 'profile'. Então a primeira parte é pegar as infos que vc quer e salvar no db ( no caso, eu escolhi salvar o google_id, o nome e email)

Só que isso tem que ir pro session.

ai entra o passport.serializeuser e deserializeuser

Nota que o negocio está assim
passport.serializeUser((user, done)) => {coisas}

o passport automaticamente passa o profile para o users. então se vc der users.google_id, ele vai retornar o google_id QUE veio lá do google.

então o serielizer pega isso e manda pro express. Ele 'atacha' isso dentro do 'req'. O req, no express é quem carrega as informações pra lá e pra ca.

o deserializer existe, caso vc queira retornar a entrada do db que tem o usuario
seila, vc precisa do email do usuario, é com isso que ele pega.

E TUDO que vc pegar, tem que ser terminado com o metodo done(erro, valor),

# rotas login

No caso do GOOGLE, vc vai precisar de duas rotas

Uma pra mandar o usuario se logar, que vai abrir a telinha do 'login with google' e outra pra testar a autenticação. Essa ultima vai mandar ele pra pagina de sucesso ou voltar pra tentar o login de novo.

# bloqueio de rotas

Pra bloquear as rotas que vc não quer que pessoas deslogadas vejam, vc cria um "middleware"

```
const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/google_login')
```
Quando usuario se loga e o passport faz a magica, ele põe .isAuthenticated no 'req' do express. ai vc pode usar isso pra ver se o usuario é logado.

E nas rotas, vc usa isso pra controlar o acesso

```
routerCreate.get('/db_create_entry', authCheck, async (req, res) => {
    try {
        res.render(path.join(__dirname, '../static/html/create'), { status: "" })
    } catch (err) {
        console.log(err)
    }
})

```

Ele vai checar se usuario esta logado, se não, ele manda pro path de login.

Vc deve ter notado que tem um db users
Quando usuario dá login pela 1x, ele coloca esse usuario no db_users. Por que?

Pro programa saber, qual usuario fez qual entrada no db






