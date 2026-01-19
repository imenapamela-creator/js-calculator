function toFahrenheit(celsius) {
    return (celcius* 9/5)+32;
}
function toCelsius(fahrenheit) {
    return (fahreheit-32)*5/9;
}
 //some of the examples to verify 2..
console.log("30°C =", toFahrenheit(30), "°F");
console.log("86°F =", toCelsius(86), "°C");