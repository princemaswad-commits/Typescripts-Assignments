"use strict";
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Add these lines inside the file:
console.log("30°C in Fahrenheit is:", celsiusToFahrenheit(30));
console.log("86°F in Celsius is:", fahrenheitToCelsius(86));
