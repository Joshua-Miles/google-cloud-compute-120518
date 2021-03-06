var express = require('express');
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
console.log(`
======================BOOTING!========================
`)
let allCharacters = [];
io.on('connection', function(socket){
    console.log('New User Connected')
    socket.on('join', function(state, respond){
        let character = {
            name: state.name,
            state: state
        }
        respond(allCharacters)
        allCharacters.push(character)
        socket.broadcast.emit('joined', state)


        socket.on('update', function(state){
            character.state = state
            io.emit(character.name, state)
        })
    })

})

app.use('/deploy', function(request,response){
    const exec = require('child-process-promise').exec
    exec('git pull origin master')
        .then(console.log)
        .catch(console.log)
    response.send(200)
})

app.use(express.static('public'))

app.get('/', function(request, response){
    response.send(`
        <html>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `)
})

server.listen(80)