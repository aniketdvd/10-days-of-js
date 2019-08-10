/*
 * Create the function factorial here
 */
function factorial(num) {
    let intNum = parseInt(num);
    let fac = 1;
    for (let i = intNum; i > 0; --i) {
        fac *= i;
    }
    return fac;
}