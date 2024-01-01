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
    if(Number(elements.minutes.textContent) < 60){
        let minutesPlus = Number(elements.minutes.textContent) + 5;
        state.minutes = minutesPlus;
        timer.updateDisplay();
        return
    }
    return
}

export function minusFiveMinutes(){
    console.log(state.minutes)
    if(state.minutes > 0){
        let minutesMinus = Number(elements.minutes.textContent) - 5;
        state.minutes = minutesMinus;
        timer.updateDisplay();
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