import { studentData } from "/JS/userData.js";

console.log(studentData);
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn gửi form mặc định

    // Lấy thông tin đăng nhập từ các trường input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Tìm sinh viên trong mảng studentData
    const student = studentData.find(function (student) {
      return student.username === username && student.password === password;
    });

    // Nếu sinh viên được tìm thấy
    if (student) {
      // Lưu thông tin đăng nhập vào localStorage
      const loginInfo = {
        username: username,
        password: password,
        studentName: student.studentName,
      };
      localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

      // Chuyển hướng đến trang chủ
      window.location.href = "TrangChu.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại."); // Thông báo lỗi
    }
  });
});
