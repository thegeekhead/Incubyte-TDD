function escapeRegex(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function Add(numbers) {
    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterDeclaration = parts[0].slice(2);

        if (delimiterDeclaration.startsWith("[")) {
            const matches = [...delimiterDeclaration.matchAll(/\[([^\]]+)\]/g)];
            const delimiters = matches.map(m => escapeRegex(m[1]));
            delimiter = new RegExp(delimiters.join("|"));
        } else {
            delimiter = new RegExp(escapeRegex(delimiterDeclaration));
        }

        numbers = parts[1];
    }

    const numArray = numbers
        .split(delimiter)
        .filter(n => n !== "")
        .map(Number);

    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return numArray
        .filter(n => n <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = Add;