const express = require('express');
const app = express();
const router = require('./routes/routes');
const port = 4000;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socket = require('socket.io');
const csvParse = require('csv-parse');
const dataPath = 'data/data.json';
const fs = require('fs');
const csv = require('csvtojson');


app
    .use(express.static('views'))
    .use(express.static('public'))
    .set('view engine', 'ejs');

app.use('/', router);

//Get data from a file
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
console.log(data)
//Map the data with only the content we need
let dataMap = data.map((i) => {
    let content = {};
    content.id = i['entry_id'];
    content.temperature = i['Room Temp (*C)'];
    content.time = i[""];
    return content;
})



io.on('connection', function (socket) {

    for (let i = 0; i < dataMap.length; i++) {
        (function (i) {
            setTimeout(function () {
                socket.emit('hydroponics', dataMap[i])
            }, 1000 * i);
        })(i);
    };

})



http.listen(port, function () {
    console.log('open at localhost:' + port)
})