$(function () {

    // ヘッダースクロール
    const headerOffset = $(".header").offset().top;
    const headerHeight = $(".header").height();
    const changeLine = headerOffset + headerHeight;

    $(window).scroll(function () {
        const scrollHeight = $(this).scrollTop();
        if (scrollHeight > changeLine) {
            $("header").addClass("js-scroll");
        } else {
            $("header").removeClass("js-scroll");
        }

    })
})

