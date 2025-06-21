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

assertEqual(Add("1,2,3"), 6, "Returns 6 for input '1,2,3'");
assertEqual(Add("5,5,5,5,5"), 25, "Handles 5 numbers");
assertEqual(Add("100,200,300,400"), 1000, "Handles 4 large numbers");

assertEqual(Add("1\n2,3"), 6, "Supports newline and comma as delimiters");
assertEqual(Add("4\n5\n6"), 15, "Handles only newlines");
assertEqual(Add("7\n8,9"), 24, "Mix of newline and commas");