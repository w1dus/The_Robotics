

document.addEventListener("DOMContentLoaded", function(e){

    pcMenuHoverHandler();
    rightMenuHandler(); 
    /* 개인정보 처리방침 , 이용약관*/
    privacyUsePopup();

    mainHeaderHandler();
    mainBannerSlideHandler();
    mainRobotHandler();
    
    robotGoArti();
    mainLogoSlide();
    menu1_1_hoverHandler();

    // menu2_1ScrollEvent();
    menu2VideoPlayer();

    menu2_1_customerSlide();

    mainCountAni();
    menu2CountingAni();
})

const menu2CountingAni = () => {
    const countList = document.querySelector('.sub.menu2 .peopleSection');
    const numbers = document.querySelectorAll('.sub.menu2 .peopleSection .itemList > li .item .countDiv .count');
    const duration = 1; // Duration in seconds
    if(countList){
        // Function to reset numbers to 0
        function resetNumbers() {
            numbers.forEach(number => {
                number.textContent = '0';
            });
        }
    
        // Function to format numbers with commas
        function formatNumber(num) {
            return num.toLocaleString();
        }
    
        // Function to animate counting
        function animateCount() {
            numbers.forEach(number => {
                const target = +number.getAttribute('data-count');
                const increment = target / (duration * 60); // 60 frames per second
                let current = 0;
    
                function updateCount() {
                    current += increment;
                    if (current < target) {
                        number.textContent = formatNumber(Math.ceil(current));
                        requestAnimationFrame(updateCount);
                    } else {
                        number.textContent = formatNumber(target);
                    }
                }
                updateCount();
            });
        }
    
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countList.classList.add('on');
                    animateCount();
                } else {
                    countList.classList.remove('on');
                    resetNumbers();
                }
            });
        }, {
            threshold: 0.5 // Adjust threshold as needed
        });
        observer.observe(countList);
    }
}

const mainCountAni = () => {
    const countList = document.querySelector('.main .counterArti');
    const numbers = document.querySelectorAll('.main .counterArti .itemList .item .counterDiv .count');
    const duration = 1; // Duration in seconds
    if(countList){
        // Function to reset numbers to 0
        function resetNumbers() {
            numbers.forEach(number => {
                number.textContent = '0';
            });
        }
    
        // Function to format numbers with commas
        function formatNumber(num) {
            return num.toLocaleString();
        }
    
        // Function to animate counting
        function animateCount() {
            numbers.forEach(number => {
                const target = +number.getAttribute('data-count');
                const increment = target / (duration * 60); // 60 frames per second
                let current = 0;
    
                function updateCount() {
                    current += increment;
                    if (current < target) {
                        number.textContent = formatNumber(Math.ceil(current));
                        requestAnimationFrame(updateCount);
                    } else {
                        number.textContent = formatNumber(target);
                    }
                }
                updateCount();
            });
        }
    
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countList.classList.add('on');
                    animateCount();
                } else {
                    countList.classList.remove('on');
                    resetNumbers();
                }
            });
        }, {
            threshold: 0.5 // Adjust threshold as needed
        });
        observer.observe(countList);
    }
}

const menu2_1_customerSlide = () => {
    var swiper = new Swiper(".sub.menu2 .customerSection .slideBox .mySwiper", {
        loop : true,
        effect : "fade" ,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".sub.menu2 .customerSection .slideBox .nextBtn",
          prevEl: ".sub.menu2 .customerSection .slideBox .prevBtn",
        },
      });
}

const menu2VideoPlayer = () => {
    $(document).ready(function() {
        $('[data-vbg]').youtube_background(); // 실행
    });
}

