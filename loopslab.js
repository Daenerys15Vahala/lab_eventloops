// ALAB EVENT LOOP

// part 1 

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
