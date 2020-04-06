<template>
  <div class="home_cont_cate">
    <div class="cate_arrow">
      <a href="javascript:void(0)" @click="get_food_category()">
        <img
          src="https://recipe1.ezmember.co.kr/img/store/icon_arrow2_pre.png"
          alt="이전"
        />
      </a>
    </div>
    <div class="cate_cont" style="height:90px;">
      <div class="cateDivs">
        <div
          class="eg-flick-viewport"
          style="position: relative; z-index: 10; width: 100%; height: 90px; overflow: hidden; touch-action: pan-y; user-select: none; -webkit-user-drag: none; min-height: 100%;"
        >
          <div
            class="eg-flick-camera"
            style="width: 100%; height: 100%; will-change: transform; transform: translate3d(-5640px, 0px, 0px);"
          >
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-1"
              style="position: absolute;"
            >
              <a href="/recipe/list.html?cat="
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_01.png"
                /><span>전체</span></a
              >
              <a href="/recipe/list.html?cat4=63"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_09.png"
                /><span>밑반찬</span></a
              >
              <a href="/recipe/list.html?cat4=56"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_07.png"
                /><span>메인반찬</span></a
              >
              <a href="/recipe/list.html?cat4=54"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_03.png"
                /><span>국/탕</span></a
              >
              <a href="/recipe/list.html?cat4=55"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_16.png"
                /><span>찌개</span></a
              >
              <a href="/recipe/list.html?cat2=18"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_12.png"
                /><span>초스피드</span></a
              >
              <a href="/recipe/list.html?cat2=13"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_05.png"
                /><span>손님접대</span></a
              >
              <a href="/recipe/list.html?cat4=52"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_10.png"
                /><span>밥/죽/떡</span></a
              >
              <a href="/recipe/list.html?cat2=19"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_07.png"
                /><span>술안주</span></a
              >
              <a href="/recipe/list.html?cat4=53"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_08.png"
                /><span>면/만두</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-2"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat2=12"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_11.png"
                /><span>일상</span></a
              >
              <a href="/recipe/list.html?cat4=66"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_11.png"
                /><span>빵</span></a
              >
              <a href="/recipe/list.html?cat2=21"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_03.png"
                /><span>다이어트</span></a
              >
              <a href="/recipe/list.html?cat4=60"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_06.png"
                /><span>디저트</span></a
              >
              <a href="/recipe/list.html?cat4=64"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_12.png"
                /><span>샐러드</span></a
              >
              <a href="/recipe/list.html?cat4=65"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_15.png"
                /><span>양식</span></a
              >
              <a href="/recipe/list.html?cat4=57"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_05.png"
                /><span>김치/젓갈/장류</span></a
              >
              <a href="/recipe/list.html?cat2=15"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_04.png"
                /><span>도시락</span></a
              >
              <a href="/recipe/list.html?cat2=17"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_01.png"
                /><span>간식</span></a
              >
              <a href="/recipe/list.html?cat3=71"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_08.png"
                /><span>돼지고기</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-3"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat2=43"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_09.png"
                /><span>영양식</span></a
              >
              <a href="/recipe/list.html?cat4=69"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_02.png"
                /><span>과자</span></a
              >
              <a href="/recipe/list.html?cat4=58"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_14.png"
                /><span>양념/소스/잼</span></a
              >
              <a href="/recipe/list.html?cat4=59"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_17.png"
                /><span>차/음료/술</span></a
              >
              <a href="/recipe/list.html?cat3=72"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_07.png"
                /><span>닭고기</span></a
              >
              <a href="/recipe/list.html?cat2=45"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_08.png"
                /><span>야식</span></a
              >
              <a href="/recipe/list.html?cat3=28"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_14.png"
                /><span>채소류</span></a
              >
              <a href="/recipe/list.html?cat1=6"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_06.png"
                /><span>볶음</span></a
              >
              <a href="/recipe/list.html?cat4=68"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_13.png"
                /><span>스프</span></a
              >
              <a href="/recipe/list.html?cat3=70"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_11.png"
                /><span>소고기</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-4"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat3=24"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_16.png"
                /><span>해물류</span></a
              >
              <a href="/recipe/list.html?cat2=20"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_13.png"
                /><span>푸드스타일링</span></a
              >
              <a href="/recipe/list.html?cat3=23"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_13.png"
                /><span>육류</span></a
              >
              <a href="/recipe/list.html?cat3=50"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_06.png"
                /><span>달걀/유제품</span></a
              >
              <a href="/recipe/list.html?cat1=7"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_07.png"
                /><span>부침</span></a
              >
              <a href="/recipe/list.html?cat1=36"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_11.png"
                /><span>조림</span></a
              >
              <a href="/recipe/list.html?cat2=14"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_10.png"
                /><span>이유식</span></a
              >
              <a href="/recipe/list.html?cat1=41"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_05.png"
                /><span>무침</span></a
              >
              <a href="/recipe/list.html?cat2=46"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_14.png"
                /><span>해장</span></a
              >
              <a href="/recipe/list.html?cat2=44"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_06.png"
                /><span>명절</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-5"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat3=31"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_10.png"
                /><span>버섯류</span></a
              >
              <a href="/recipe/list.html?cat3=33"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_01.png"
                /><span>가공식품류</span></a
              >
              <a href="/recipe/list.html?cat3=48"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_04.png"
                /><span>과일류</span></a
              >
              <a href="/recipe/list.html?cat1=9"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_13.png"
                /><span>튀김</span></a
              >
              <a href="/recipe/list.html?cat1=1"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_03.png"
                /><span>끓이기</span></a
              >
              <a href="/recipe/list.html?cat1=8"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_12.png"
                /><span>찜</span></a
              >
              <a href="/recipe/list.html?cat1=42"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_08.png"
                /><span>비빔</span></a
              >
              <a href="/recipe/list.html?cat3=32"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_01.png"
                /><span>밀가루</span></a
              >
              <a href="/recipe/list.html?cat3=25"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_02.png"
                /><span>건어물류</span></a
              >
              <a href="/recipe/list.html?cat1=10"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_10.png"
                /><span>절임</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-6"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat1=67"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_01.png"
                /><span>굽기</span></a
              >
              <a href="/recipe/list.html?cat1=38"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_09.png"
                /><span>삶기</span></a
              >
              <a href="/recipe/list.html?cat1=37"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_14.png"
                /><span>회</span></a
              >
              <a href="/recipe/list.html?cat3=47"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_12.png"
                /><span>쌀</span></a
              >
              <a href="/recipe/list.html?cat3=27"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_15.png"
                /><span>콩/견과류</span></a
              >
              <a href="/recipe/list.html?cat3=26"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_03.png"
                /><span>곡류</span></a
              >
              <a href="/recipe/list.html?cat1=39"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_04.png"
                /><span>데치기</span></a
              >
              <a href="/recipe/list.html?cat4=61"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_18.png"
                /><span>퓨전</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-7"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat="
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_01.png"
                /><span>전체</span></a
              >
              <a href="/recipe/list.html?cat4=63"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_09.png"
                /><span>밑반찬</span></a
              >
              <a href="/recipe/list.html?cat4=56"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_07.png"
                /><span>메인반찬</span></a
              >
              <a href="/recipe/list.html?cat4=54"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_03.png"
                /><span>국/탕</span></a
              >
              <a href="/recipe/list.html?cat4=55"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_16.png"
                /><span>찌개</span></a
              >
              <a href="/recipe/list.html?cat2=18"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_12.png"
                /><span>초스피드</span></a
              >
              <a href="/recipe/list.html?cat2=13"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_05.png"
                /><span>손님접대</span></a
              >
              <a href="/recipe/list.html?cat4=52"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_10.png"
                /><span>밥/죽/떡</span></a
              >
              <a href="/recipe/list.html?cat2=19"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_07.png"
                /><span>술안주</span></a
              >
              <a href="/recipe/list.html?cat4=53"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_08.png"
                /><span>면/만두</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-8"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat2=12"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_11.png"
                /><span>일상</span></a
              >
              <a href="/recipe/list.html?cat4=66"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_11.png"
                /><span>빵</span></a
              >
              <a href="/recipe/list.html?cat2=21"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_03.png"
                /><span>다이어트</span></a
              >
              <a href="/recipe/list.html?cat4=60"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_06.png"
                /><span>디저트</span></a
              >
              <a href="/recipe/list.html?cat4=64"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_12.png"
                /><span>샐러드</span></a
              >
              <a href="/recipe/list.html?cat4=65"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_15.png"
                /><span>양식</span></a
              >
              <a href="/recipe/list.html?cat4=57"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_05.png"
                /><span>김치/젓갈/장류</span></a
              >
              <a href="/recipe/list.html?cat2=15"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_04.png"
                /><span>도시락</span></a
              >
              <a href="/recipe/list.html?cat2=17"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_01.png"
                /><span>간식</span></a
              >
              <a href="/recipe/list.html?cat3=71"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_08.png"
                /><span>돼지고기</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-9"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat2=43"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_09.png"
                /><span>영양식</span></a
              >
              <a href="/recipe/list.html?cat4=69"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_02.png"
                /><span>과자</span></a
              >
              <a href="/recipe/list.html?cat4=58"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_14.png"
                /><span>양념/소스/잼</span></a
              >
              <a href="/recipe/list.html?cat4=59"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_17.png"
                /><span>차/음료/술</span></a
              >
              <a href="/recipe/list.html?cat3=72"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_07.png"
                /><span>닭고기</span></a
              >
              <a href="/recipe/list.html?cat2=45"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_08.png"
                /><span>야식</span></a
              >
              <a href="/recipe/list.html?cat3=28"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_14.png"
                /><span>채소류</span></a
              >
              <a href="/recipe/list.html?cat1=6"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_06.png"
                /><span>볶음</span></a
              >
              <a href="/recipe/list.html?cat4=68"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_13.png"
                /><span>스프</span></a
              >
              <a href="/recipe/list.html?cat3=70"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_11.png"
                /><span>소고기</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-10"
              style="position: absolute; left: 8460px;"
            >
              <a href="/recipe/list.html?cat3=24"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_16.png"
                /><span>해물류</span></a
              >
              <a href="/recipe/list.html?cat2=20"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_13.png"
                /><span>푸드스타일링</span></a
              >
              <a href="/recipe/list.html?cat3=23"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_13.png"
                /><span>육류</span></a
              >
              <a href="/recipe/list.html?cat3=50"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_06.png"
                /><span>달걀/유제품</span></a
              >
              <a href="/recipe/list.html?cat1=7"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_07.png"
                /><span>부침</span></a
              >
              <a href="/recipe/list.html?cat1=36"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_11.png"
                /><span>조림</span></a
              >
              <a href="/recipe/list.html?cat2=14"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_10.png"
                /><span>이유식</span></a
              >
              <a href="/recipe/list.html?cat1=41"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_05.png"
                /><span>무침</span></a
              >
              <a href="/recipe/list.html?cat2=46"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_14.png"
                /><span>해장</span></a
              >
              <a href="/recipe/list.html?cat2=44"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate2_06.png"
                /><span>명절</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-11"
              style="position: absolute; display:none;"
            >
              <a href="/recipe/list.html?cat3=31"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_10.png"
                /><span>버섯류</span></a
              >
              <a href="/recipe/list.html?cat3=33"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_01.png"
                /><span>가공식품류</span></a
              >
              <a href="/recipe/list.html?cat3=48"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_04.png"
                /><span>과일류</span></a
              >
              <a href="/recipe/list.html?cat1=9"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_13.png"
                /><span>튀김</span></a
              >
              <a href="/recipe/list.html?cat1=1"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_03.png"
                /><span>끓이기</span></a
              >
              <a href="/recipe/list.html?cat1=8"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_12.png"
                /><span>찜</span></a
              >
              <a href="/recipe/list.html?cat1=42"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_08.png"
                /><span>비빔</span></a
              >
              <a href="/recipe/list.html?cat3=32"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_01.png"
                /><span>밀가루</span></a
              >
              <a href="/recipe/list.html?cat3=25"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_02.png"
                /><span>건어물류</span></a
              >
              <a href="/recipe/list.html?cat1=10"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_10.png"
                /><span>절임</span></a
              >
            </div>
            <div
              class="eg-flick-panel"
              id="eg-flick-panel-12"
              style="position: absolute; left: 10340px;"
            >
              <a href="/recipe/list.html?cat1=67"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_01.png"
                /><span>굽기</span></a
              >
              <a href="/recipe/list.html?cat1=38"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_09.png"
                /><span>삶기</span></a
              >
              <a href="/recipe/list.html?cat1=37"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_14.png"
                /><span>회</span></a
              >
              <a href="/recipe/list.html?cat3=47"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_12.png"
                /><span>쌀</span></a
              >
              <a href="/recipe/list.html?cat3=27"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_15.png"
                /><span>콩/견과류</span></a
              >
              <a href="/recipe/list.html?cat3=26"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate3_03.png"
                /><span>곡류</span></a
              >
              <a href="/recipe/list.html?cat1=39"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate4_04.png"
                /><span>데치기</span></a
              >
              <a href="/recipe/list.html?cat4=61"
                ><img
                  src="https://recipe1.ezmember.co.kr/img/mobile/cate1_18.png"
                /><span>퓨전</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cate_arrow">
      <a href="javascript:void(0)" @click="get_food_category()"
        ><img
          src="https://recipe1.ezmember.co.kr/img/store/icon_arrow2_next.png"
          alt="다음"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data: () => ({
    curRtword: 1
  }),
  methods: {
    get_food_category() {
      let backRtword = this.curRtword == 13 ? 1 : this.curRtword;
      console.log(document.getElementById("eg-flick-panel-" + backRtword));
      document.getElementById("eg-flick-panel-" + backRtword).style.display =
        "show";
      console.log(document.getElementById("eg-flick-panel-" + backRtword));
      this.curRtword = backRtword;
    }
  },
  mounted() {
    // this.get_food_category();
  }
};
</script>
<style scoped>
.container {
  width: 1240px;
  max-width: none !important;
}

