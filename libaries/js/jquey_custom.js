(function ($) {
    "use strict";
    var FS = {} 
    FS.animateMenuLink = () => {
        $(document).on('click', '.menu-item-a', function (e) {
            let _this = $(this);
            // Xóa class 'active' khỏi tất cả các item trước khi thêm vào item hiện tại
            $('.menu-item-a').removeClass('active');
            _this.addClass('active').animate({
                left: '60px'
            }, 300);
            e.preventDefault();
        });
    };

    $(document).ready(function () {
        FS.animateMenuLink();
    
    });
})(jQuery);

