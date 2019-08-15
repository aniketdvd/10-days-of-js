/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let rectangleObject = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
    return rectangleObject;
}

