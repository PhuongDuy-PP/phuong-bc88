// ma sinh vien: txtMaSV
// ten sinh vien: txtTenSV
// email: txtEmail
// mat khau: txtPass
// ngay sinh: txtNgaySinh
// khoa hoc: khSV
// diem toan: txtDiemToan
// diem ly: txtDiemLy
// diem hoa : txtDiemHoa

// error:
// ma sinh vien: spanMaSV
// ten sinh vien: spanTenSV
// email: spanEmailSV
// mat khau: spanMatKhau
// ngay sinh: spanNgaySinh
// diem toan: spanToan
// diem ly: spanLy
// diem hoa: spanHoa

// btn thêm sinh viên: btnThem
// btn reset form: btnReset
// btn cập nhật sinh viên: btnCapNhat

// show info sinh vien:
// tbody: tbodySinhVien

// search:
// input search: txtSearch
// btn search: btnSearch
let listSV = new Dssv(); // []

const showListSinhVien = (filterDssv = listSV.dssv) => {
    // DOM tới table sẽ hiển thị danh sách sinh viên
    let tbody = document.getElementById("tbodySinhVien");

    // biên content để chứa list sinh viên cũng như là
    // làm sạch giao diện mỗi lần hiển thị lại
    let content = "";
    // dùng vòng lặp kiểu mới for...of (duyệt từng phần từ trong mảng)
    // custom attribute html5: data-...
    // giúp mình thêm các thuộc tính riêng vào thẻ html và xử lý trên từng dòng dữ liệu
    for (let sv of filterDssv) {
        let dtb = sv.tinhDTB();
        content += `
            <tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${dtb}</td>
                <td>
                    <button class="btn btn-sm btn-info" data-action="edit" data-id="${sv.maSV}" onclick="editSV('${sv.maSV}')">Sửa</button>
                    <button class="btn btn-sm btn-danger" data-action="delete" data-id="${sv.maSV}" onclick="deleteSV('${sv.maSV}')">Xóa</button>
                </td>
            </tr>
        `
    }
    // show ra giao diện
    tbody.innerHTML = content;
}

const resetForm = () => {
    document.getElementById("formQLSV").reset();
    // enable lại input mã sinh viên và email
    document.getElementById("txtMaSV").disabled = false;
    document.getElementById("txtMaSV").style.cursor = "auto";
    document.getElementById("txtEmail").disabled = false;
    document.getElementById("txtEmail").style.cursor = "auto";

    // ẩn nút Cập nhật và hiển thị nút Thêm sinh viên
    document.getElementById("btnCapNhat").style.display = "none";
    document.getElementById("btnThem").style.display = "inline-block";
}

// hàm edit sinh viên
const editSV = (maSV) => {
    console.log("Mã sinh viên cần sửa:", maSV);
    // B1: filter sinh viên cần sửa từ danh sách
    // kết quả trả về của hàm filter luôn là 1 mảng
    let svEdit = listSV.dssv.filter(sv => sv.maSV === maSV);
    if(svEdit && svEdit.length > 0) {
        // B2: hiển thị thông tin sinh viên lên form
        // ma sinh vien: txtMaSV
        // ten sinh vien: txtTenSV
        // email: txtEmail
        // mat khau: txtPass
        // ngay sinh: txtNgaySinh
        // khoa hoc: khSV
        // diem toan: txtDiemToan
        // diem ly: txtDiemLy
        // diem hoa : txtDiemHoa
        let sv = svEdit[0];
        document.getElementById("txtMaSV").value = sv.maSV;
        document.getElementById("txtTenSV").value = sv.tenSV;
        document.getElementById("txtEmail").value = sv.email;
        document.getElementById("txtPass").value = sv.password;
        document.getElementById("txtNgaySinh").value = sv.ngaySinh;
        document.getElementById("khSV").value = sv.khoaHoc;
        document.getElementById("txtDiemToan").value = sv.diemToan;
        document.getElementById("txtDiemLy").value = sv.diemLy;
        document.getElementById("txtDiemHoa").value = sv.diemHoa;
    }

    // QUAN TRONG disable input mã sinh viên, email khi sửa
    document.getElementById("txtMaSV").disabled = true;
    // cusor not-allowed
    document.getElementById("txtMaSV").style.cursor = "not-allowed";
    document.getElementById("txtEmail").disabled = true;
    document.getElementById("txtEmail").style.cursor = "not-allowed";

    // đổi trạng thái nút Thêm sinh viên thành Cập nhật sinh viên
    // ẩn nút Thêm sinh viên
    document.getElementById("btnThem").style.display = "none";
    // hiển thị nút Cập nhật
    document.getElementById("btnCapNhat").style.display = "inline-block";
}

