// Bài 1
function tinhKetQua() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diemMon1").value * 1;
  var diem2 = document.getElementById("diemMon2").value * 1;
  var diem3 = document.getElementById("diemMon3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;

  var diemUuTienKhuVuc = 0;
  if (khuVuc === "A") {
    diemUuTienKhuVuc += 2;
  } else if (khuVuc === "B") {
    diemUuTienKhuVuc += 1;
  } else if (khuVuc === "C") {
    diemUuTienKhuVuc += 0.5;
  }

  var diemUuTienDoiTuong = 0;
  if (doiTuong === "1") {
    diemUuTienDoiTuong += 2.5;
  } else if (doiTuong === "2") {
    diemUuTienDoiTuong += 1.5;
  } else if (doiTuong === "3") {
    diemUuTienDoiTuong += 1;
  }
  

  var diemTongKet = diem1 + diem2 + diem3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
  var ketQua = "";

  if (diemTongKet >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
    ketQua = "Bạn đã trúng tuyển    ";
  } else {
    ketQua = "Bạn đã rớt";
  }

  ketQua += "(" + "Tổng số điểm đạt được: " + diemTongKet  + ")";
  document.getElementById("ketQua").textContent = ketQua;
}

// Bài 2
function tinhTienDien() {

  var hoVaTen = document.getElementById('hoTen').value;
  var kw = document.getElementById('kw').value;

  var tongTien = 0;
  if (kw <= 50) {
    tongTien = kw * 500;
  } else if (kw <= 100) {
    tongTien = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 150) {
    tongTien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + 50 * 850 + (kw - 150) * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (kw - 200) * 1300;
  }

  document.getElementById(`tienDien`).textContent = 'Họ và tên: ' + hoVaTen + '     Tiền điện: ' + tongTien.toLocaleString() + 'đ';
}

// Bài 3
function tinhTienThue() {
  var hoTenNguoiTinhThue = document.getElementById("hoTenNguoiTinhThue").value;
  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

  let thueSuat = 0;
  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 5;
  } else if (thuNhapChiuThue <= 120000000) {
    thueSuat = 10;
  } else if (thuNhapChiuThue <= 210000000) {
    thueSuat = 15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueSuat = 20;
  } else if (thuNhapChiuThue <= 624000000) {
    thueSuat = 25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueSuat = 30;
  } else {
    thueSuat = 35;
  }

  var tongThue = thuNhapChiuThue * thueSuat / 100;

  document.getElementById(`tienThue`).textContent = 'Họ và tên: ' + hoTenNguoiTinhThue + '     Tiền thuế: ' + tongThue.toLocaleString() + 'đ';
}

// // Khi form được submit
// document.querySelector("form").addEventListener("submit", calculateTax);

// Bài 4
function tinhTienCap() {

  var idKhachHang = document.getElementById('iDKhach').value;
  var loaiKhachHang = document.getElementById('loaiKhach').value;
  var soKetNoi = document.getElementById('soKetNoi').value * 1;
  var soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;

  var tienCap = 0;
  if (loaiKhachHang === "1") {
    tienCap += soKenhCaoCap * 7.5 + 4.5 + 20.5;
  } else if (loaiKhachHang === "2") {
    if (soKetNoi <= 10){
      tienCap += (soKenhCaoCap * 50) + 15 + 75;
    } else{
    tienCap += 15;
    tienCap += 75;
    tienCap += (soKetNoi - 10) * 5;
    tienCap += soKenhCaoCap * 50;
    }
  }

  document.getElementById(`tienCap`).textContent = 'Mã khách hàng:  ' + idKhachHang + 'Tiền cap: ' + tienCap + '$';
}
