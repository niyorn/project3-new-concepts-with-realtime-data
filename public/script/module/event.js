import {notification} from './notification.js';

let event = {
    all : function (){
        this.showNotification();
    },
    showNotification : function (temperature) {
        let treshold = Number(document.querySelector('.treshold').value);
        
        if(temperature < treshold){
            notification(temperature)
        }

    }
};



export{event}