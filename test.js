var niims = require("./index.js");

console.log("TEST 1: REBASE INTEGERS OF ONE DECIMAL BETWEEN 0-1 TO -10 AND 10");
for (i=0;i<11;i++){
	console.log(niims.rebase(i/10, -10, 10))
	if (i == 10) console.log("\n");
}
niims.load("linear")
console.log("TEST 2: 'linear' MODULE (SHOULD RESULT WITH 5)\n" + niims.linear(5, 0, 10) + "\n");

niims.load()