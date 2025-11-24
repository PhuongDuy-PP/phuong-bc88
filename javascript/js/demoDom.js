let username = document.getElementById("username")
console.log("Username element: ", username);
let usernameValue = username.value;
console.log("Username value: ", usernameValue);

let password = document.getElementById("password");
let passwordValue = password.value;

let resultDiv = document.getElementById("result");
resultDiv.style.border = "2px solid red";
resultDiv.style.marginTop = "20px";

// truy cập tới thẻ button và thêm sự kiện click
let button = document.querySelector("button");
// ES5

button.onclick = function () {
    console.log("Button clicked!");
    let usernameValue = username.value;
    let passwordValue = password.value;
    console.log("Username: ", usernameValue);
    console.log("Password: ", passwordValue);

    // resultDiv.innerHTML = "Username: " + usernameValue + "Password: " + passwordValue;

    // ES6 -> template string
    // resultDiv.innerHTML = `Username: ${usernameValue}; Password: ${passwordValue}`;

    showInformation(passwordValue, usernameValue);
}

// hàm - function
function showInformation(passwordValue, usernameValue) {
    // code xử lý
    resultDiv.innerHTML = `Username: ${usernameValue}; Password; ${passwordValue}`;
}

// tính tiền lương nhân viên

// B2: DOM trực tiếp tới button tính tiền lương và thêm sự kiện onclick
// để tính tiền lương
document.getElementById("button-salary").onclick = function () {
    // B1: lấy thông tin workingDays, basicsalary từ giao diện
    let workingDaysInput = document.getElementById("workingDays").value;
    let basicSalary = document.getElementById("basicSalary").value;
    let workingDays = Number(workingDaysInput);
    let basicSalaryPerDay = Number(basicSalary);

    let totalSalary = workingDays * basicSalaryPerDay;

    // B3: hiển thị kết quả ra giao diện (div có id là result-salary)
    let resultSalaryDiv = document.getElementById("result-salary");
    resultSalaryDiv.innerHTML = `Tổng tiền lương nhân viên là: ${totalSalary} VND`;
}

// Bài 3: USD -> VND

document.getElementById("button-convert").onclick = function () {
    let usdInput = document.getElementById("usdAmount").value;
    let usdAmount = Number(usdInput);

    const EXCHANGE_RATE = 23500;
    let vndAmount = usdAmount * EXCHANGE_RATE;

    let resultConvertDiv = document.getElementById("result-convert");
    resultConvertDiv.innerHTML = `USD -> VND: ${vndAmount} VND`;
}


// if-else statements
// bài tập 4: kiểm tra số chẵn lẻ
// input: số nguyên => 1 thẻ input

// output: chẵn hoặc lẻ

// process: number1 % 2 === 0 => chẵn
//          number1 % 2 !== 0 => lẻ
document.getElementById("button-even-odd").onclick = function () {
    let numberInput = document.getElementById("evenOddInput").value;
    let number = Number(numberInput);

    let isEven = (number % 2 === 0);
    let result = "";
    if(isEven) { // ngầm hiểu isEven === true
        result = "số chẵn";
    } else {
        result = "số lẻ";
    }

    let resultEvenOdd = document.getElementById("result-even-odd");
    resultEvenOdd.innerHTML = `Kết quả: ${number} là ${result}`;
}

// bài 5: xếp loại học lực học sinh
// 9 <= điểm <= 10: xuất sắc => 9 <= điểm && điểm <= 10
// 8 <= điểm < 9: giỏi => 8 <= điểm && điểm < 9
// 6.5 <= điểm < 8: khá
// 5 <= điểm < 6.5: trung bình
// điểm < 5: yếu

document.getElementById("button-score").onclick = function () {
    let scoreInput = document.getElementById("scoreInput").value;
    let score = Number(scoreInput);

    let result = "";
    // lưu ý:
// dùng if...else if...else khi có nhiều điều kiện liên quan với nhau. VD: học lực, giới tính, tuổi,..
// dùng nhiều if rời rạc khi các điều kiện không liên quan với nhau.
    if(9 <= score && score <= 10) {
        result = "xuất sắc";
    } else if (8 <= score && score < 9) {
        result = "gioi";
    } else if (6.5 <= score && score < 8) {
        result = "kha";
    } else if (5 <= score && score < 6.5) {
        result = "trung bình";
    } else {
        result = "yếu";
    }
}

// bài 6: kiểm tra ngày hợp lệ
// input: ngày, tháng, năm => 3 thẻ input

// output: ngày hợp lệ hoặc không hợp lệ

// process:
// tháng 2 -> năm nhuận 29 ngày, năm thường 28 ngày

// tháng có 30 ngày: 4, 6, 9, 11
// tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
document.getElementById("button-date").onclick = function () {
    let dayInput = Number(document.getElementById("dayInput").value);
    let monthInput = Number(document.getElementById("monthInput").value);
    let yearInput = Number(document.getElementById("yearInput").value);

    let isValidDate = false;
    // kiểm tra tháng
    // if tháng === 2 => kiểm tra năm nhuận
    // if năm nhuận => maxDay = 29
    // if năm thường => maxDay = 28

    // if tháng có 30 ngày => maxDay = 30
    // if tháng có 31 ngày => maxDay = 31

    // kiểm tra ngày <= maxDay => hợp lệ
    let maxDay = 0;
    if(monthInput === 2) {
        // kiểm tra năm nhuận
        if ((yearInput % 400 === 0) || (yearInput % 4 === 0 && yearInput % 100 !== 0)) {
            maxDay = 29;
        } else {
            maxDay = 28;
        }
    }

    // true or false or false or false => true
    if (monthInput === 4 || monthInput === 6 || monthInput === 9 || monthInput === 11) {
        // [4, 6, 9, 11].includes(monthInput) => boolean
        maxDay = 30;
    }

    if (monthInput === 1 || monthInput === 3 || monthInput === 5 || monthInput === 7 || monthInput === 8 || monthInput === 10 || monthInput ===12){
        // [1, 3, 5, 7, 8, 10, 12].includes(monthInput)
        maxDay = 31;
    }

    // so sánh dayInput với maxDay
    if (0 < dayInput && dayInput <= maxDay) {
        isValidDate = true;
    } else {
        isValidDate = false;
    }

    let resultDate = document.getElementById("result-date");
    if(isValidDate) {
        resultDate.innerHTML = "Ngày hợp lệ";
    } else {
        resultDate.innerHTML = "Ngày không hợp lệ";
    }
}