function notification(content) {
    //Check if the browser support the notifcation api
    if (!('Notification' in window)) {
        alert('Notificaiton not supported')
    }

    //Check if a permsion is alreay granted
    else if (Notification.permission === 'granted') {
        let notification = new Notification ('De Ceuvel',{
            icon: 'http://deceuvel.nl/wp-content/themes/ceuvel/images/logo.svg',
            body: `The temperature is too LOW: \n${content}`,
            tag: 'too Many'
        });
    }

    //If not, ask for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === 'granted') {
                let notification = new Notification ('De Ceuvel',{
                    icon: 'http://deceuvel.nl/wp-content/themes/ceuvel/images/logo.svg',
                    body: `The temperature is too LOW: ${content}`,
                    tag: 'Too Many'
                });
            }
        })
    }
}



export {notification}