// handle nut Cập nhật sinh viên
document.getElementById("btnCapNhat").onclick = () => {
    // B1: lấy thông tin từ form
    // ma sinh vien: txtMaSV
        // ten sinh vien: txtTenSV
        // email: txtEmail
        // mat khau: txtPass
        // ngay sinh: txtNgaySinh
        // khoa hoc: khSV
        // diem toan: txtDiemToan
        // diem ly: txtDiemLy
        // diem hoa : txtDiemHoa
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPass").value;
    let ngaySinh = document.getElementById("txtNgaySinh").value;
    let khoaHoc = document.getElementById("khSV").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;

    // tạo đối tượng sinh viên với thông tin từ form
    let svUpdate = new SinhVien(maSV, tenSV, email, ngaySinh, password, diemToan, diemLy, diemHoa, khoaHoc);
    //  tìm sinh viên cần cập nhật trong danh sách dựa vào mã sinh viên
    // dùng for...of để duyệt mảng
    for (let sv of listSV.dssv) {
        if(sv.maSV === maSV) {
            // cập nhật thông tin sinh viên
            sv.tenSV = svUpdate.tenSV;
            sv.email = svUpdate.email;
            sv.password = svUpdate.password;
            sv.ngaySinh = svUpdate.ngaySinh;
            sv.khoaHoc = svUpdate.khoaHoc;
            sv.diemToan = svUpdate.diemToan;
            sv.diemLy = svUpdate.diemLy;
            sv.diemHoa = svUpdate.diemHoa;
            break; // thoát vòng lặp khi đã tìm thấy và cập nhật
        }
    }

    // B3: hiển thị lại danh sách sinh viên sau khi cập nhật
    showListSinhVien();

    // B4: reset form sau khi cập nhật
    resetForm();

    // B5: chuyển trạng thái nút Cập nhật thành Thêm sinh viên
    // ẩn nút Cập nhật
    document.getElementById("btnCapNhat").style.display = "none";
    // hiển thị nút Thêm sinh viên
    document.getElementById("btnThem").style.display = "inline-block";
}


// hàm delete sinh viên
const deleteSV = (maSV) => {
    console.log("Mã sinh viên cần xóa:", maSV);
    // confirm("Xóa sinh viên thành công!");
    if(!confirm(`Bạn có chắc chắn muốn xóa sinh viên mã ${maSV} không?`)) {
        return; // dừng hàm
    }

    // B1: lọc ra danh sách sinh viên không bao gồm sinh viên cần xóa
    let dssvMoi = listSV.dssv.filter(sv => sv.maSV !== maSV);

    // B2: gán lại danh sách mới cho danh sách cũ
    listSV.dssv = dssvMoi;

    // B3: hiển thị lại danh sách sinh viên sau khi xóa
    showListSinhVien();
}