const menu1_1_hoverHandler = () => {
    $('.sub.menu1_1 .article05 .circleBox .circle .text').hover(function(){
        const classData = $(this).attr('data-class');
        console.log(classData)
        $('.sub.menu1_1 .article05 .circleBox .circle').removeClass("active1");
        $('.sub.menu1_1 .article05 .circleBox .circle').removeClass("active2");
        $('.sub.menu1_1 .article05 .circleBox .circle').removeClass("active3");
        $('.sub.menu1_1 .article05 .circleBox .circle').addClass(classData);

        $('.sub.menu1_1 .article05 .circleBox .bgCircle').removeClass("active1");
        $('.sub.menu1_1 .article05 .circleBox .bgCircle').removeClass("active2");
        $('.sub.menu1_1 .article05 .circleBox .bgCircle').removeClass("active3");
        $('.sub.menu1_1 .article05 .circleBox .bgCircle').addClass(classData);

        $('.sub.menu1_1 .article05 .circleBox .circle .text').removeClass('active1');
        $('.sub.menu1_1 .article05 .circleBox .circle .text').removeClass('active2');
        $('.sub.menu1_1 .article05 .circleBox .circle .text').removeClass('active3');

        if(classData === "active1"){ $('.sub.menu1_1 .article05 .circleBox .circle.circle2 > .text').addClass('active1'); }
        if(classData === "active2"){ $('.sub.menu1_1 .article05 .circleBox .circle.circle3 > .text').addClass('active2'); }
        if(classData === "active3"){ $('.sub.menu1_1 .article05 .circleBox .circle.circle4 > .text').addClass('active3'); }
    })
}

const robotGoArti = () => {
    var swiper = new Swiper(".robotGoArti .mySwiper", {
        loop : true, 
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

const mainLogoSlide = () => {
    var swiper = new Swiper(".logoArti .mySwiper", {
        spaceBetween: 40,
        slidesPerView: 6,
        loop : true, 
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        autoplay: {
            delay: 0, // important !!
            disableOnInteraction: false,
        },
        speed: 5000,
    });
}

const mainRobotHandler = () => {
    $(".main .robotArti .rogotList > li").eq(0).css('oapcity', "1")
    var swiper = new Swiper(".main .robotArti .slideBox .mySwiper", {
        observer: true,
        observeParents: true,
        loop : true,
        slidesPerView: 1,
        // centeredSlides: true,
        loopedSlides: 4,
        on: {
            activeIndexChange: function () {
                $(".main .robotArti .rogotList > li").css('opacity', "0.63");
                $(".main .robotArti .rogotList > li").eq((this.realIndex)).css('opacity', "1")
            }
        },

    });

    $('.main .robotArti .rogotList .item').mouseover(function(){
        const itemIndex = $(this).parent('li').index();
        $(".main .robotArti .rogotList > li").removeClass('active');
        $(this).parent('li').addClass('active')
        swiper.slideTo(itemIndex, 200)
    })
}

const mainBannerSlideHandler = () => {
    var swiper = new Swiper(".main .mainBannerArti .mySwiper", {
        loop : true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".main .mainBannerArti .swiper-pagination",
        },
    });
}

const mainHeaderHandler = () => {
    const header_main = document.querySelector('header.main');

    if(header_main){
        document.addEventListener("scroll", function(){
            let scroll_top = window.scrollY;
            if(scroll_top > 0){
                header_main.classList.remove("active");
            }else{
                header_main.classList.add("active");
            }
        })
    }
}

const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(e){
        e.preventDefault();
        $('#privacyPopup').addClass('active');
    })
    $('.usePopupBtn').click(function(e){
        e.preventDefault();
        $('#usePopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}
const rightMenuHandler = () => {
    //메뉴 열기
    $("header .sideMenuBtn").click(function(){
        $('.rightSideMenu').addClass('active');
        $('.mobileMenuCloseBg').addClass('active');
    })
    //메뉴 닫기
    $('.mobileMenuCloseBg').click(function(){
        $('.rightSideMenu').removeClass('active');
        $('.mobileMenuCloseBg').removeClass('active');
    })
    $('.rightSideMenu .btnWrapDiv .closeBtn').click(function(){
        $('.rightSideMenu').removeClass('active');
        $('.mobileMenuCloseBg').removeClass('active');
    })

    //서브 메뉴 버튼 
    $('.rightSideMenu .item .subMenuBtn').click(function(){
        $('.rightSideMenu .item .subMenuBtn').not(this).removeClass('active');
        $('.rightSideMenu .item .subMenuBtn').not(this).siblings(".subMenuList").slideUp();
        $(this).toggleClass('active');
        $(this).siblings(".subMenuList").slideToggle();
    })
}
const pcMenuHoverHandler = () => {
    $('header .menuList > li > a').mouseover(function(){
        $('header .menuList .subMenu').removeClass('active');
        $(this).siblings('.subMenu').addClass('active');
        $('.menuCloseBg').addClass('show')
    })
    $('.menuCloseBg').mouseover(function(){
        $('.menuCloseBg').removeClass('show')
        $('header .menuList .subMenu').removeClass('active');
    })
}