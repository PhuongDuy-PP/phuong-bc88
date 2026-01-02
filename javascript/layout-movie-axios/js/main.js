// cấu hình axios

const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OCIsIkhldEhhblN0cmluZyI6IjI3LzEwLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc5MzA1OTIwMDAwMCIsIm5iZiI6MTc2MDAzMjgwMCwiZXhwIjoxNzkzMjEwNDAwfQ.3tVU5ix7Aep4d2sEtdd1uyliF7APKXP57xMpZlGPqDE"

// tạo biến lưu trữ danh sách phim lấy từ API
let movieList = [];

// DOM tới các element cần thiết để tương tác với người dùng
// nơi render list phim, loading spinner, nơi hiển thị lỗi,...
const movieListContainer = document.getElementById("movieList");

// spinner loading
const loadingSpinner = document.getElementById("loadingSpinner");

// workflow render danh sách phim
// B1: Hiển thị loading spinner
//   - Xóa class hidden của spinner
//   - xóa nội dung cũ bên trong thẻ movieListContainer

// B2: gọi API lấy danh sách phim
//   - Sử dụng axios để gọi API
//   - truyền headers bao gồm TokenCybersoft,...
//   - Chờ kết quả trả về từ API

// B3: Xử lý kết quả trả về
//   - nếu gọi API thành công
//     + ẩn loading spinner
//     + lưu dữ liệu trả về vào biến movieList
//     + gọi hàm renderMovieList để hiển thị list phim
//   - nếu gọi API thất bại
//     + ẩn loading spinner
//     + hiển thị thông báo lỗi cho người dùng

// LƯU Ý: để call API thì dùng cơ chế bất đồng bộ (async/await)
const renderMovieList = async () => {
    try {
        // B1: Hiển thị loading spinner
        loadingSpinner.classList.remove("hidden");
        movieListContainer.innerHTML = "";

        // B2: gọi API lấy danh sách phim
        const response = await axios.get(API_URL, {
            headers:{
                'accept': 'application/json',
                'TokenCybersoft': TOKEN
            }
        })
        // data là thuộc tính có sẵn của axios response
        // nơi chứa dữ liệu trả về từ API
        console.log("response", response.data);

        // B3: Xử lý kết quả trả về
        // ẩn loading spinner => them class hidden vào spinner
        loadingSpinner.classList.add("hidden");

        // luu dữ liệu trả về vào biến movieList
        movieList = response.data.content;

        // hiển thị danh sách phim
        let htmlContent = "";

        for(let movie of movieList) {
            htmlContent += `
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative">
                    <img 
                        src="${movie.hinhAnh}"
                        alt="${movie.tenPhim}"
                        class="w-full h-80 object-cover"
                        onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'"
                    />
                    ${movie.hot ? '<span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">HOT</span>' : ''}
                    ${movie.danhGia ? `<span class="absolute top-2 left-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded text-sm font-bold">⭐ ${movie.danhGia}/10</span>`: ''}
                    
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2">${movie.tenPhim}</h3>
                    <p class="text-gray-600 text-sm mb-3">
                        <strong>Ngày khởi chiếu:</strong> ${movie.ngayKhoiChieu}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-3">
                    ${movie.dangChieu ? '<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Đang chiếu</span>': ''}
                    ${movie.sapChieu ? '<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Sắp chiếu</span>': ''}
                    </div>

                    <div class="flex gap-2">
                        <a
                            href="movie-detail.html?maPhim=${movie.maPhim}"
                            class="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                        >
                            Chi tiết
                        </a>

                        <button 
                            data-ma-phim="${movie.maPhim}"
                            onclick="showTrailer('${movie.trailer}')"
                            class="flex-1 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 text-sm font-semibold">
                            Xem Trailer
                        </button>
                    </div>

                </div>
            </div>
            `
        }

        movieListContainer.innerHTML = htmlContent;
    } catch (error) {
        
    }
}

const getEmbedUrl = (url) => {
    // Bước 1: Tách video ID từ URL bằng regex
    // Regex tìm pattern: youtube.com/watch?v=VIDEO_ID hoặc youtu.be/VIDEO_ID
    // [^&\n?#]+: lấy tất cả ký tự không phải &, \n, ?, # (để lấy video ID)
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);

    // Bước 2: Nếu tìm thấy video ID thì tạo embed URL, nếu không thì trả về URL gốc
    // videoId[1]: lấy phần tử thứ 2 (video ID) từ kết quả match
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
};

const showTrailer = (trailerUrl) => {
    // DOM tới các element popup trailer
    const trailerPopup = document.getElementById("trailerPopup");
    const trailerIframe = document.getElementById("trailerIframe");
    const closeTrailerBtn = document.getElementById("closeTrailer");

    // set src của iframe
    trailerIframe.src = getEmbedUrl(trailerUrl);

    // hiển thị popup
    trailerPopup.classList.remove("hidden");

    // gắn event cho nút đóng popup
    closeTrailerBtn.onclick = () => {
        trailerPopup.classList.add("hidden");
        // dừng video khi đóng popup
        trailerIframe.src = "";
    }
}
// renderMovieList();




// hàm render nội dung header
// nếu user chưa login -> hiển thị nút Đăng nhập và Đăng ký
// nếu user đã login (user info ở trong local storage) -> hiển thị nút Đăng xuất, profile
// và avatar (nếu có)
const renderHeader = () => {
    // DOM tới element header
    const headerContent = document.getElementById("headerContent");

    // lấy thông tin user từ localStorage
    const userInfoStr = localStorage.getItem("userInfo");
    // convert value từ string -> JSON
    let userInfo = null; // giả sử không có value userInfoStr
    if(userInfoStr) {
        userInfo = JSON.parse(userInfoStr)
    }

    // render content header dựa vào userInfo
    let htmlContent = "";
    if (userInfo) {
        htmlContent = `
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex justify-center items-center text-2xl font-bold">
                    ${userInfo.hoTen.charAt(0).toUpperCase()}
                </div>

                <div>
                    <p>${userInfo.hoTen}</p>
                    <p class="text-white">${userInfo.email}</p>
                </div>
            </div>

            <div>
                <a href="profile.html" class="bg-white bg-opacity-30 hover:bg-opacity-40 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200 mr-2">
                    Profile
                </a>
                <button id="logoutBtn" onclick="handleLogout()" class="bg-white bg-opacity-30 hover:bg-opacity-40 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200">
                    Đăng xuất
                </button>
            </div>
        `
    } else {
        htmlContent = `
            <div class="w-full flex justify-center items-center gap-3">
                <a href="login.html" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                    Đăng nhập
                </a>

                <a href="register.html" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                    Đăng ký
                </a>
            </div>
        `
    }
    headerContent.innerHTML = htmlContent;
}
const handleLogout = () => {
    // xóa thông tin user ra khỏi localStorage
    localStorage.removeItem("userInfo");

    // reload trang để header hiển thị nút Đăng nhập, đăng ký
    window.location.reload();
}

// dùng DOMContentLoaded để đảm bảo HTML load xong rồi mới chạy JS
// để call API
document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderMovieList();
})