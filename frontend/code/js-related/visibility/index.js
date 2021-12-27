window.addEventListener(
    'visibilitychange', () => {
        var eventList = document.getElementById("event-list")
        var newListItem = document.createElement("li")
        var message = "";
        var timenow = new Date();

        switch (document.visibilityState) {
            case 'prerender':
                message = 'Tab is Pre-rendering \t\t' + timenow.toLocaleTimeString()
                newListItem.className = "document-prerender-item"
                break;
            case "visible":
                message = 'Tab is focused \t\t' + timenow.toLocaleTimeString()
                newListItem.className = "document-focused-item"
                break;
            case 'hidden':
                message = 'Tab is hidden \t\t' + timenow.toLocaleTimeString()
                newListItem.className = "document-hidden-item"
                break;

        }

        console.log(message)

        var itemValue = document.createTextNode(message)
        newListItem.appendChild(itemValue)
        eventList.appendChild(newListItem)
    }
)