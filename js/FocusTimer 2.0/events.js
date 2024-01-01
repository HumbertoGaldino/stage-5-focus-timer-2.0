import * as elements from "./elements.js";
import * as actions from "./actions.js"

export function registerControls(){
    elements.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]();
    })

    elements.soundButtons.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        const sound = event.target.dataset.sound;
        
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action](sound);
    })
}