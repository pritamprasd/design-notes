## JS related:

- https://1linelayouts.glitch.me/

### Web APIs:

### Visbility change API: when user click on other tabs

[code](./code/js-related/visibility)

```js
window.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("Tab is hidden \t\t" + Date().toLocaleString());
  } else {
    console.log("Tab is focused \t\t" + Date().toLocaleString());
  }
});
```

### Network status: when connection goes online /offline

[code](./code/js-related/network-info-api)

```js
window.addEventListener("offline", networkStatus);
window.addEventListener("online", networkStatus);

function networkStatus(e) {
  console.log(e.type);
  switch (e.type) {
    case "online":
      alert("online");
      break;
    case "offline":
      alert("offline");
      break;
  }
}
```

### Vibration api:

[code](./code/js-related/vibration)

```js
function vibrate() {
  if (
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate
  ) {
    navigator.vibrate([
      125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600,
    ]);
  }
}
```
