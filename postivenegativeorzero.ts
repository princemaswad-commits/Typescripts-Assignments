function checkNumberSign(n: number): string {
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
}

console.log("10 is:", checkNumberSign(10));
console.log("-5 is:", checkNumberSign(-5));
console.log("0 is:", checkNumberSign(0));