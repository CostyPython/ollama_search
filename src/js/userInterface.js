const responseField = document.getElementById("responseField");

export function autoResize() {
    responseField.style.height = "auto";
    responseField.style.height = responseField.scrollHeight + "px";
}

