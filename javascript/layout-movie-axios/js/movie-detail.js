// B1: cấu hình axios
const API_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OCIsIkhldEhhblN0cmluZyI6IjI3LzEwLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc5MzA1OTIwMDAwMCIsIm5iZiI6MTc2MDAzMjgwMCwiZXhwIjoxNzkzMjEwNDAwfQ.3tVU5ix7Aep4d2sEtdd1uyliF7APKXP57xMpZlGPqDE";

// B2: DOM tới các element cần thiết
// nơi hiển thị chi tiết phim
// loading spinner
// nơi hiển thị lỗi
const movieDetail = document.getElementById("movieDetailContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const errorMessage = document.getElementById("errorMessage");

// nhận maPhim thông qua page list phim
// flow:
// khi user click vào phim ở page list phim
// => chuyển đến trang chi tiết phim với URL: movie-detail.html?maPhim=123
// ở trang chi tiết phim sẽ lấy maPhim từ URL
const getMaPhimFromURL = () => {
    // dùng hàm URLSearchParams: có sẵn của javascript giúp lấy query string (?maPhim=123)
    // lấy url từ browser => window.location.search
    const url = window.location.search;
    const queryString = new URLSearchParams(url);
    return queryString.get("maPhim");
}

// call API lấy chi tiết phim => async - await
const fetchMovieDetail = async (maPhim) => {
    try {
        // B1: mở loading spinner để chờ data từ API
        loadingSpinner.classList.remove("hidden");

        // B2: call API
        const apiUrl = `${API_URL}?MaPhim=${maPhim}`;

        const response = await axios.get(apiUrl, {
            headers: {
                'accept': 'application/json',
                'TokenCybersoft': TOKEN
            }
        })

        // B3: nếu call API thành công
        //  ẩn loading spinner
        loadingSpinner.classList.add("hidden");

        // render chi tiết phim ra giao diện
        movieDetail.classList.remove("hidden");
        const movie = response.data.content;
        const htmlContent = `
            <div class="bg-white rounded-lg shadow-xl overflow-hidden">
                <div class="relative">
                    <img
                        src="${movie.hinhAnh}"
                        alt="${movie.tenPhim}"
                        class="w-full h-96 object-cover"
                    />
                    ${movie.hot ? '<span class="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded text-lg font-bold">HOT</span>' : ''}
                </div>

                <div class="p-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">${movie.tenPhim}</h2>

                    ${movie.danhGia ? `
                        <div class="mb-4">
                            <span class="bg-yellow-400 text-gray-800 px-3 py-2 rounded text-lg font-bold">
                                ${movie.danhGia} / 10
                            </span>
                        </div>
                        `: ''}
                    
                    <div class="mb-4">
                        <h3 class="text-xl font-semibold mb-2">Mô tả phim</h3>
                        <p>${movie.moTa || 'Không có mô tả'}</p>
                    </div>

                    <button
                        onclick="showTrailer('${movie.trailer}')"
                        class="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200 font-semibold"
                    >
                        Xem trailer
                    </button>
                </div>
            </div>
        `

        movieDetail.innerHTML = htmlContent;
    } catch (error) {
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const maPhim = getMaPhimFromURL();
    
    fetchMovieDetail(maPhim);
})