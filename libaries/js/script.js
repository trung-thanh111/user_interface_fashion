document.addEventListener("DOMContentLoaded", function () {
  new Splide("#promo-carousel", {
    type: "loop", // Loại carousel (có thể sử dụng loop để liên tục cuộn)
    perPage: 1, // Số lượng slide hiển thị trên mỗi lượt trượt
    autoplay: true, // Tự động chuyển slide
    pauseOnHover: false,
    direction: "ttb", // Chuyển đổi từ trên xuống (top to bottom)
    height: "20px",
    width: "50%", // Chiều cao của carousel
    arrows: false, // Ẩn nút điều hướng
    pagination: false, // Ẩn các chấm chuyển trang
  }).mount();
});
// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// offcanvas
const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(
  (offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl)
);
