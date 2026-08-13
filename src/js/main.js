import ollama from "ollama";


const response = await ollama.chat({
    model: "phi3.5",
    messages: [
        {
            role: "user",
            content: "What is 5+5?"
        }
    ],
    keep_alive: 0
});

console.log(response.message.content);


