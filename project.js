// 1. Deposit some money 
//2. determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user thier winnings
// 7. play agin 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS =  3;

const SYMBOL_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

const SYMBOL_VALUES = {
    A:5,
    B: 4,
    C: 3, 
    D: 2
}


const deposit = () => {
    while (true) {
    const depositAmout = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmout);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Ivalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter a number of lines to bet on (1-3): ");
        const numberOflines = parseFloat(lines);
    
        if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
            console.log("Ivalid number of lines, try again.");
            } else {
                return numberOflines;
            }
        }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Ivalid bet, try again.");
            } else {
                return numberBet;
            }
        }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
        console.log(symbol)
    }
}



let balance = deposit();
const numberOflines = getNumberOfLines();
const bet = getBet(balance, numberOflines)

console.log(depositAmount);