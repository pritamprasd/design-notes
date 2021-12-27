/**
 * Back button
 */
function goBack() {
    window.history.back();
}
var backButton = document.createElement("button");
backButton.id = "backButton";
backButton.innerHTML = "<--"
backButton.style.background = '#3dfe3a'
backButton.addEventListener("click", goBack);
// document.body.appendChild(backButton);
document.body.insertBefore(backButton, document.body.firstChild);

/**
 *
 */