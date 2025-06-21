function Add(numbers) {

    return numbers
        .split(",")
        .filter(n => n !== "")
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

}

module.exports = Add;