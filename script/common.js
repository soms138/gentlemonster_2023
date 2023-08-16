// header, footer JS
// header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기 {display:none;}
// 2. 햄버거 메뉴(nav) 클릭 시 open-nav 출력
// 3. open-nav 안 X 닫기버튼(nav_close) 클릭 시 open-nav 숨기기
// 변수생성
const open_nav = document.querySelector('#open_nav') // 햄버거 메뉴
const nav = document.querySelector('#nav') // nav 클릭버튼
const nav_close = document.querySelector('#nav_close') // X 닫기버튼
console.log(nav,open_nav,nav_close)
// 1. open-nav 초기 숨기기 #open-nav {display:none;}
open_nav.style.transform = 'translateX(100%)';
// css값 상태에 따라 변경이 일어날 경우 애니메이션 transition 사용
open_nav.style.transition = 'all 1s ease';
// 2. 햄버거 메뉴(nav) 클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)';
})
// display:none으로 숨긴대상을 다시 보이게 할 경우
// 기존 디자인 css에서 flex로 정렬한 대상이면 display:'flex'
// 기존 디자인 css에서 flex 설정이 없었다면 display:'block'
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)'
})
// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{
    direction: 'horizontal',
    autoplay:{delay:3000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev'
    }
})
const fieldset = document.querySelector('fieldset')
const search = document.querySelector('#search')
search.addEventListener('focus',function(){
    fieldset.style.background = '#FFDB59'
})
search.addEventListener('blur',function(){
    fieldset.style.background = '#222'
})