class SinhVien {
    constructor(maSV, tenSV, loai, diemToan, diemVan) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.loai = loai;
        this.diemToan = diemToan;
        this.diemVan = diemVan;
        this.dtb = 0;
    }

    tinhDTB() {
        this.dtb = (Number(this.diemToan) + Number(this.diemVan)) / 2;
    }

    xepLoai() {
        let loai = "";
        // 9 <= dtb <= 10: Xuat sac
        // 9 <= dtb && dtb <= 10 -> c1: hay dung
        // dtb >=9 && dtb <=10 -> c2: khong hay dung
        if (9 <= this.dtb && this.dtb <= 10 ){
            loai = "Xuat sac";
        } else if (8 <= this.dtb && this.dtb < 9) {
            loai = "Gioi";
        } else if (6.5 <= this.dtb && this.dtb < 8) {
            loai = "Kha";
        } else if (5 <= this.dtb && this.dtb < 6.5) {
            loai = "Trung binh";
        } else {
            loai = "Yeu";
        }

        return loai;
    }

}