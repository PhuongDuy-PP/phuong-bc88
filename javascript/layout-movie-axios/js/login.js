// B1: cấu hình axios
const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OCIsIkhldEhhblN0cmluZyI6IjI3LzEwLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc5MzA1OTIwMDAwMCIsIm5iZiI6MTc2MDAzMjgwMCwiZXhwIjoxNzkzMjEwNDAwfQ.3tVU5ix7Aep4d2sEtdd1uyliF7APKXP57xMpZlGPqDE";

// B2: DOM tới các element cần thiết
// login form -> lấy value từ thẻ input
// error message -> nơi hiển thị thông báo lỗi
// error text -> nơi hiển thị nội dung lỗi

const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const errorText = document.getElementById("errorText");

// B3: hàm handle đăng nhập
// flow:
// B1: lấy value từ form thông qua javascript, ngăn chặn reload page
// B2: call API đăng nhập với data lấy từ form
// B3:
// - thành công: lưu thông tin user vào localStorage, sau đó chuyển sang trang list phim
// - thất bại: hiển thị thông báo lỗi

const handleLogin = async (event) => {
    event.preventDefault();

    const taiKhoan = document.getElementById("taiKhoan").value.trim();
    const matKhau = document.getElementById("matKhau").value.trim();

    if(!taiKhoan || !matKhau) {
        errorText.textContent = "Vui lòng nhập đầy đủ tài khoản và mật khẩu";
        errorMessage.classList.remove("hidden");
        return;
    }

    try {
        // ẩn error message nếu đang hiển thị
        errorMessage.classList.add("hidden");

        // post() -> 3 params
        // param 1: url của API
        // param 2: body -> object
        // param 3: config(header,...) -> object
        const response = await axios.post(API_URL, {
            taiKhoan: taiKhoan,
            matKhau: matKhau
        },
        {
            headers: {
                'accept': 'application/json',
                'TokenCybersoft': TOKEN,
                'Content-Type': 'application/json-patch+json'
            }
        })

        console.log(response);

        // nếu thành công
        // lưu resonse vào localStorage
        // convert từ json -> string json vì localStorage chỉ nhận value là string
        const userInfo = JSON.stringify(response.data.content);
        localStorage.setItem("userInfo", userInfo);

        // chuyển sang trang list movie
        window.location.href = "mock-data.html";
    } catch (error) {
        const errorMsg = error.response?.data?.content;
        errorText.textContent = errorMsg;
        errorMessage.classList.remove("hidden");
        console.error("error", error);
    }
}

// B4: gắn event submit cho submit form
loginForm.addEventListener("submit", handleLogin);

// ô nhớ -> tham trị và tham chiếu ()
// int void swap(int &a, int &b) {
//     int temp = a;
//     a = b;
//     b = temp;
// }

// string là tập hợp các ký tự (char)
// String str = "Hello World";
// char[] arr = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];