import React, { useState, useMemo } from "react";

function calculatePrimeNumbers(limit) {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function PrimeNumbersList({ limit }) {
  const startTime = performance.now();
  const primeNumbers = useMemo(() => calculatePrimeNumbers(limit), [limit]);
  const endTime = performance.now();

  console.log("Time taken with useMemo:", endTime - startTime, "ms");

  return (
    <div>
      {primeNumbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
}

function PrimeNumbersListWithoutMemo({ limit }) {
  const startTime = performance.now();
  const primeNumbers = calculatePrimeNumbers(limit);
  const endTime = performance.now();

  console.log("Time taken without useMemo:", endTime - startTime, "ms");

  return (
    <div>
      {primeNumbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>With useMemo:</h1>
      <PrimeNumbersList limit={10000} />

      <h1>Without useMemo:</h1>
      <PrimeNumbersListWithoutMemo limit={10000} />

      <h1>With useMemo:</h1>
      <PrimeNumbersList limit={10000} />

      <h1>Without useMemo:</h1>
      <PrimeNumbersListWithoutMemo limit={10000} />
    </div>
  );
}

export default App;