document.getElementById("btnThem").onclick = () => {
    // fail first
    // validation form
    if(!validateForm("create")) {
        // thông báo lỗi
        alert("Dữ liệu không hợp lệ. Vui lòng kiểm tra lại!");
        return; // dừng hàm nếu validation không hợp lệ
    }

    // lấy tất cả thông tin dữ liệu từ form
    let maSV = document.getElementById("txtMaSV").value;
    let tenSV = document.getElementById("txtTenSV").value;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPass").value;
    let ngaySinh = document.getElementById("txtNgaySinh").value;
    let khoaHoc = document.getElementById("khSV").value;
    let diemToan = document.getElementById("txtDiemToan").value;
    let diemLy = document.getElementById("txtDiemLy").value;
    let diemHoa = document.getElementById("txtDiemHoa").value;

    // tạo đối tượng sinh viên
    let sv = new SinhVien(maSV, tenSV, email, ngaySinh, password, diemToan, diemLy, diemHoa, khoaHoc);

    // thêm sinh viên vào danh sách
    listSV.themSV(sv);
    
    // hiển thị danh sách sinh viên ra giao diện
    // LƯU Ý: mỗi lần thêm sinh viên mới vào danh sách
    // trước khi hiển thị thì phải clear giao diện cũ (danh sách cũ)
    // sau đó hiển thị lại với danh sách mới (có sinh viên vừa thêm)
    showListSinhVien();

    // reset form sau khi thêm sinh viên thành công
    resetForm();

    // lưu dữ liệu danh sách sinh viên vào localStorage
    saveDataToLocalStorage();
}

// hàm search theo tên sinh viên
const searchSVByName = (tenSV) => {

    // B1: convert keyword về chữ thường để so sánh
    let keywordLower = tenSV.toLowerCase();

    // B2: lọc danh sách sinh viên theo tên chưa keyword
    let filterDssv = listSV.dssv.filter(sv => {
        let tenSVLower = sv.tenSV.toLowerCase();
        return tenSVLower.includes(keywordLower);
    })

    // B3: hiển thị danh sách sinh viên sau khi lọc ra giao diện
    // sửa lại hàm showListSinhVien để nhận tham số là mảng sinh viên
    showListSinhVien(filterDssv);
}

// hàm search theo tên sinh viên
document.getElementById("btnSearch").onclick = () => {
    let keyword = document.getElementById("txtSearch").value;
    searchSVByName(keyword);
}

// bắt event enter trên ô input search
document.getElementById("txtSearch").onkeydown = (event) => {
    if(event.key === "Enter") {
        let keyword = document.getElementById("txtSearch").value;
        searchSVByName(keyword);
    }
}

// search real-time khi gõ từ khóa - 2s
document.getElementById("txtSearch").oninput = (event) => {
    // them setTimeout de tranh viec go chuong trinh bi lag
    setTimeout(() => {
        let keyword = document.getElementById("txtSearch").value;
        searchSVByName(keyword);
    }, 2000);
}

const saveDataToLocalStorage = () => {
    // tạo key cho localStorage cho việc lưu list sinh viên
    const STORAGE_KEY = "dssv";

    // chuyển đổi danh sách sinh viên về dạng chuỗi
    let dssvString = JSON.stringify(listSV.dssv);

    // lưu chuỗi data vào localStorage
    localStorage.setItem(STORAGE_KEY, dssvString);
}

const getDataFromLocalStorage = () => {
    const STORAGE_KEY = "dssv";

    // lấy data từ localStorage
    // LƯU Ý: data lấy từ localStorage luôn là chuỗi
    let dssvString = localStorage.getItem(STORAGE_KEY);
    if(!dssvString) {
        return; // dừng hàm nếu không có data
    }

    // convert data dạng chuỗi về dạng mảng object
    let dssvData = JSON.parse(dssvString);

    // [
    //     {
    //         maSV: "SV001",
    //         tenSV: "Nguyen Van A",
    //         email: "",
    //     },
    //     {
    //         maSV: "SV002",
    //         tenSV: "Tran Thi B",
    //         email: "",
    //     }
    // ]

    // chuyển đổi mảng thành các đối tượng SinhVien
    let dssv = dssvData.map((sv) => {
        return new SinhVien(
            sv.maSV,
            sv.tenSV,
            sv.email,
            sv.ngaySinh,
            sv.password,
            sv.diemToan,
            sv.diemLy,
            sv.diemHoa,
            sv.khoaHoc
        );
    })
    listSV.dssv = dssv;
    
    // hiển thị danh sách sinh viên ra giao diện
    showListSinhVien();
}

// để mỗi lần F5 mà không bị mất dữ liệu thì
// => load data từ localStorage thông qua DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    getDataFromLocalStorage();
})