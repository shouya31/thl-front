$(function(){
  var timer = false;

  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
      location.reload();
      }, 200);
  })

  var windowWidth = $(window).width();
  var windowSm = 960;
  if (windowWidth <= windowSm) {
    $(function () {
      $('.zdo_drawer_button').click(function () {
        $(this).toggleClass('active');
        $('.header__global-nav.sp').fadeToggle();
      })
    }),
      $(function () {
        $('.header__global-nav-link.sp').click(function () {
          $('.header__global-nav.sp').fadeOut();
          $('.zdo_drawer_button').toggleClass('active');
        })
      })
  } else {
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
  }
});