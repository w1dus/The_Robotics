

document.addEventListener("DOMContentLoaded", function(e){

    pcMenuHoverHandler();
    rightMenuHandler(); 
    /* 개인정보 처리방침 , 이용약관*/
    privacyUsePopup();

})

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