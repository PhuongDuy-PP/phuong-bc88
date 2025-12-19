// hiển thị lỗi ở từng ô input
const showError = (spanId, message) => {
    const spanElement = document.getElementById(spanId);
    if(spanElement) {
        spanElement.innerText = message;
    }
}

// xóa lỗi ở từng ô input
const clearError = (spanId) => {
    const spanElement = document.getElementById(spanId);
    if(spanElement) {
        spanElement.innerText = "";
    }
}

// hàm kiểm tra rỗng - required
const kiemtraRong = (value, spanId, message) => {
    // dùng hàm trim() để loại bỏ khoảng trắng đầu và cuối
    if(!value || value.trim() === "") {
        showError(spanId, message);
        return false;
    }

    clearError(spanId);
    return true;
}

// hàm kiểm tra maSV trùng
const kiemtraMaSVTrung = (maSV) => {
    // lấy listSV (được khởi tạo trong file main.js) để kiểm tra
    // C1: dùng hàm find
    // const existSV = listSV.dssv.find(sv => sv.maSV === maSV);
    // if(existSV) {
    //     showError("spanMaSV", "Mã SV đã tồn tại");
    //     return false;
    // }
    // clearError("spanMaSV");
    // return true;
    // C2: dùng hàm some
    const existSV = listSV.dssv.some(sv => sv.maSV === maSV);
    if(existSV) {
        showError("spanMaSV", "Mã SV đã tồn tại");
        return false;
    }
    clearError("spanMaSV");
    return true;
    // C3: dùng vòng lặp for
}

// kiểm tra format data (email, password, SDT)
const kiemtraFormatEmail = (email, spanId) => {
    // regex email
    const emailRegrex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegrex.test(email)) {
        showError(spanId, "Email không đúng định dạng");
        return false;
    }
    clearError(spanId);
    return true;
}

const kiemtraFormatPassword = (password, spanId) => {
    // regex password
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!passRegex.test(password)) {
        showError(spanId, "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số");
        return false;
    }

    clearError(spanId);
    return true;
}

// hàm validation tổng hợp các loại kiểm tra
// thêm mode create để thêm kiểm tra trùng mã sinh viên khi tạo mới
const validateForm = (mode = "create") => {
    let isValid = true;

    // lấy tất cả value từ các form input
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPass").value;
    let ngaySinh = document.getElementById("txtNgaySinh").value;
    let khoaHoc = document.getElementById("khSV").value;

    // isNaN(diemToan) || (diemToan < 0 || diemToan >10)
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;

    // kiểm tra rỗng cho maSV
    if(!kiemtraRong(maSV, "spanMaSV", "Mã SV không được để trống")) {
        isValid = false;
    }
    // kiểm tra trùng mã SV khi ở mode create
    // LƯU Y: không nên để logic kiểm tra trùng mã SV ở event oninput
    // vì mỗi lần user nhập thì sẽ check liên tục => sập ứng dụng
    if(mode === "create" && !kiemtraMaSVTrung(maSV)) {
        isValid = false;
    }
    // kiểm tra rỗng cho tenSV
    if(!kiemtraRong(tenSV, "spanTenSV", "Tên SV không được để trống")) {
        isValid = false;
    }

    // kiểm tra rỗng cho email
    if(!kiemtraRong(email, "spanEmailSV", "Email không được để trống")) {
        isValid = false;
    }

    // kiểm tra định dạng email
    if(!kiemtraFormatEmail(email, "spanEmailSV")) {
        isValid = false;
    }

    // kiểm tra định dạng cho password
    if(!kiemtraFormatPassword(password, "spanMatKhau")) {
        isValid = false;
    }

    return isValid;
}

// thêm event oninput để validation ngay khi user nhập dữ liệu
document.getElementById("txtPass").oninput = (event) => {
    const value = event.target.value;
    kiemtraFormatPassword(value, "spanMatKhau");
}

document.getElementById("txtEmail").oninput = (event) => {
    const value = event.target.value;
    console.log("value", value);
    kiemtraFormatEmail(value, "spanEmailSV");
}

document.getElementById("txtMaSV").oninput = (event) => {
    const value = event.target.value;
    kiemtraRong(value, "spanMaSV", "Mã SV không được để trống");
};

document.getElementById("txtTenSV").oninput = (event) => {
    const value = event.target.value;
    kiemtraRong(value, "spanTenSV", "Tên SV không được để trống");
};