.container_full {
  width: 100%;
  max-width: none !important;
}

.home_cont_cate {
  width: 1240px;
  background: #fff;
  border: 1px solid #e9e9e9;
  padding: 28px 0;
  margin-bottom: 8px;
  position: relative;
  text-align: center;
}

.home_cont_cate.st2 {
  width: 100%;
  border: none;
  border-top: 1px solid #e9e9e9;
  padding: 24px 0 28px;
  margin-bottom: 0;
  margin-top: -6px;
}

.home_cont_cate.st3 {
  width: 100%;
  border: none;
  border-top: 1px solid #e9e9e9;
  padding: 20px 0 8px;
  margin-bottom: 0;
  margin-top: -6px;
}

.home_cont_cate .cate_arrow {
  display: inline-block;
}

.home_cont_cate .cate_arrow a {
  padding: 10px;
  display: block;
}

.home_cont_cate .cate_arrow a img {
  width: 14px;
}

.home_cont_cate .cate_cont {
  width: 940px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}

.home_cont_cate.st2 .cate_cont {
  width: 1090px;
  text-align: left;
}

.home_cont_cate.st3 .cate_cont {
  width: 750px;
  text-align: left;
}

.home_cont_cate .cate_cont a {
  padding: 0 14px;
  text-align: center;
  display: table-cell;
  margin: 0 11px;
}

.home_cont_cate .cate_cont a img {
  width: 66px;
}

.home_cont_cate .cate_cont a span {
  display: block;
  margin-top: 6px;
  font-size: 14px;
}
</style>
