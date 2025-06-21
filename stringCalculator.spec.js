const Add = require("./stringCalculator");

function assertEqual(actual, expected, description) {
    if (actual === expected) {
        console.log(`✅ ${description}`);
    } else {
        console.error(`❌ ${description}: Expected ${expected}, but got ${actual}`);
    }
}

assertEqual(Add(""), 0, "Returns 0 for empty string");
assertEqual(Add("1"), 1, "Returns 1 for input '1'");
assertEqual(Add("56"), 56, "Returns 56 for input '56'");
assertEqual(Add("5,6"), 11, "Returns 11 for input '5,6'");