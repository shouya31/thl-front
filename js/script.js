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

$(function () {
    $('.zdo_drawer_button').click(function () {
      $(this).toggleClass('active');
      $('.header__body').fadeToggle();
    })
  })
  $(function () {
    $('.header__global-nav-link').click(function () {
      $('.header__body').fadeOut();
      $('.zdo_drawer_button').toggleClass('active');
    })
  })



