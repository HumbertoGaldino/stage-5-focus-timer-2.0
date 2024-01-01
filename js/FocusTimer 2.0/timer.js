import state from "./state.js"
import * as elements from "./elements.js"

export function updateDisplay(minutes, seconds){
    // Se for passado a variável coleta seu valor, senão pega do estado da aplicação
    // nullish coalesing operator
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countdown(){
    if(!state.isRunning) {
        return
    }

    console.log('-1')

    setTimeout(() => countdown(), 1000);
}