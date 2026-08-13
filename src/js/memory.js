const memory = [];


export function appendMemory(prompt, message) {
    memory.push(prompt + " " + message);
}

export function getMemory(){
    return memory;
}


