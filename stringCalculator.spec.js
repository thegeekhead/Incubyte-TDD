const Add = require("./stringCalculator");

function assertEqual(actual, expected, description) {
    if (actual === expected) {
        console.log(`✅ ${description}`);
    } else {
        console.error(`❌ ${description}: Expected ${expected}, but got ${actual}`);
    }
}

assertEqual(Add(""), 0, "Returns 0 for empty string");