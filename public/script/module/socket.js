import {event} from './event.js';


let socketClient = io();
let socket = {}

socket.init = function () {
    socket.listen();
}


socket.listen = function () {
    socketClient.on('hydroponics', function(serverData){

        //There are some mismeasurement where the temperature reach 4000 degrees
        let freezingTemp = 0;
        let boilingTemp = 100;
        if(serverData.temperature >= freezingTemp && serverData.temperature <= boilingTemp){
            document.querySelector('.temp-data').innerHTML = serverData.temperature;
            event.showNotification(serverData.temperature);
        }

        console.log(serverData.temperature);
        
    })
}


export {socket}