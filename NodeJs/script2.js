// -2

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
const getNumber = function(){
    readline.question("Enter a number: ", num => {
        if(num !== "stop"){
            sum += parseInt(num);
            getNumber();
        }
        else{
            console.log(`The Sum of the is numbers you entered is ${sum}`);
            readline.close()
        }
    })

    return sum;
}
getNumber();