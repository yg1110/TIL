<template>
  <div>
    <br />
    <br />
    <category />
    <h2>현재 상황</h2>
    <br />
    <ul>
      <li>
        <h2>총 레시피 갯수는 "537"</h2>
      </li>
      <br />
      <li>
        <h2>
          공공데이터 api를 받아와서 출력하는 형태(100개) -> db에서 가져오도록
          변경예정
        </h2>
      </li>
      <br />
      <li>
        <h2>컴포넌트는 header / content / footer로만 되어있습니다.</h2>
      </li>
      <br />
      <li>
        <h2>초기 디자인은 만개의 레시피 참고중입니다.</h2>
      </li>
      <br />
    </ul>

    <br />
    <h2>구현해야될 기능</h2>
    <br />
    <ul>
      <li>
        <h2>카메라 기능</h2>
      </li>
      <br />
      <li>
        <h2>회원가입 / 로그인</h2>
      </li>
      <br />
      <li>
        <h2>사용자 레시피 추가</h2>
      </li>
      <br />
    </ul>

    <input type="file" accept="image/*" capture="camera" />

    <!-- <food />
    <br />
    <recipe />
    <br />
    <material />-->
  </div>
</template>
<script>
// import food from "../components/food";
// import recipe from "../components/recipe";
// import material from "../components/meterial";
import category from "../components/category";

export default {
  name: "foodmain",
  components: {
    category
    // food,
    // recipe,
    // material
  },

  data: () => ({
    //
  })
};
</script>
