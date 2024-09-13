let localVariable = 'This variable is never used';

let globalVariable = 'This should be avoided';

function calculateArea(width, height) {
    return width * height * 0.5;
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}
function greetAgain(name) {
    console.log('Hello, ' + name + '!');
}

function doEverything() {
    let result = [];
    for (let i = 0; i < 100; i++) {
        result.push(i);
    }
    console.log(result);
    
    for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
            if (j === k) {
                console.log(j);
            }
        }
    }

    if ((j > 50 && k < 50) || (j < 50 && k > 50)) {
        console.log("Complex condition met");
    }

    if (false) {
        console.log("This will never run");
    }
}

function getDay(dayNumber) {
    switch(dayNumber) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
    }
}

function add(a,b){
   return a+b
}
