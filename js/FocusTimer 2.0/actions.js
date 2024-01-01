import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown()
}

export function reset(){
    state.isRunning = false;

    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function plusFiveMinutes(){
    elements.minutes.textContent = String(Number(elements.minutes.textContent) + 5).padStart(2, "0");
}

export function minusFiveMinutes(){
    if(Number(elements.minutes.textContent) > 0){
        elements.minutes.textContent = String(Number(elements.minutes.textContent) - 5).padStart(2, "0");
        return
    }
    return
}

export function listenTo(sound){
    state.isMute = document.documentElement.classList.toggle('music-on');
    
    if(state.soundSelected === sound){
        state.isMute = true;
        state.soundSelected = undefined;
        document.documentElement.classList.remove('music-on');
        return
    }

    switch(sound){
        case 'forest':
            console.log(`O som ${sound} está tocando`);
            state.soundSelected = sound;
            break;
        case 'rain':
            console.log(`O som ${sound} está tocando`);
            state.soundSelected = sound;
            break;
        case 'coffee':
            console.log(`O som ${sound} está tocando`);
            state.soundSelected = sound;
            break;
        case 'fireplace':
            console.log(`O som ${sound} está tocando`);
            state.soundSelected = sound;
            break;
        default:
            console.log(`Desculpe, o som ${sound} não existe.`);
        }
}