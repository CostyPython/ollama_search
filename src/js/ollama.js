import * as UserInterface from "./userInterface.js";

// called from button click event in userInput.js
export async function sendQueryToOllama(query){

    // unloads the model from the server.
    if (query === "/bye") {
        await unloadModel();
        return;
    }

    const response = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        model: "phi3.5",
        messages: [
            {
                role: "user",
                content: query
            }
        ],
        stream: false,
        keep_alive: "10m"
    })
});

    const data = await response.json();

    console.log(data.message.content);
    outputResultToPopup(data.message.content);
}


export async function unloadModel() {
    await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "phi3.5",
            messages: [],
            keep_alive: 0 // Tells Ollama to instantly purge the model from memory
        })
    });
    console.log("Model unloaded.");
}


export function outputResultToPopup(result){
    const resultContainer = document.getElementById("responseField");
    resultContainer.textContent = result;
    UserInterface.autoResize();
}

