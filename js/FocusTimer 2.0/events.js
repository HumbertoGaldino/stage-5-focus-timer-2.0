import * as elements from "./elements.js";
import * as actions from "./actions.js"

export function registerControls(){
    elements.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(action === undefined){
            return
        }

        actions[action]();
    })

    elements.soundButtons.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        const sound = event.target.dataset.sound;
        
        if(action === undefined){
            return
        }

        actions[action](sound);
    })
}