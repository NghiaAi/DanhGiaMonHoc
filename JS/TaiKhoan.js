import { studentData } from "/JS/userData.js";

document.addEventListener("DOMContentLoaded", function () {
  // Lấy thông tin đăng nhập từ localStorage nếu có
  const loginInfoJSON = localStorage.getItem("loginInfo");

  if (loginInfoJSON) {
    const loginInfo = JSON.parse(loginInfoJSON);
    const username = loginInfo.username;
    const studentName = loginInfo.studentName;
    const password = loginInfo.password;

    // Gán giá trị cho các ô mã sinh viên, tên sinh viên, và mật khẩu cũ
    document.getElementById("studentID").value = username;  
    document.getElementById("studentName").value = studentName;
    document.getElementById("oldPassword").value = password;
    
    }
    console.log(loginInfoJSON);
});

document.addEventListener("DOMContentLoaded", function () {
  const newPasswordInput = document.getElementById("newPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const form = document.querySelector(".form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Kiểm tra xem mật khẩu mới và nhập lại mật khẩu có giống nhau không
    if (newPassword === confirmPassword) {
      // Cập nhật mật khẩu mới
      updatePassword(newPassword);

      // Thông báo cho người dùng về việc đổi mật khẩu thành công
      alert("Đổi mật khẩu thành công!");
        window.location.href = "TaiKhoan.html";
      // Reset form sau khi đổi mật khẩu thành công
      //   form.reset();
    } else {
      // Nếu không giống nhau, thông báo lỗi cho người dùng
      alert("Mật khẩu mới và nhập lại mật khẩu không khớp!");
    }
  });

  // Hàm cập nhật mật khẩu mới vào userData.js và localStorage
  function updatePassword(newPassword) {
    const loginInfoJSON = localStorage.getItem("loginInfo");
    const loginInfo = JSON.parse(loginInfoJSON);

    if (loginInfo) {
      // Lấy tên đăng nhập từ thông tin đăng nhập
      const username = loginInfo.username;

      // Tìm sinh viên trong mảng studentData
      const studentIndex = studentData.findIndex(function (student) {
        return student.username === username;
      });

      // Nếu tìm thấy sinh viên, cập nhật mật khẩu mới
      if (studentIndex >= 0) {
        studentData[studentIndex].password = newPassword;

        // Lưu lại thông tin đăng nhập đã được cập nhật vào localStorage
        loginInfo.password = newPassword;
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
      }
    }
  }
});


var passwordToggleOld = document.getElementById("eyeOld");
var passwordToggleNew = document.getElementById("eyeNew");
var passwordToggleConfirm = document.getElementById("eyeConfirm");

var passwordFieldOld = document.getElementById("oldPassword");
var passwordFieldNew = document.getElementById("newPassword");
var passwordFieldConfirm = document.getElementById("confirmPassword");

passwordToggleOld.addEventListener("click", function () {
  togglePassword(passwordFieldOld, passwordToggleOld);
});

passwordToggleNew.addEventListener("click", function () {
  togglePassword(passwordFieldNew, passwordToggleNew);
});

passwordToggleConfirm.addEventListener("click", function () {
  togglePassword(passwordFieldConfirm, passwordToggleConfirm);
});

function togglePassword(passwordField, passwordToggle) {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.classList.remove("fa-eye");
    passwordToggle.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    passwordToggle.classList.remove("fa-eye-slash");
    passwordToggle.classList.add("fa-eye");
  }
}