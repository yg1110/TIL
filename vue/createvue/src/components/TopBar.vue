<template>
  <div class="gnb">
    <div class="gnb_top_wrap">
      <div class="gnb_top">
        <h1>
          <a href="/index.html">
            <img src="../assets/TopBar/logo.jpg" alt="로고" />
          </a>
        </h1>
        <div class="gnb_search">
          <form id="frmTopRecipeSearch" method="get" action="/recipe/list.html">
            <div class="input-group">
              <input
                id="srhRecipeText"
                name="q"
                type="text"
                class="form-control"
                placeholder
                value
                style="ime-mode:active;"
              />
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </form>
          <div class="gnb_search_word">
            <ul id="RtwordDiv_1" style="display:none;">
              <li>
                <a href="/recipe/list.html?q=밑반찬">밑반찬</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=다이어트">다이어트</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=김치">김치</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=두부">두부</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=밥도둑">밥도둑</a>
              </li>
            </ul>
            <ul id="RtwordDiv_2" style="display:none;">
              <li>
                <a href="/recipe/list.html?q=간장">간장</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=소고기">소고기</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=찌개">찌개</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=전">전</a>
              </li>
              <li>
                <a href="/recipe/list.html?q=계란">계란</a>
              </li>
            </ul>
            <div class="gnb_search_btn">
              <a href="#" @click="get_Type_of_food()">
                <img src="../assets/TopBar/prev.gif" alt="이전" />
              </a>
              <a href="#" @click="get_Type_of_food()">
                <img src="../assets/TopBar/next.gif" alt="다음" />
              </a>
            </div>
          </div>
        </div>
        <ul class="gnb_right">
          <li style="position: relative;">
            <div
              style="position: absolute; width:100px; top: 47px; left: 0; margin-left: -25px;display:none;"
            >
              <span
                style="border-radius: 2px; background: #ffd200; color: #000; display: block; font-size: 11px; padding:2px 5px; text-align: center;"
                >회원가입 +3,000</span
              >
            </div>
            <a href="/user/login.html">
              <img
                src="https://recipe1.ezmember.co.kr/img/ico_user.png"
                alt="로그인"
              />
            </a>
          </li>
          <li>
            <a
              id="btnTopWrite"
              href="javascript:void(0)"
              data-toggle="tooltip"
              data-placement="top"
              title="레시피등록"
              data-original-title="레시피등록"
            >
              <img src="https://recipe1.ezmember.co.kr/img/tmn_write.png" />
            </a>
            <div
              class="write_layer document_common_layer"
              style="display:none;left:-230px;"
            >
              <a href="/inbox/insert.html" class="w_layer2">
                <img src="https://recipe1.ezmember.co.kr/img/btn_write1.gif" />
                <span>직접 등록하기</span>
              </a>
              <a
                id="btnBlogForm"
                href="javascript:void(0)"
                class="w_layer3"
                data-toggle="modal"
                data-target="#divModalBlogForm"
              >
                <img src="https://recipe1.ezmember.co.kr/img/btn_write2.gif" />
                <span>블로그 가져오기</span>
              </a>
            </div>
          </li>
          <li style="margin-left:50px;">
            <a
              href="https://market.android.com/details?id=com.ezhld.recipe"
              target="_blank"
              data-toggle="tooltip"
              title
              data-original-title="앱다운로드-안드로이드"
            >
              <img src="https://recipe1.ezmember.co.kr/img/tmn_app_a.png" />
            </a>
          </li>
          <li>
            <a
              href="https://itunes.apple.com/kr/app/yoribaeggwa-mangaeyi-resipi/id494190282?mt=8"
              target="_blank"
              data-toggle="tooltip"
              title
              data-original-title="앱다운로드-애플"
            >
              <img src="https://recipe1.ezmember.co.kr/img/tmn_app_i.png" />
            </a>
          </li>
        </ul>
      </div>
      <div class="gnb_nav">
        <ul class="gnb_nav_ea10">
          <li>
            <a href="/index.html" class="active" to="/">홈</a>
          </li>
          <li>
            <a href="/recipe/list.html" to="/recipe">레시피</a>
          </li>
          <li>
            <a
              href="https://www.10000recipe.com/shop/index.html"
              target="_blank"
              to="/food"
              >음식목록</a
            >
          </li>
          <li>
            <a href="/talk/list.html" to="/meterial">재료</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import style from "../assets/TopBar/style.css";

export default {
  name: "TopBar",
  data: () => ({
    curRtword: 2
  }),
  methods: {
    get_Type_of_food() {
      let backRtword = this.curRtword == 1 ? 2 : 1;

      document.getElementById("RtwordDiv_" + this.curRtword).style.display =
        "inline";

      document.getElementById("RtwordDiv_" + backRtword).style.display = "none";

      this.curRtword = backRtword;
    }
  },
  mounted() {
    this.get_Type_of_food();
  }
};
</script>
