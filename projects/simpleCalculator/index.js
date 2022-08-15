let addition = (num) => +num[0] + +num[1]

let subtraction = (num) => +num[0] - +num[1]

let multiplication = (num) => +num[0] * +num[1]

function division(num){
    if(num[1] === '0')
        return "Forbidden"
        
    return +num[0] / +num[1]
}

let power = (num) => Math.pow(num[0], num[1])


function decimalCheck(num){
    if(num.indexOf('.') != -1){
        document.querySelector('.decimal').disabled = true;
    }
    
    if(num.indexOf('.') === -1){
        document.querySelector('.decimal').disabled = false;
    }
}

let hasNumOrDec = (string) => /\d/.test(string) || string.indexOf('.')!=-1? true: false;


let current = document.createElement('div')
let result = document.createElement('div')
let toBig = document.querySelector('.toBig')
let num = ["", ""]
let operation = ""
let i = 0
current.style.fontSize = '10px'
result.textContent = '0'
result.style.marginTop = '10px'
result.style.fontSize = '20px'

function keypad(input){
    
    switch(hasNumOrDec(input)){
        case true:
            if(operation === '='){
                break;
            }
            num[i] += input
            
            toBig.textContent = ""
            if(num[i].length > 16){
                num[i] = num[i].slice(0, -1)
                current.textContent = num[i]
                toBig.textContent = "too dumb for big numbers"
            }
            current.textContent += input
            break;
        case false:

            if(input === 'DEL'){
                num[i] = num[i].slice(0, -1)
                current.textContent = num[i]
                if(operation && operation != 'RESET')
                    current.textContent = operation + num[i]
                break;
            }
    
            switch(operation){
                case '+':
                    num[0] = addition(num)
                    break;
                case '-':
                    num[0] = subtraction(num)
                    break;
                case '*':
                    num[0] = multiplication(num)
                    break;
                case '/':
                    num[0] = division(num)
                    break;
                case 'xy':
                    num[0] = power(num)
                    break;
            }
    
            operation = input
            
            result.textContent = num[0]
            
            current.textContent = operation
            if(operation === 'xy')
                current.textContent = 'pwr '
                
            num[1]= "";

            if(operation === "RESET"){
                num[0] = ""
                result.textContent = '0'
                current.textContent = ''
                i--
                if(i === 0)
                    break;
            }
                
    
            if(i < 1)
                i++

            break;
    }
    decimalCheck(num[i])
}

document.getElementById('display').append(current)
document.getElementById('display').append(result)


document.getElementById('keypad').addEventListener('click', function(e){
    if(e.target.localName === 'button')
        keypad(e.target.innerText)
})

document.getElementById('keypad').addEventListener('keydown', function(e){
    if(hasNumOrDec(e.key))
        keypad(e.key)
})