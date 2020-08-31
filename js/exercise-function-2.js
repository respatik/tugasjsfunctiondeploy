let number = prompt ("masukkan suhu dalam celcius")

function getFahrenheit (number){
    return (number * 9/5 + 32);
}

// console.log (getFahrenheit(37));
alert ("suhu " + number + " derajat celcius adalah sebesar " + getFahrenheit(number) + " derajat fahrenheit")

let num = prompt ("masukkan suhu dalam Fahrenheit")

function getCelcius (num){
    return ((num - 32) * 5/9);
}

// console.log (getCelcius(100));
alert ("suhu " + num + " derajat fahrenheit adalah sebesar " + getCelcius(num) + " derajat celcius")