class SinhVien {
    // thuộc tính - attribute - property - field - ...
    // đặc trưng của đối tượng
    constructor(maSV, tenSV, namSinh, lop, diaChi) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.namSinh = namSinh;
        this.lop = lop;
        this.diaChi = diaChi;
    }

    // phương thức - method - hành vi - function - ...
    hienThiThongTin() {
        console.log(`
            Mã SV: ${this.maSV} <br/>
            Tên SV: ${this.tenSV} <br/>
            Năm sinh: ${this.namSinh} <br/>
            Lớp: ${this.lop} <br/>
            Địa chỉ: ${this.diaChi} <br/>
        `)
    }
}

// tạo đối tượng SinhVien
const sv1 = new SinhVien("SV001", "Nguyễn Văn A", 2000, "BC88", "Hà Nội");
sv1.hienThiThongTin();
console.log(sv1.maSV);

const sv2 = new SinhVien("SV002", "Trần Thị B", 1999, "BC88", "Hồ Chí Minh");
sv2.hienThiThongTin();

// OOP có 4 tính chất:
// 1. Tính kế thừa (Inheritance) => dễ
// quan hệ cha - con
// class con kế thừa tất cả thuộc tính và phương thức của class cha
// LƯU Ý: class cha không được dùng để tạo đối tượng (tính trừu tượng)
// class cha chỉ để dùng cho class con kế thừa
class NhanVien {  // class cha
    constructor(maNV, tenNV, luongCoBan) {
        this.maNV = maNV;
        this.tenNV = tenNV;
        this.luongCoBan = luongCoBan;
    }

    hienThiThongTin() {
        console.log(`
            Ma NV: ${this.maNV} \n
            Ten NV: ${this.tenNV} \n
            Luong co ban: ${this.luongCoBan} \n
        `)
    }
}

// class con: NhanVienFullTime và NhanVienPartTime
class NhanVienFullTime extends NhanVien {
    constructor(maNV, tenNV, luongCoBan, soNgayLamViec) {
        // gọi lại constructor của class cha
        super(maNV, tenNV, luongCoBan); // kế thừa hàm khởi tạo của class cha
        this.soNgayLamViec = soNgayLamViec;
    }

    hienThiThongTin() {
        // gọi lại phương thức hienThiThongTin của class cha
        super.hienThiThongTin();
        console.log(`So ngay lam viec: ${this.soNgayLamViec} \n`);
    }
}

let nv1 = new NhanVienFullTime("NV001", "Le Van C", 5000000, 22);
nv1.hienThiThongTin();

// {
//     "maNV": "NV001",
//     "tenNV": "Le Van C",
//     "luongCoBan": 5000000,
//     "soNgayLamViec": 22
// }


// 2. Tính đóng gói (Encapsulation) => dễ

// 3. Tính đa hình (Polymorphism) => khó
// 4. Tính trừu tượng (Abstraction) => khó