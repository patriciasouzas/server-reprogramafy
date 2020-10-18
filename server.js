const app = require('./scr/app')

const PORT = 8080

app.listen(PORT, function () {
    console.log(`Nosso app esta rodando na porta ${PORT}`)
})