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
              >회원가입 +3,000</span>
            </div>
            <a href="/user/login.html">
              <img src="https://recipe1.ezmember.co.kr/img/ico_user.png" alt="로그인" />
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
            <div class="write_layer document_common_layer" style="display:none;left:-230px;">
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
            <a href="https://www.10000recipe.com/shop/index.html" target="_blank" to="/food">음식목록</a>
          </li>
          <li>
            <a href="/talk/list.html" to="/meterial">재료</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gnb_top_wrap {
  background: #fff;
  width: 100%;
  height: 112px;
}
.gnb_top {
  width: 1240px;
  margin: 0 auto;
  padding: 16px 0 0 176px;
}
.gnb_top h1 {
  margin: 0 30px 0 0;
  display: inline-block;
  vertical-align: top;
}

.gnb_search {
  width: 450px;
  display: inline-block;
  padding-top: 12px;
}
.gnb_search .btn {
  background: #74b243;
  border: 1px solid #68a13a;
  height: 38px;
}
.gnb_search .btn span {
  color: #fff;
  font-size: 22px;
}
.gnb_search .form-control {
  border: 1px solid #ccc;
  background: #fbfbfb;
  height: 38px;
}
.gnb_search_word {
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
}
.gnb_search_word ul {
  display: inline-block;
  padding: 1px 0 0 6px;
  width: 381px;
}
.gnb_search_word li {
  display: inline-block;
  list-style: none;
  padding: 0;
  border-right: 1px solid #ddd;
  padding: 0 9px;
  font-size: 14px;
  line-height: 1;
}
.gnb_search_word li:last-child {
  border-right: 0;
}
.gnb_search_word li a {
  color: #000;
}
.gnb_search_btn {
  display: inline-block;
  vertical-align: top;
}

.gnb_search_btn a {
  float: left;
}

.gnb_right {
  display: inline-block;
  padding: 16px 0 0 50px;
  vertical-align: top;
  position: relative;
}
.gnb_right li {
  list-style: none;
  padding: 0 3px;
  display: inline-block;
}
.gnb_right li a {
  height: 30px;
}
.gnb_right li a img {
  width: 44px;
  border-radius: 50%;
}
.gnb_right .mem_layer {
  position: absolute;
  left: 22px;
  top: 51px;
  width: 182px;
  z-index: 1000000;
}
.gnb_right .mem_layer_m a {
  height: auto;
}
.gnb_right .write_layer {
  position: absolute;
  right: -4px;
  top: 50px;
  width: 372px;
}
.gnb_right .write_layer a {
  height: auto;
}

.gnb_nav ul {
  width: 1240px;
  margin: 0 auto;
  padding: 9px 30px 0;
  text-align: center;
}
.gnb_nav ul li {
  list-style: none;
  padding: 0;
  width: 1%;
  display: table-cell;
}
.gnb_nav ul li a {
  display: block;
  font-size: 18px;
  margin: 0 8px;
  color: #fff;
}
.gnb_nav ul li a.active {
  color: #ffff00;
}
.gnb_nav ul li a:hover {
  color: #ffff00;
}

.gnb_chef .gnb_top_wrap {
  height: 96px;
}
.gnb_chef .gnb_top {
  padding: 13px 0 0 20px;
}
.gnb_chef .gnb_top .gnb_right {
  float: right;
}
.gnb_chef .gnb_top h1 span {
  border-left: 1px solid #ccc;
  padding-left: 14px;
  margin-left: 14px;
  color: #666;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
}
.gnb_chef .gnb_top .gnb_right li.tel {
  font-size: 24px;
  color: #000;
  vertical-align: middle;
  padding-right: 12px;
  padding-top: 4px;
}
.gnb_chef .gnb_top .gnb_right li.tel img {
  padding-right: 4px;
}

.gnb_nav {
  background: url(//recipe1.ezmember.co.kr/img/gnb_bg.gif) left top repeat-x;
  height: 46px;
  width: 100%;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
}
.gnb_nav ul {
  width: 1240px;
  margin: 0 auto;
  padding: 9px 30px 0;
  text-align: center;
}
.gnb_nav ul li {
  list-style: none;
  padding: 0;
  width: 1%;
  display: table-cell;
}
.gnb_nav ul li a {
  display: block;
  font-size: 18px;
  margin: 0 8px;
  color: #fff;
}
.gnb_nav ul li a.active {
  color: #ffff00;
}
.gnb_nav ul li a:hover {
  color: #ffff00;
}

.gnb_chef .gnb_nav {
  background: #667180;
}
.gnb_chef .gnb_nav ul li:last-child {
  background: none;
}
.gnb_chef .gnb_nav ul li a {
  display: block;
  font-size: 18px;
  margin: 0 8px;
  color: #cdcdd1;
}
.gnb_chef .gnb_nav ul li a.active {
  color: #fff;
}
.gnb_chef .gnb_nav ul li a:hover {
  color: #fff;
}
</style>

<script>
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