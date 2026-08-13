// called from button click event in userInput.js
export async function sendQueryToOllama(query){
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
        keep_alive: 0
    })
});

    const data = await response.json();

    console.log(data.message.content);
    outputResultToPopup(data.message.content);
}


export function outputResultToPopup(result){
    const resultContainer = document.getElementById("responseField");
    resultContainer.textContent = result;
}