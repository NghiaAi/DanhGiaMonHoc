function timKiem() {
  var searchInput = document
    .querySelector(".search-box input")
    .value.trim()
    .toLowerCase();
  sessionStorage.setItem("searchQuery", searchInput);
  window.location.href = "DanhSachMonHoc.html";
}
