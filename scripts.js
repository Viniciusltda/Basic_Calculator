const display = document.getElementById('display');
const span = document.getElementById('savedNumber');

let numberSaverX = 0;
let lastOperator = 0;

let isOperating = false;
let operationFinished = true;
let isFloat = false;

const numbers = document.getElementById('buttons').addEventListener('click', function(event){
    if(event.target.value != undefined && !isNaN(event.target.value)){
        if(display.value === '0' || operationFinished == true){
            display.value = event.target.value;
            operationFinished = false;

        }else if(display.value.length != 8){
            display.value += event.target.value;

        }

    }

    if(event.target.value == 'C'){
        display.value = 0;
        NumberSaverX = 0;
        isOperating = false;
        isFloat = false;
        lastOperator = 0;
        span.innerHTML = '';

    }else if(event.target.value == 'CA'){
        display.value = 0;
        isFloat = false;

    }else if(event.target.value == '.' && isFloat == false){
        display.value += event.target.value;
        operationFinished = false;
        isFloat = true;
        
    }else if(event.target.value == '%'){
        span.innerHTML = display.value + '%';
        
        display.value = display.value / 100;

    }

});

const operators = document.getElementById('operators').addEventListener('click', function(event){
    if(event.target.value == '+'){
        additionCount();
        
    }else if(event.target.value == '-'){
        subtractionCount();
        
    }else if(event.target.value == '*'){
        multiplicationCount();
        
    }else if(event.target.value == '/'){
        dividingCount();
        
    }

    if(event.target.value == '='){
        calculateTotalValue();
        showTotalValue();
        
    }
    
});


function additionCount(){
    if(isOperating == true){
        calculateTotalValue();
        lastOperator = 1;

        span.innerHTML += display.value + ' + ';

        isFloat = false;

        display.value = 0;
        
    }else if(isOperating == false){
        isOperating = true;
        lastOperator = 1;
        
        numberSaverX = Number(display.value);
        
        span.innerHTML = display.value + ' + ';

        isFloat = false;
        
        display.value = 0;
        
    }
    
    
}

function subtractionCount(){
    if(isOperating == true){
        calculateTotalValue();
        lastOperator = 2;
        
        span.innerHTML += display.value + ' - ';

        isFloat = false;

        display.value = 0;
        
    }else if(isOperating == false){
        isOperating = true;
        lastOperator = 2;
        
        numberSaverX = Number(display.value);
        
        span.innerHTML = display.value + ' - ';

        isFloat = false;
        
        display.value = 0;

    }
}

function multiplicationCount(){
    if(isOperating == true){
        calculateTotalValue();
        lastOperator = 3;

        span.innerHTML += display.value + ' x ';

        isFloat = false;

        display.value = 0;

    }else if(isOperating == false){
        isOperating = true;
        lastOperator = 3;

        numberSaverX = Number(display.value);

        span.innerHTML = display.value + ' x ';

        isFloat = false;

        display.value = 0;

    }
}

function dividingCount() {
    if(isOperating == true){
        calculateTotalValue();
        lastOperator = 4;

        span.innerHTML += display.value + ' / ';

        isFloat = false;

        display.value = 0;

    }else if(isOperating == false){
        isOperating = true;
        lastOperator = 4;

        numberSaverX = Number(display.value);

        span.innerHTML = display.value + ' / ';

        isFloat = false;

        display.value = 0;

    }
}


function calculateTotalValue() {
    switch(lastOperator){
        case 1:
            numberSaverX += Number(display.value);
            break;
    
        case 2:
            numberSaverX -= Number(display.value);
            break;
    
        case 3:
            numberSaverX = numberSaverX * Number(display.value);
            break;
    
        case 4:
            numberSaverX = numberSaverX / Number(display.value);
            break;
    
    }
}

function showTotalValue(){
    if(isOperating == true){
        if(numberSaverX.toString().length > 8){
            display.value = 'ERROR';

        }else {
            display.value = numberSaverX;

        }
    
        span.innerHTML = '';
    
        isOperating = false;
        operationFinished = true;
        isFloat = false;
        lastOperator = 0;

    }

}