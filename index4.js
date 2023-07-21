console.log(`xin chào, đây là kích thước đàn cừu của tôi `);
let number = [5,7,300,90,50,75];
for (let i= 0; i< number.length;i++);
console.log(number);

let numbers = [5,7,300,90,50,75];
let max = numbers[0];
let index = 0;
for (let i= 1; i< number.length;i++)
{
    if (number[i]>max) {
        max = Number(number[i]);
        index =i
    }
}


console.log(`con cừu lớn nhất của tôi có kích thước  ${max} hãy cạo nó `);

console.log(`sau khi cạo lông đây là đàn cừu của tôi`);
let num = [5,7,300,90,50,75];
num.splice(2,0, 8);
console.log(num);
console.log(`MONTH 1
đã 1 tháng trôi qua, đàn cừu của tôi đã lớn đây là kích thước của chúng`);

let sum = [55,57,58,140,74,100,125];
for (let i= 0; i< sum.length;i++);
console.log(sum);

let arry = [55,57,58,140,74,100,125];
let maximum = numbers[0];
let a = 0;
for (let i= 1; i< arry.length;i++)
{
    if (arry[i]>maximum) {
        maximum = Number(arry[i]);
        a =i
    }
}


console.log(`con cừu lớn nhất của tôi có kích thước  ${maximum} hãy cạo nó `);

console.log(`sau khi cạo lông đây là đàn cừu của tôi`);
let arr = [55,57,58,74,100,125];
arr.splice(3,0, 8);
console.log(arr);