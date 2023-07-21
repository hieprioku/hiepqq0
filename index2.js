let numbers =prompt("nhập vào dãy số","").split(",")
let min = numbers[0];

for (let i = 1; i < numbers.length; ++i) {
   if (min > numbers[i]) {
    min = Number(numbers[i]);
    
   } 
    
}
console.log("min:",min);