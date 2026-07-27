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

// part 2

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