<header>
    <h1><a href="./index.html"><img src="./images/logo.png" alt="GENTLE MONSTER"></a></h1>
    <div class="h_right">
        <a href="#" class="lang">Shop in KR</a>
        <form action="#" method="get" id="search_frm">
            <fieldset>
                <legend class="skip">검색양식</legend>
                <input type="search" name="search" id="search" placeholder="상품명을 입력해주세요">
                <button type="submit" id="searchBtn"><img src="./images/ico_search.png" alt="검색버튼"></button>
            </fieldset>
        </form>
        <a href="./login.html" id="login"><img src="./images/ico_login.png" alt="로그인"></a>
        <a href="#" id="cart"><img src="./images/ico_cart.png" alt="장바구니"></a>
        <a href="#" id="nav"><img src="./images/ico_menu.png" alt="메뉴"></a>
    </div>
    <!-- nav 클릭시 open nav -->
    <div id="open_nav">
        <!-- 닫기 버튼 -->
        <button type="button" id="nav_close">닫기</button>
        <!-- 광고 슬라이드 -->
        <div class="swiper" id="nav_adver">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide1">
                    <a href="#">나에게 어울리는 제품을 찾으세요? 실시간 라이브 채팅으로 제품 추천을 받아보세요.</a>
                </div>
                <div class="swiper-slide slide2">
                    <a href="#">선물하기 서비스를 통해 소중한 분에게 마음을 전하세요.</a>
                </div>
                <div class="swiper-slide slide3">
                    <a href="#">무료 배송 반품 서비스로 젠틀몬스터의 서비스를 경험하세요.</a>
                </div>
            </div><!-- end swiper wrapper -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div> <!-- end swiper adver -->
        <!-- 내비게이션 -->
        <nav>
            <a href="#">선글라스</a>
            <a href="#">안경</a>
            <a href="#">콜라보레이션</a>
            <a href="#">스타일</a>
            <a href="#">브랜드이슈</a>
            <a href="#">매장보기</a>
            <a href="#">수리서비스</a>
        </nav>
    </div>
</header>