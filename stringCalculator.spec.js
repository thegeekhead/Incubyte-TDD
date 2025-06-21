const Add = require("./stringCalculator");

function assertEqual(actual, expected, description) {
    if (actual === expected) {
        console.log(`✅ ${description}`);
    } else {
        console.error(`❌ ${description}: Expected ${expected}, but got ${actual}`);
    }
}


function assertThrows(fn, expectedMessage, description) {
    try {
        fn();
        console.error(`❌ ${description}: Expected exception but none was thrown`);
    } catch (error) {
        if (error.message === expectedMessage) {
            console.log(`✅ ${description}`);
        } else {
            console.error(`❌ ${description}: Expected "${expectedMessage}", but got "${error.message}"`);
        }
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

assertEqual(Add("//;\n1;2"), 3, "Supports custom delimiter ';'");
assertEqual(Add("//|\n4|5|6"), 15, "Supports custom delimiter '|'");
assertEqual(Add("//,\n7,8,9"), 24, "Handles custom comma (overriding default)");

assertThrows(
    () => Add("-1"),
    "negatives not allowed: -1",
    "Throws exception for single negative number"
);

assertThrows(
    () => Add("2,-4,3,-9"),
    "negatives not allowed: -4,-9",
    "Throws exception listing all negative numbers"
);

assertEqual(Add("2,1001"), 2, "Ignores number greater than 1000");
assertEqual(Add("1000,1"), 1001, "Includes 1000 but ignores >1000");
assertEqual(Add("500,600,1001"), 1100, "Sum includes only numbers ≤ 1000");
assertEqual(Add("//;\n1;1001;2"), 3, "Works with custom delimiter and ignores >1000");

assertEqual(Add("//[***]\n1***2***3"), 6, "Supports multi-character delimiter '***'");
assertEqual(Add("//[abc]\n2abc3abc4"), 9, "Supports multi-character delimiter 'abc'");
assertEqual(Add("//[!!]\n1!!2!!1001"), 3, "Ignores >1000 with multi-char delimiter");

assertEqual(Add("//[*][%]\n1*2%3"), 6, "Handles multiple single-char delimiters '*' and '%'");
assertEqual(Add("//[***][%%]\n1***2%%3"), 6, "Handles multiple multi-char delimiters");
assertEqual(Add("//[@@][##]\n4@@5##6"), 15, "Handles multi-char symbols as delimiters");
assertEqual(Add("//[!!][??]\n1001!!2??3"), 5, "Ignores >1000 with multiple delimiters");

assertEqual(Add("//[***][%%%]\n1***2%%%3"), 6, "Handles multiple multi-char delimiters");
assertEqual(Add("//[!!][##][@@]\n4!!5##6@@1"), 16, "Handles 3 custom multi-char delimiters");
assertEqual(Add("//[ab][cd][efg]\n1ab2cd3efg4"), 10, "Handles alpha multi-char delimiters");