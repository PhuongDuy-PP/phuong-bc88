// ma sinh vien: txtMaSV
// ten sinh vien: txtTenSV
// loai sinh vien: loaiSV
// diem toan: txtDiemToan
// diem van: txtDiemVan

// show info sinh vien:
// ten sinh vien: spanTenSV
// ma sinh vien: spanMaSV
// loai sinh vien: spanLoaiSV
// dtb: spanDTB
// xep loai: spanXepLoai

let isValidDiemToan = false;
let isValidDiemVan = false;

document.getElementById("btnShowInfo").onclick = () => {
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let loaiSV = document.getElementById("loaiSV").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemVan = document.getElementById("txtDiemVan").value;

    // tao doi tuong sinh vien
    let sv = new SinhVien(maSV, tenSV, loaiSV, diemToan, diemVan);
    // tinh dtb
    sv.tinhDTB();
    // xep loai
    let xepLoai = sv.xepLoai();

    if(!isValidDiemToan || !isValidDiemVan) {
        alert("Dữ liệu điểm không hợp lệ. Vui lòng kiểm tra lại!");
        // reset thong bao loi va thong tin hien thi
        // document.getElementById("errorDiemToan").innerHTML = "";
        // document.getElementById("errorDiemVan").innerHTML = "";
        return;
    }

    // show thong tin sinh vien
    document.getElementById("spanTenSV").innerHTML = sv.tenSV;
    document.getElementById("spanMaSV").innerHTML = sv.maSV;
    document.getElementById("spanLoaiSV").innerHTML = sv.loai;
    document.getElementById("spanDTB").innerHTML = sv.dtb;
    document.getElementById("spanXepLoai").innerHTML = xepLoai;

}

const validateDiem = (event) => {
    const value = Number(event.target.value);

    if(isNaN(value) || value < 0 || value > 10) {
        return false;
    }
    return true;
}

const validateDiemToan = (event) => {
    let isValid = validateDiem(event);
    let errorDiemToan = document.getElementById("errorDiemToan");
    if(!isValid) {
        errorDiemToan.innerHTML = "Điểm toán không hợp lệ (0-10)";
        isValidDiemToan = false;
    } else {
        errorDiemToan.innerHTML = "";
        isValidDiemToan = true;
    }
}

const validateDiemVan = (event) => {
    let isValid = validateDiem(event);
    let errorDiemVan = document.getElementById("errorDiemVan");
    if(!isValid) {
        errorDiemVan.innerHTML = "Điểm văn không hợp lệ (0-10)";
        isValidDiemVan = false;
    } else {
        errorDiemVan.innerHTML = "";
        isValidDiemVan = true;
    }
}