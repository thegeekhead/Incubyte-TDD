function Add(numbers) {

    return numbers
        .replace(/\n/g, ",")
        .split(",")
        .filter(n => n !== "")
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

}

module.exports = Add;