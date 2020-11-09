function isPrime(n) {
    let isPrime = true;

    if (n < 2) {
        isPrime = false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;

}
function getPrimeInArray(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) array.push(arr[i])
    }
    return array;
}