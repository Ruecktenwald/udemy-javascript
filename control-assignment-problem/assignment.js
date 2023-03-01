
//1.
//---------

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)



let i=0;


function generateRandomNumber() {
  return Math.random();
}


function numberLoop() {

    while (generateRandomNumber() < 0.7) {
        console.log(randomNumber, i);
        i++;
        generateRandomNumber();
    } 
    console.log("The loop is done!");
}


//----------

//2.

const list_of_numbers = [2, 4, 6, 8, 10];


for (let i = 0; i < list_of_numbers.length; i++) {
    console.log(list_of_numbers[i]);
}

z
//for of loop list_of_numbers
for (let number of list_of_numbers) {
    console.log(number);
}





//----------
//3.

// reverse list_of_numbers
for (let i = list_of_numbers.length - 1; i >= 0; i--) {
    console.log(list_of_numbers[i]);
}



//----------
//4.

const num1 = Math.random();
const num2 = Math.random();



