export function toggleRunning(){
    console.log("função toggleRunning");
}

export function reset(){
    console.log("função reset");
}

export function plusFiveMinutes(){
    console.log("função plusFiveMinutes");
}

export function minusFiveMinutes(){
    console.log("função minusFiveMinutes");
}

export function listenTo(sound){
    console.log(`função listenTo recebeu o som ${sound}`);

    switch(sound){
        case 'forest':
            console.log(`O som ${sound} está tocando`);
            break;
        case 'rain':
            console.log(`O som ${sound} está tocando`);
            break;
        case 'coffee':
            console.log(`O som ${sound} está tocando`);
            break;
        case 'fireplace':
            console.log(`O som ${sound} está tocando`);
            break;
        default:
            console.log(`Desculpe, o som ${sound} não existe.`);
        }
}