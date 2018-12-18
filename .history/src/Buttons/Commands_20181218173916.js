

export default {
    rotate(){
        return console.log('rotate!!');
    },
    forward(){
        let result;
        
        clearInterval(interval);
        let interval = setInterval(() => {
            let seconds = new Date().getSeconds();
            console.log(seconds);
            if(seconds == 59)clearInterval(interval);
        }, 1000);
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


