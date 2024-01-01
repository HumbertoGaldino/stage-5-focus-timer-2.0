export const buttonPressAudio = new Audio('./assets/button-press.wav');

export const kitchenTimer = new Audio('./assets/kichen-timer.mp3');

export const coffee = new Audio('./assets/Cafeteria.wav');

export const rain = new Audio('./assets/Chuva.wav');

export const forest = new Audio('./assets/Floresta.wav');

export const fireplace = new Audio('./assets/Lareira.wav');

forest.loop = true
rain.loop = true
coffee.loop = true
fireplace.loop = true

export function resetSounds() {
    coffee.pause();
    rain.pause();
    forest.pause();
    fireplace.pause();
}