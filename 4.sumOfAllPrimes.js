const sumOfAllPrimes = (num) => {
    if (num === undefined || num === null ) {
        return "empty"
    }

    if (num < 2) {
        return `${num} is not a prime number`;
    }

    let isPrime = Array(num + 1).fill(true);
    isPrime[0] = isPrime[1] = false; 
    
    for (let i = 2; i * i <= num; i++) {
        if (isPrime[i]) {
          for (let j = i * i; j <= num; j += i) {
            isPrime[j] = false;
          }
        }
    }
      
    const primes = [];
    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime[i]) {
            primes.push(i);
            sum += i;
        }
    }

    
    return `The sum of all primes up to ${num} is ${sum} (since the prime numbers up to ${num} are ${primes.join(', ')})`;

}

// Example:
// Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
// Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7..... To 59).
      
console.log(sumOfAllPrimes(10));
console.log(sumOfAllPrimes(59));
      
