const REGISTER_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJBSSBPZmZpY2UgMTIiLCJIZXRIYW5TdHJpbmciOiIwNi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODA3MDQwMDAwMDAiLCJuYmYiOjE3NjU5OTA4MDAsImV4cCI6MTc4MDg1MTYwMH0.LOwfvhFJFLWo6kOvQBAt1kZhUtIGgtP4GOewOuulJHs"
const MA_NHOM = "GP01";

const registerForm = document.getElementById("registerForm");
const errorMessage = document.getElementById("errorMessage");
const errorText = document.getElementById("errorText");
const successMessage = document.getElementById("successMessage");
const successText = document.getElementById("successText");

// handle đăng ký
// B1: ngăn chặn form sumbit mặc định (tránh reload trang)
// B2: lấy giá trị từ form (hoTen, taiKhoan, email, hoTen)
// B3: validate dữ liệu (kiểm tra data đầy đủ,...)
// B4: gọi API đăng ký (POST method)
// B5: xử lý kết quả
const handleRegister = async (event) => {
    event.preventDefault();

    const hoTen = document.getElementById("hoTen").value.trim();
    const taiKhoan = document.getElementById("taiKhoan").value.trim();
    const matKhau = document.getElementById("matKhau").value.trim();
    const email = document.getElementById("email").value.trim();
    const soDT = document.getElementById("soDt").value.trim();

    if(!hoTen || !taiKhoan || !matKhau || !email || !soDT) {
        errorText.textContent = "Vui lòng nhập đầy đủ thông tin";
        errorMessage.classList.remove("hidden");
        return;
    }

    if(matKhau.length < 3) {
        errorText.textContent = "Mật khẩu phải có ít nhất 3 ký tự";
        errorMessage.classList.remove("hidden");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)) {
        errorText.textContent = "Email không đúng định dạng";
        errorMessage.classList.remove("hidden");
        return;
    }

    try {
        const response = await axios.post(
            REGISTER_URL,
            {
                taiKhoan: taiKhoan,
                matKhau: matKhau,
                email: email,
                soDt: soDT,
                maNhom: MA_NHOM,
                hoTen: hoTen
            }, 
            {
                headers: {
                    'accept': 'application/json',
                    'TokenCybersoft': TOKEN,
                    'Content-Type': 'application/json-patch+json'
                }
            }
        )

        const data = response.data;
        successText.textContent = "Đăng ký thành công";
        successMessage.classList.remove("hidden");

        // LƯU Ý: sau khi đăng ký thành công user mới
        // sẽ đợi khoảng 1-2s để backend tạo user mới
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    } catch (error) {
        let errorMsg = error.response?.data.content;

        errorText.textContent = errorMsg;
        errorMessage.classList.remove("hidden");
    }
}

registerForm.addEventListener("submit", handleRegister);
