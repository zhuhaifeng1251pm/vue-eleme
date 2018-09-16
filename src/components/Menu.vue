<template>
  <div class="menu" ref='menu'>
    <div class='connet'>
      <ul v-show="goodsNameList.length">
        <!-- <li @click="handleToGoods('hot',0)" :class='{active:activeTabType===0}'>{{goodsNameList}}</li>
            <li @click="handleToGoods('discount',1)" :class='{active:activeTabType===1}'>优惠</li>
            <li @click="handleToGoods('new',2)" :class='{active:activeTabType===2}'>新品</li> -->
        <li v-for="(good,index) in goodsNameList" :key="good" @click="handleToGoods(`tab${index}`,index)" :class='{active:activeTabType===index}' :ref='`menu${index}`'>{{good}}</li>
      </ul>
    </div>
  </div>

</template>
<script>
import Bscroll from "better-scroll";

export default {
  name: "menus",
  props: ["handleClick", "activeTabType"],
  methods: {
    handleToGoods(str, num) {
      console.log(str, num);
      this.handleClick(str, num);
    }
  },
  computed: {
    goodsNameList() {
      return this.$store.getters.goodsNameList.length
        ? this.$store.getters.goodsNameList
        : [];
      // return this.$store.getters.goodsNameList
      // return console.log(this.$store.getters.goodsNameList)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.menu, {
        probeType: 3,
        click: true
      });
    });
    // this.$refs.menu.scroll.scrollToElement(
    //   this.$refs[`menu${this.activeTabType}`][0],
    //   700,
    //   0,
    //   true
    // );
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 22vw;
  padding: 3vw;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0 0 50vw 0;
    background-color: #f8f8f8;
    li {
      width: 100%;
      line-height: 20vw;
      text-align: center;
      font-size: 5vw;
      color: #666;
    }
  }
  .active {
    color: red;
  }
}
</style>
