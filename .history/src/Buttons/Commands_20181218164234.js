

export default {
    rotate(){
        return console.log('rotate!!');
    },
    forward(counter){
         let interval = setInterval(() => {
            counter++
         }, 1000);
         console.log(counter);
         if(counter == 100) return;

    },
    back(){
        return console.log('back');
    },
    left(){
        return console.log('left');
    },
    right(){
        return console.log('right');
    },
    takeOff(){
        return console.log('takeOff');
    },
    flipLeft(){
        return console.log('flipLeft');
    },
    flipRight(){
        return console.log('flipRight');
    },
    flipForward(){
        return console.log('flipForward');
    },
    flipBack(){
        return console.log('flipBack');
    },
    hight(){
        return console.log('hight');
    },
    low(){
        return console.log('low');
    },
    land(){
        return console.log('land');
    },
    emergency(){
        return console.log('emergency');
    },
}


