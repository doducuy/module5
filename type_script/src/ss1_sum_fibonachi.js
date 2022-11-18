function sumFibonachi() {
    var numOne = 0;
    var numTwo = 1;
    var arr = [0, 1];
    var check = 2;
    while (true) {
        var numThree = numOne + numTwo;
        arr.push(numThree);
        numOne = numTwo;
        numTwo = numThree;
        check++;
        if (check > 9) {
            break;
        }
    }
    var sum = 0;
    arr.forEach(function (value) {
        sum += value;
    });
    console.log("tổng là: " + sum);
}
sumFibonachi();
