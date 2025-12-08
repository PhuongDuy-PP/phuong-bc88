// bài 1: in các số từ 1 => n
// input: biến n được nhập từ bàn phím

// output: in các số từ 1 => n

// processing
// => dùng vòng lặp for
// tìm điều kiện bắt đầu vào vòng lặp. tạo 1 biến chạy iterator (i) để
// bắt đầu vòng lặp. i = 1

// tìm điều kiện dừng vòng lặp i <= n

// tìm bước nhảy của vòng lặp: i = i + 1 => i++
// khai báo hàm
const inSoTu1DenN = number => {
    for(let i = 1; i <= number; i++) {
        console.log(i);
    }
}

// gọi hàm
inSoTu1DenN(100);

// bài 2: in ra các số chẵn từ 0 => n
// input: biến n được nhập từ bàn phím

// output: in các số chẵn từ 0 => n

// processing
// => dùng vòng lặp for
// 1. tìm kiện bắt đầu vòng lặp: i = 0
// 2. tìm điều kiện dừng: i <= n
// 3. tìm bước nhảy: i = i + 2 => i += 2

const inSoChanTu0DenN = number => {
    for(let i = 0; i <= number; i += 2) {
        console.log(i);
    }
}

console.log("In số chẵn từ 0 đến number:");
inSoChanTu0DenN(79);

// bài 3: tính tổng các số từ 1 => n
// input: biến n được nhập từ bàn phím

// output: in tổng các số từ 1 => n

// processing
// => dùng vòng lặp for
// sum = 0
// 1. tìm điều kiện bắt đầu vòng lặp: i = 1
// 2. tìm điều kiện dừng: i <= n
//   2. 1: sum = sum + i => sum += i
// 3. tìm bước nhảy: i++
//  in ra sum

const tinhTongTu1DenN = number => {
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        sum += i; // sum = sum + i
    }
    // C1: console.log
    console.log(`Tổng các số từ 1 đến ${number} là: ${sum}`);

    // C2: return
    return sum;
}

tinhTongTu1DenN(100);

let sum = tinhTongTu1DenN(100);
console.log(`Sum trả về là: ${sum}`);


// bài 4: tính giai thừa của n
// n! = 1 * 2 * 3 * ... * n
const tinhGiaiThua = number => {
    let giaiThua = 1;
    for(let i = 2; i <= number; i++) {
        giaiThua = giaiThua * i; // giaiThua *= i
    }
    return giaiThua;
}

// bài 5: in các số nguyên tố từ 1 => n
// số nguyên tố là số chỉ chia hết cho 1 và chính nó
// 2, 3, 5, 7, 11, 13, 17,...

// processing
// B1: kiểm tra giá trị n nhập từ bàn phím
//   1.1: nếu n < 2 => không có số nguyên tố
// B2: dùng vòng lặp for để duyệt các số từ 2 => n
//   2.1: kiểm tra số i có phải số nguyên tố hay không
// 6: 6 -> 1, 6 -> 2 -> 5
// 5: 1, 5 -> 2 -> 4
// => viết hàm kiểm tra số nguyên tố
const kiemTraSoNguyenTo = number => {
// tìm các test case fail
    if (number < 2) {
        return false; // dừng hẳn, trả về false
    }
    if (number === 2) {
        return true; // dừng hẳn, trả về true
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false; // dừng hẳn, trả về false
        }
    }
    return true; // trường hợp không có ước nào chia hết
}

const inCacSoNguyenToTu1DenN = number => {
    for(let i = 1; i <= number; i++) {
        if(kiemTraSoNguyenTo(i)) { // kiemTraSoNguyenTo(i) === true
            console.log(i);
        }
    }
}

console.log("In các số nguyên tố từ 1 đến 100:");
inCacSoNguyenToTu1DenN(100);

// bài 6: in bảng cửu chương n (2 => 9)
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 10 = 20

// processing
// => dùng vòng lặp for
// b1: i=1
// b2: i <= 10
// b3: i++

// const inBangCuuChuong = number =>{
//     for (let i = 1; i<=10; i++){
//         let ketQua = number *i;
//         console.log(`${number} X ${i} = ${ketQua}`)
// }   
// }
// console.log(`in bảng cửu chương 7: `);
// inBangCuuChuong(7);
const inBangCuuChuong = number => {
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
inBangCuuChuong(7);

// Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+…+x^n (Sử dụng vòng lặp và hàm)
// input: biến x, n được nhập từ bàn phím

// output: in tổng S(n)

// processing
// => dùng vòng lặp for

const tinhTongSn = (x, number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++){
        sum += Math.pow(x, i);
    }
    console.log(`Tổng Sn là: ${sum}`)
}

tinhTongSn(10, 30);

// nested loop
// in hình chữ nhật đặc kích thước m x n
const inHinhChuNhatDac = (width, height) => {
    let row = "";
    // for(let j = 1; j <= width; j++){
    //     row += "* ";
    // }
    // row += "\n";
    // for(let j = 1; j <= width; j++){
    //     row += "* ";
    // }
    // row += "\n";
    // for(let j = 1; j <= width; j++){
    //     row += "* ";
    // }
    for(let i = 1;i <= height; i++){
        for(let j = 1; j <= width; j++) {
            row += "* ";
        }
        row += "\n";
    }
    console.log(row);
}
inHinhChuNhatDac(5, 3);

// in hinh chữ nhật rỗng kích thước m x n
// * * * * *
// *       *
// * * * * *
let width = 8;
let height = 6;
let row = "";
for(let i = 1;i <= height; i++){
    for(let j = 1; j <= width; j++) {
        // với i=1 hoặc i=height => in *
        // với j=1 hoặc j=width => in *
        if(i === 1 || i ===height || j === 1 || j === width){
            row += "* ";
        } else {
            row += "  ";
        }
    }
    row += "\n";
}
console.log(row);
// in hình tam giác vuông cạnh n
// *
// * *
// * * *
// * * * *
let triangle = "";
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++){
        if(j <= i) {
            triangle += "* ";
        } else {
            triangle += " ";
        }
    }
    triangle += "\n";
}
console.log(triangle);

// in bàn vờ vua kích thước 8 x 8
const inBanCoVua = size => {
    // dùng thẻ table để in ra bàn cờ vua
    // B1: thêm thẻ table vào trong div có id="chessboard"
    const table = document.createElement("table");
    // style cho table
    table.className = "border-collapse text-center text-md border-2";
    for(let row = 1; row <= size; row++) {
        const tr = document.createElement("tr");
        for (let col = 1; col <= size; col++) {
            const td = document.createElement("td");
            // tạo biến để xac định màu của ô
            let isBlack = (row + col) % 2 === 0;
            td.className = isBlack ? "bg-black w-10 h-10": "bg-white w-10 h-10";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

const table = inBanCoVua(8);
document.getElementById("chessboard").appendChild(table);