function tinhChuViChuNhat(chieuDai, chieuRong) {
    return 2 * (chieuDai + chieuRong);
}

// ES6
const tinhChuVi = (chieuDai, chieuRong) => {
    // code xử lý
    return 2 * (chieuDai + chieuRong);
}

function tinhDienTichChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
}

const tinhDienTich = (chieuDai, chieuRong) => {
    return chieuDai * chieuRong;
}

// const tinhBinhPhuong = (number) => {
//     return number * number;
// }

// Lưu ý: nếu hàm chỉ có 1 tham số => có thể bỏ dấu ()
// nếu trong thân hàm (trong ngoặc nhọn) chỉ có 1 câu lệnh => bỏ ngoặc nhọn và từ khóa return
const tinhBinhPhuong = number => number * number;


// DOM tới button để thêm event onclick
// document.getElementById("button-hinhChuNhat").onclick = function () {
document.getElementById("button-hinhChuNhat").onclick = () => {
    // lấy giá trị từ input
    let chieuDai = Number(document.getElementById("widthInput").value);
    let chieuRong = Number(document.getElementById("heightInput").value);

    // let chuVi = tinhChuViChuNhat(chieuDai, chieuRong);
    let chuVi = tinhChuVi(chieuDai, chieuRong);
    // let dienTich = tinhDienTichChuNhat(chieuDai, chieuRong);
    let dienTich = tinhDienTich(chieuDai, chieuRong);

    // in kết quả
    let result = document.getElementById("result-hinhChuNhat");
    result.innerHTML = `Chu vi: ${chuVi} <br>
            Diện tích: ${dienTich}
    `;
}