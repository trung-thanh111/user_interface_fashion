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
// positon fixed menu
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 200) {
    navbar.classList.add(
      "fixed-top",
      "animate__animated",
      "animate__slideInDown"
    );
  } else {
    navbar.classList.remove(
      "fixed-top",
      "animate__animated",
      "animate__slideInDown"
    );
  }
});
// băng chuyền hình ảnh detail
document.addEventListener("DOMContentLoaded", function () {
  // image main 
  var mainCarousel = new Splide("#main-carousel", {
    type: "fade",
    heightRatio: 1,
    pagination: false,
    arrows: false,
    cover: false,
    // reponsive image main 
    breakpoints: {
      1200: {
        heightRatio: 0.75, // Cho col-lg-5x
      },
      900: {
        heightRatio: 0.5, // Cho col-md-4
      },
      600: {
        heightRatio: 0.3, // Cho col-sm-12
      },
      480: {
        heightRatio: 0.2, // Màn hình nhỏ hơn 480px
      },
    },
  }).mount();

  // Thumbnail carousel
  var thumbnailCarousel = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    //reponsive image thumbnail
    breakpoints: {
      1200: {
        fixedWidth: 90, // Cho col-lg-5
        fixedHeight: 55,
      },
      900: {
        fixedWidth: 80, // Cho col-md-4
        fixedHeight: 50,
      },
      600: {
        fixedWidth: 66, // Cho col-sm-12
        fixedHeight: 40,
      },
      480: {
        fixedWidth: 50, // Màn hình nhỏ hơn 480px
        fixedHeight: 35,
      },
    },
  }).mount();

  // Đồng bộ hai băng chuyền
  mainCarousel.sync(thumbnailCarousel);
});
