class SinhVien {
    constructor(maSV, tenSV, email, ngaySinh, password, diemToan, diemLy, diemHoa, khoaHoc) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.email = email;
        this.ngaySinh = ngaySinh;
        this.password = password;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
        this.khoaHoc = khoaHoc;
        this.dtb = 0;
        this.loai = 0;
    }

    tinhDTB() {
        this.dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return this.dtb;
    }

    xepLoai() {
        // 9 <= dtb <= 10: Xuat sac
        // 9 <= dtb && dtb <= 10 -> c1: hay dung
        // dtb >=9 && dtb <=10 -> c2: khong hay dung
        if (9 <= this.dtb && this.dtb <= 10 ){
            this.loai = "Xuat sac";
        } else if (8 <= this.dtb && this.dtb < 9) {
            this.loai = "Gioi";
        } else if (6.5 <= this.dtb && this.dtb < 8) {
            this.loai = "Kha";
        } else if (5 <= this.dtb && this.dtb < 6.5) {
            this.loai = "Trung binh";
        } else {
            this.loai = "Yeu";
        }
    }

}