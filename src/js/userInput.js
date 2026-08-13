import * as Ollama from "./ollama.js";
import * as UserInterface from "./userInterface.js";


var userQuery = "";

// initialized in the main.js file.
export function createEventListener(){
    document.addEventListener("DOMContentLoaded", () => {
        const submitBtn = document.getElementById("submitButton");
        
        submitBtn.addEventListener("click", takeUserInput);
    });
}

// called from the submit button event.
function takeUserInput(){
    userQuery = document.getElementById("inputField").value;
    console.log("User input: " + userQuery);

    document.getElementById("inputField").value = "";

    // queries ollama
    if (userQuery != ""){
        Ollama.sendQueryToOllama(userQuery);
    }

}

export function getUserQuery(){
    return userQuery;
}