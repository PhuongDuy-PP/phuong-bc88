



const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OCIsIkhldEhhblN0cmluZyI6IjI3LzEwLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc5MzA1OTIwMDAwMCIsIm5iZiI6MTc2MDAzMjgwMCwiZXhwIjoxNzkzMjEwNDAwfQ.3tVU5ix7Aep4d2sEtdd1uyliF7APKXP57xMpZlGPqDE"

const profileContainer = document.getElementById("profileContainer");
const loadingSpinner = document.getElementById("loadingSpinner");

// lấy accessToken ở trong local storage
const getAccessToken = () => {
    const userInfoStr = localStorage.getItem("userInfo");
    let userInfo = null;
    if (userInfoStr) {
        userInfo = JSON.parse(userInfoStr);
    }

    const accessToken = userInfo.accessToken;
    return accessToken;
}

// gọi API thông tin tài khoản để lấy thông tin chi tiết của user
// header:
// - Authorization: Bearer <access token>
// - TokenCybersoft: <token>
// - accept: application/json

const fetchProfile = async () => {
    try {
        // hiển thị loading
        loadingSpinner.classList.remove("hidden");

        const accessToken = getAccessToken();

        const response = await axios.post(
            API_URL,
            {}, // body rỗng vì API không cần gửi dữ liệu
            {
                headers: {
                    'accept': "application/json",
                    'Authorization': `Bearer ${accessToken}`,
                    'TokenCybersoft': TOKEN
                }
            }
        )


        loadingSpinner.classList.add("hidden");

        // thành công
        // => data của API sẽ lưu trong data của axios
        console.log(response.data);
        let user = response.data.content;

        // render data
        // Phần 1: render thông tin cơ bản user
        let htmlContent = "";
        htmlContent = `
            <div class="p-6 border-b border-gray-200">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Thông Tin Cá Nhân</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <strong class="text-gray-700 block mb-1">Tài khoản:</strong>
                        <p class="text-gray-600">${user.taiKhoan}</p>
                    </div>
                    
                    <div>
                        <strong class="text-gray-700 block mb-1">Họ tên:</strong>
                        <p class="text-gray-600">${user.hoTen}</p>
                    </div>
                    
                    <div>
                        <strong class="text-gray-700 block mb-1">Email:</strong>
                        <p class="text-gray-600">${user.email}</p>
                    </div>
                    
                    <div>
                        <strong class="text-gray-700 block mb-1">Số điện thoại:</strong>
                        <p class="text-gray-600">${user.soDT}</p>
                    </div>
                    
                    <div>
                        <strong class="text-gray-700 block mb-1">Mã nhóm:</strong>
                        <p class="text-gray-600">${user.maNhom}</p>
                    </div>
                    
                    <div>
                        <strong class="text-gray-700 block mb-1">Loại người dùng:</strong>
                        <p class="text-gray-600">${user.loaiNguoiDung.tenLoai}</p>
                    </div>
                </div>
            </div> 
        `

        // kiểm tra số lượng vé đã đặt của user
        // nếu =0 => ko render lịch sử đặt vé
        // ngược lại => render lịch sử đặt vé của user
        // => ưu tiên viết hàm khác để render lịch sử đặt vé
        
        // Phần 2: render thông tin lịch sử đặt vé của user
        if(user.thongTinDatVe && user.thongTinDatVe.length > 0) {
            console.log(user.thongTinDatVe)
            htmlContent += renderBookingHistory(user.thongTinDatVe)
        }
        // console.log(renderBookingHistory(user.thongTinDatVe))

        profileContainer.innerHTML = htmlContent;
    } catch (error) {

    }
}

const renderBookingHistory = (bookingHistory) => {
    let content = "";

    for(let booking of bookingHistory) {
        console.log("booking");
        console.log(booking)
        
        // clean data
        // 1. convert date => date VN
        // 2. giá vé: 125000 => 125.000
        const ngayDat = new Date(booking.ngayDat);
        const formattedDate = ngayDat.toLocaleDateString('vi-VN');

        const formattedPrice = booking.giaVe.toLocaleString('vi-VN');

        // gom các vé ghế thành 1 list ghế
        const listGhe = booking.danhSachGhe;
        const tenGhe = listGhe.map(ghe => ghe.tenGhe).join(', ');
        // tên rạp chiếu phim => tên rạp ở vé ghế đầu tiên
        const tenRap = listGhe[0]?.tenRap;
        
        console.log(formattedDate)

        content += `
            <div class="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-shrink-0">
                    <img 
                        src="${booking.hinhAnh}" 
                        alt="${booking.tenPhim}"
                        class="w-32 h-48 object-cover rounded"
                        onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'"
                    />
                </div>
                
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${booking.tenPhim}</h3>
                    
                    <div class="space-y-2 text-sm">
                        <div>
                            <strong class="text-gray-700">Mã vé:</strong>
                            <span class="text-gray-600 ml-2">${booking.maVe}</span>
                        </div>
                        
                        <div>
                            <strong class="text-gray-700">Ngày đặt:</strong>
                            <span class="text-gray-600 ml-2">test</span>
                        </div>
                        
                        <div>
                            <strong class="text-gray-700">Rạp:</strong>
                            <span class="text-gray-600 ml-2">test</span>
                        </div>
                        
                        <div>
                            <strong class="text-gray-700">Ghế:</strong>
                            <span class="text-gray-600 ml-2">test</span>
                        </div>
                        
                        <div>
                            <strong class="text-gray-700">Thời lượng:</strong>
                            <span class="text-gray-600 ml-2">120 phút</span>
                        </div>
                        
                        <div>
                            <strong class="text-gray-700">Giá vé:</strong>
                            <span class="text-gray-600 ml-2 font-semibold text-green-600">$120 đ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        console.log(content)
    }

    
    return content;
}

// render thông tin user ra page profile.html
document.addEventListener("DOMContentLoaded", fetchProfile);