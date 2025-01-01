const prompt= require("prompt-sync")(); 

const RAWS = 3;
cont COLS = 3;

const SYMBOLS_COUNT ={
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

const SYMBOLS_VALUES ={
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}




const deposit = () => {
    while(true) {
const depositAmount = prompt("Enter a deposit amount: ");
const numberDepositAmount = parseFloat(depositAmount);

if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
    console.log(" Invalid amount, Try again");
        } else {
            return numberDepositAmount ;
        }
    }
 };
// function 2 
 const getNumberOfLines = () => {
    while(true) {
const lines = prompt("Enter the number of lines to bet(1-3): ");
const numberOfLines = parseFloat(lines);

if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines > 3){
    console.log(" Invalid number of lines, Try again");
        } else {
            return numberOfLines ;
        }
    }
 };

 //function 3 
 const getBet = (balance,lines) =>  {
    while(true) {
const bet = prompt("Enter the total bet per line: ");
const numberBet = parseFloat(bet);

if(isNaN(numberBet) || numberBet<=0 || numberBet > balance/lines ){
    console.log(" Invalid bet, Try again");
        } else {
            return numberBet ;
        }
    }
 };

const spin = () +> 

 //console.log(deposit()); instead of doing this we will put it in a const veriable so we can call it later
let balance =deposit();
//console.log(depositMoney);
const numberOfLines = getNumberOfLines();
//console.log(numberOfLines);
const bet=getBet(balance,numberOfLines);
