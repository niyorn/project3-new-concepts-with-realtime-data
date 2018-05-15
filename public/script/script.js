import {notification} from './module/notification.js';
import {socket} from './module/socket.js'
import {event} from './module/event.js'

let app = {
    init : function () {
        socket.init();
        event.all();
    }
}

app.init()

