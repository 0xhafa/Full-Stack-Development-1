let counter = 10;

let timer = setInterval(function () {
    if(counter == 0) {
        console.log('time is up!');
        clearInterval(timer);
    }
    else {
        console.log(counter--);
    }
} , 100);

timer;