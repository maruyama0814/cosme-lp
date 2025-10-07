$(function() {
    // スクロールでフェードイン
    $(window).on('scroll', function() {
        $('.concept, .products, .cta').each(function() {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > target - windowHeight + 200) {
                $(this).addClass('fade-in');
            }
        });
    });
});
