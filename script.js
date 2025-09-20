function main() {
    var biggestNumber;
    var x;

    for (x = 0; x <= 9; x++) {
        window.alert("Enter " + x + 1 + "number of 10");
        var number;

        number = Number(window.prompt('Enter a value for number'));
        if (x == 0) {
            biggestNumber = number;
        } else {
            if (number > biggestNumber) {
                biggestNumber = number;
            }
        }
    }
    window.alert("Biggest number is: " + biggestNumber);
}
