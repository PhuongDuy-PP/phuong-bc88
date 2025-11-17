
console.log("Hello World!");

// Khai báo biến
// => let, const, var (không nên dùng)

let number = 10;
let number1 = 3.8;
let fullName = "Nguyen Van A";
console.log("Number: ", number);
console.log("Full name: ", fullName);

const PI = 3.14;
const DATABASE_NAME = "BC88";
console.log("PI: ", PI);

// operators + - * / %
let number2 = 5;
let number3 = 7;
let result = number2 + number3;
console.log("Result: ", result);
console.log("Result: ", number2 + number3);

let number4 = 10;
let number5 = 6;
let result1 = number4 - number5;
console.log("Result1: ", result1);

let number6 = 12;
let number7 = 8;
let result2 = number6 * number7;
console.log("Result2: ", result2);

let number8 = 20;
let number9 = 6;
// Chia lay phan nguyen
// Math.floor()
let result3 = Math.floor(number8 / number9);
console.log("Result3: ", result3);

// Chia lay phan du
let result4 = number8 % number9;
console.log("Result4: ", result4);

// result++, result--, ++result, result += 2,....
// result++, result--
result = result + 1; // result++, ++result
result = result - 1; // result--, --result
result = result + 2; // result += 2

result = 10;
let demo = result++;
// ý nghĩa:
// Bước 1: gán giá trị của result (10) cho demo => demo = 10
// Bước 2: tăng giá trị của result lên 1 => result = 11
console.log("Demo: ", demo); // 11, 11, 11, 11, 11
console.log("Result: ", result); // 11, 10, 10, 11, 10

result = 10;
demo = ++result;
// ý nghĩa:
// Bước 1: tăng giá trị của result lên 1 => result = 11
// Bước 2: gán giá trị của result (11) cho demo => demo = 11
console.log("Demo: ", demo);  // 11, 11, 11, 11
console.log("Result: ", result);  // 11, 10, 10, 11

// operator so sánh: >, >=, <, <=, ==, ===, !=, !==
// conditional statements: if...else
// True or False

// let number8 = 20;
// let number9 = 6;
console.log(number8 > number9);
console.log(number8 < number9);
console.log(number8 >= number9);
console.log(number8 <= number9);

let number10 = "20";
console.log(number8 == number10); // true
// Luu y:  == so sanh gia tri, KHONG so sanh kieu du lieu
// KHONG NEN SU DUNG TOAN TU NAY
console.log(number8 === number10); // false
// Luu y:  === so sanh ca gia tri va kieu du lieu

console.log(number8 != number9); // true - KHÔNG NÊN DÙNG
console.log(number8 !== number10); // true

// bài 1: tính lương nhân viên trong 1 tháng
// input: 
// + lương cơ bản/ngày
// + số ngày làm việc trong tháng
// output: luong nhân viên trong 1 tháng
// process: 
// luongThang = luongCoBanNgay * soNgayLamViec
let luongCoBanNgay = 500000;
let soNgayLamViec = 22;

// process
let luongThang = luongCoBanNgay * soNgayLamViec;

// output;
console.log("Lương tháng của nhân viên: ", luongThang);

// Bài 2: Tính diện tích, chu vi hình chữ nhật

// prompt("Nhập vào chiều dài: ");
// let chieuDai = prompt("Nhập vào chiều dài: ");
// let chieuRong = prompt("Nhập vào chiều rộng: ");
let chieuDai = "10";
let chieuRong = "5";

// LUU Ý: prompt luôn trả về giá trị kiểu string => cần ép kiểu về number
chieuDai = Number(chieuDai);
console.log("Chiều dài: ", chieuDai);
console.log("Chiều rộng: ", chieuRong);

// check datatype
console.log("datatype chieuDai: ", typeof chieuDai);