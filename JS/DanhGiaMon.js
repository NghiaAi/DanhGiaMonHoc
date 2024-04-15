
import { courseReviews } from "./feedbackData.js";
const btnSubmit = document.getElementById("submitBtn");
btnSubmit.addEventListener("click", () => {
  var arr = document.getElementsByTagName("input");
  var checkedCount = 0;

  for (var i = 0; i < 2; i++) {
    var questionCheckedCount = 0; // Đếm số ô đã được chọn trong mỗi câu hỏi
    for (var j = 0; j < 5; j++) {
      if (arr[i * 5 + j].checked) {
        // Kiểm tra checkbox đã được chọn hay không
        questionCheckedCount++;
      }
      if (questionCheckedCount > 1) {
        // Nếu có hơn một ô được chọn trong một câu hỏi, hiển thị cảnh báo
        alert("Vui lòng chọn một ô cho mỗi câu hỏi");
        return false;
      }
    }
    // Kiểm tra xem tất cả các ô của câu hỏi hiện tại đã được điền
    if (questionCheckedCount === 0) {
      alert("Vui lòng chọn một ô cho mỗi câu hỏi");
      return false;
    }
    checkedCount += questionCheckedCount; // Cập nhật tổng số ô đã được chọn
  }

  var typebox = document.getElementById("typebox");
  if (typebox.value == "") {
    alert("Vui lòng nhập nhận xét của bạn!");
    return false;
  }
  // lay gia tri danh gia 1
  const question1 = document.querySelectorAll(
    '.question1 input[type="checkbox"]'
  );
  // lay gia tri danh gia 2
  const question2 = document.querySelectorAll(
    '.question2 input[type="checkbox"]'
  );
  // lay gia tri danh gia 3
  const question3 = document.querySelectorAll(
    '.question3 input[type="checkbox"]'
  );
  // lay gia tri danh gia 4
  const question4 = document.getElementById("typebox");
  let checkedValue1;
  let checkedValue2;
  let checkedValue3;
  const checkedValue4 = question4.value;

  question1.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValue1 = parseInt(checkbox.value);
    }
  });
  question2.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValue2 = parseInt(checkbox.value);
    }
  });
  question3.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValue3 = parseInt(checkbox.value);
    }
  });

  const selectedSubjectId = localStorage.getItem("selectedSubjectid");
  console.log(selectedSubjectId);
  // Tìm vị trí của object trong mảng courseReviews có courseId trùng với selectedSubjectId
  const index = courseReviews.findIndex(
    (course) => course.courseId === parseInt(selectedSubjectId)
  );

  const lastReviewId =
    courseReviews[index].reviews[courseReviews[index].reviews.length - 1].id;

  const data = {
    id: lastReviewId + 1,
    mssv: 21097611,
    name: "Nguyễn Văn An",
    ratings: [checkedValue1, checkedValue2, checkedValue3, checkedValue4],
  };
  courseReviews[index].reviews.push(data);
  console.log(courseReviews);
  alert("Đánh giá thành công");
  window.location.href = "DanhGia.html";
  return true;
});

var courseName = localStorage.getItem("selectedSubject");
if (courseName) {
  document.getElementById("courseName").textContent = courseName;
}

document.addEventListener("DOMContentLoaded", function () {
  var selectedCourseName = localStorage.getItem("selectedSubject");
  var courseNameElement = document.getElementById("courseName");
  if (selectedCourseName && courseNameElement) {
    courseNameElement.textContent = selectedCourseName;
  }
});

