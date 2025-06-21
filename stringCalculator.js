function Add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = Add;