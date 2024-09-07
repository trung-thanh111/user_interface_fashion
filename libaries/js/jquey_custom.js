(function ($) {
  "use strict";
  var FS = {};
  FS.animateMenuLink = () => {
    $(document).on("click", ".menu-item-a", function (e) {
      let _this = $(this);
      // Xóa class 'active' khỏi tất cả các item trước khi thêm vào item hiện tại
      $(".menu-item-a").removeClass("active");
      _this.addClass("active").animate(
        {
          left: "60px",
        },
        300
      );
      e.preventDefault();
    });
  };
  // menu aside acount
  FS.showSubMenu = () => {
    $(".nav-item-main").click(function (e) {
      e.preventDefault();

      let $submenu = $(this).next(".sub-menu-lv2");
      let $iconRight = $(this).find(".fa-chevron-right");
      let $iconDown = $(this).find(".fa-chevron-down");
      // khi click vào li thì active và xóa clas active cũ
      $(".nav-item-main").removeClass("active");
      $(this).addClass("active");
      if ($submenu.hasClass("d-none")) {
        $submenu.hide().removeClass("d-none").addClass("active").slideDown(300);
        $iconRight.addClass("d-none");
        $iconDown.removeClass("d-none");
      } else {
        $submenu.slideUp(300, function () {
          $(this).addClass("d-none").removeClass("active");
        });
        $iconRight.removeClass("d-none");
        $iconDown.addClass("d-none");
      }
    });
  };

  FS.showSubMenuLv3 = () => {
    $(".sub-menu-li").click(function (e) {
      e.preventDefault();

      let $submenuLv3 = $(this).find(".sub-menu-lv3");
      let $iconRightLv3 = $(this).find(".fa-chevron-right.lv3");
      let $iconDownLv3 = $(this).find(".fa-chevron-down.lv3");

      if ($submenuLv3.hasClass("d-none")) {
        $submenuLv3
          .hide()
          .removeClass("d-none")
          .addClass("active")
          .slideDown(300);
        $(this).addClass("active");
        $iconRightLv3.addClass("d-none");
        $iconDownLv3.removeClass("d-none");
      } else {
        $submenuLv3.slideUp(300, function () {
          $(this).addClass("d-none").removeClass("active");
        });
        $(this).removeClass("active");
        $iconRightLv3.removeClass("d-none");
        $iconDownLv3.addClass("d-none");
      }
    });
  };
  // search key
  FS.searchKeyUpShowPaper = () => {
    // Bắt sự kiện lần đầu nhập vào input -> one()
    $(document).one("keyup", ".search-header", function () {
      if (
        $(".search-header").val().length == 0 ||
        $(".search-header") === undefined
      ) {
        $(".wallpaper").addClass("d-none");
      } else {
        $(".wallpaper").removeClass("d-none");
      }
      //call back
      FS.searchKeyUpShowPaper();
    });
    $(document).on("blur", ".search-header", function () {
      $(".wallpaper").addClass("d-none");
    });
    $(document).on("focus", ".search-header", function () {
      if ($(".search-header").val().length > 0) {
        $(".wallpaper").removeClass("d-none");
      }
    });
  };
  FS.showMenuActionEllipsis = () => {
    $(".ellipsis-vertical").each(function () {
      $(".ellipsis-vertical").click(function (e) {
        e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài

        $(".dropdown-ellipsis-vertical").addClass("d-none");

        $(this)
          .closest(".address-order")
          .find(".dropdown-ellipsis-vertical")
          .toggleClass("d-none");
      });
      $(document).on("click", function () {
        $(".dropdown-ellipsis-vertical").addClass("d-none");
      });
      $(document).on("click", ".dropdown-ellipsis-vertical", function (e) {
        e.stopPropagation();
      });
    });
  };

  FS.setUpSelect2 = () => {
    $('.setUpSelect2').select2();
  }

  $(document).ready(function () {
    FS.animateMenuLink();
    FS.showSubMenu();
    FS.showSubMenuLv3();
    FS.searchKeyUpShowPaper();
    FS.showMenuActionEllipsis();
    FS.setUpSelect2();
  });
})(jQuery);
