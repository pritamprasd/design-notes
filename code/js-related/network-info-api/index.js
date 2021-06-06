window.addEventListener('offline', networkStatus);
window.addEventListener('online', networkStatus);

function networkStatus(e) {
    console.log(e.type)
    switch (e.type) {
        case 'online':
            alert('online')
            break;
        case 'offline':
            alert('offline')
            break;
    }
}