const responseField = document.getElementById("responseField");

export function autoResize(boxElement) {
    boxElement.style.height = "auto";
    boxElement.style.height = boxElement.scrollHeight + "px";
}




export function createResponseBox(text){
    const responseContainer = document.getElementById("responseContainer");

    const responseBox = document.createElement("textarea");
    responseBox.classList.add("responseBox");
    responseBox.value = "Response: " +text;
    responseBox.readOnly = true;

    responseContainer.appendChild(responseBox);

    autoResize(responseBox);

}