import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js';

export function toggleRunning(){
    sounds.buttonPressAudio.play();
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown()
    
}

export function reset(){
    sounds.buttonPressAudio.play();
    state.isRunning = false;

    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function plusFiveMinutes(){
    sounds.buttonPressAudio.play();
    if(Number(elements.minutes.textContent) < 60){
        let minutesPlus = Number(elements.minutes.textContent) + 5;
        state.minutes = minutesPlus;
        timer.updateDisplay();
        return
    }
    return
}

export function minusFiveMinutes(){
    sounds.buttonPressAudio.play();
    if(state.minutes > 0){
        
        let minutesMinus = Number(elements.minutes.textContent) - 5;
        state.minutes = minutesMinus;
        timer.updateDisplay();
        return
    }
    return
}

export function listenTo(sound){ 
    const stateSound = state.soundSelected;

    if(stateSound == sound){
        state.isMute = true;
        state.soundSelected = undefined;
        document.documentElement.classList.remove('music-on');
        sounds[sound].pause();
        return
    }

    if(stateSound != undefined){
        sounds.resetSounds();
    }

    switch(sound){
        case 'forest':
            state.isMute = document.documentElement.classList.add('music-on');
            sounds.forest.play();
            state.soundSelected = sound;
            break;
        case 'rain':
            state.isMute = document.documentElement.classList.add('music-on');
            sounds.rain.play();
            state.soundSelected = sound;
            break;
        case 'coffee':
            state.isMute = document.documentElement.classList.add('music-on');
            sounds.coffee.play();
            state.soundSelected = sound;
            break;
        case 'fireplace':
            state.isMute = document.documentElement.classList.add('music-on');
            sounds.fireplace.play();
            state.soundSelected = sound;
            break;
        default:
            console.log(`Desculpe, o som ${sound} não existe.`);
        }
}