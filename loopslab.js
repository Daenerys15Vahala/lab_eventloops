// // ALAB EVENT LOOP

// // part 1 

let callCount = 0;

function causeStackOverflow() {
    callCount++;
    causeStackOverflow();
}

try {
    causeStackOverflow();
} catch (error) {
    console.error("Error:", error.message);
    console.log("Maximum number of calls:", callCount);
}

// // part 2

function trampoline(functionToRun) {
    let result = functionToRun;

    while (typeof result === "function") {
        result = result();
    }
    return result;
}

function flattenArray(items, flattened = []) {
    if (items.length === 0) {
        return flattened;
    }
    const currentItem = items.shift();

    if (Array.isArray(currentItem)) {
        items.unshift(...currentItem);
    } else {
        flattened.push(currentItem);
    }
    return () => flattenArray(items, flattened);
}

// test it

// const nestedArray = [
//     1,
//     [2, 3],
//     [4, [5, 6]],
//     [7, [8, [9, [10]]]]
// ];

// const flattenedArray = trampoline(
//     flattenArray([...nestedArray])
// );

// console.log(flattenedArray);

// part 3

const primeNumbersDisplay = document.querySelector("#primeNumbers");
// if prime number
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

function displayPrimes(n) {
    primeNumbersDisplay.textContent = "";

    let currentNumber = 2;

    function calculateNext() {
        if (currentNumber > n) {
            alert("The calculation is finished!");
            return;
        }

        // show prime numbers
        if (isPrime(currentNumber)) {
            primeNumbersDisplay.textContent += currentNumber + " ";
        }

        currentNumber++;
        // timeout

        setTimeout(calculateNext, 0);
    }

    calculateNext();
}

displayPrimes(1000);