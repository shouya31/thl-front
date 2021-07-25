
$(window).on('load resize', function(){
    　if (window.matchMedia('(min-width: 960px)').matches){
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
    　} else {(window.matchMedia('(max-width: 959px)').matches)
        $(function () {
            $('.zdo_drawer_button').click(function () {
              $(this).toggleClass('active');
              $('.header__global-nav').fadeToggle();
            })
          })
          $(function () {
            $('.header__global-nav-link').click(function () {
              $('.header__global-nav').fadeOut();
              $('.zdo_drawer_button').toggleClass('active');
            })
          })
    　}
    });

