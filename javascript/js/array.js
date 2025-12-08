let numbers = [5, 6, 8, 10, 12];
// => loop
// .length -> attribute có sẵn của array khi khai báo
// numbers.length

// B1: in ra từng phần tử trong mảng
for(let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} `);
}

// B2: tìm phần tử trong mảng
let target = 10;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === target) {
        console.log(`Tìm thấy phần tử ${target} tại vị trí index ${i}`);
        break;
    }
}

// 1 số hàm có sẵn của array
// .push() -> thêm phần tử vào cuối mảng
console.log(`Mảng ban đầu: ${numbers}`);
numbers.push(15);
console.log(`Mảng sau khi thêm 15 vào cuối: ${numbers}`);

// thêm phần tử vào đầu mảng -> .unshift()
numbers.unshift(3);
console.log(`Mảng sau khi thêm 3 vào đầu: ${numbers}`);

// find, includes, sort, join,...
// .includes() -> kiểm tra phần tử có trong mảng hay không, trả về true/false
let checkNumber8 = numbers.includes(8);
console.log(`Kiểm tra số 8 có trong mảng hay không: ${checkNumber8}`);

// .sort((a, b) => a - b) -> sắp xếp mảng theo thứ tự tăng dần
// sort giảm dần -> numbers.sort((a, b) => b - a);
let ascNumbers =  numbers.sort((a, b) => a - b);
console.log(`Mảng sau khi sắp xếp tăng dần: ${ascNumbers}`);

numbers.sort((a, b) => b - a);
console.log(`Mảng sau khi sắp xếp giảm dần: ${numbers}`);

// .filter() -> filter các item trong mảng thỏa mãn điều kiện
// lọc các số chẵn trong mảng
// truyền vào function để kiểm tra số chẵn trong mảng
// number => number % 2 === 0
let evenNumbers = numbers.filter(number => number % 2 ===0);
console.log(`Các số chẵn trong mảng: ${evenNumbers}`);