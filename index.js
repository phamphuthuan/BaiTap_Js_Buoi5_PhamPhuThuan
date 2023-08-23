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
