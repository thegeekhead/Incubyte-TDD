function escapeRegex(char) {
    return char.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function Add(numbers) {
    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const customDelimiter = escapeRegex(parts[0].slice(2));
        delimiter = new RegExp(customDelimiter);
        numbers = parts[1];
    }

    return numbers
        .split(delimiter)
        .filter(n => n !== "")
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = Add;
