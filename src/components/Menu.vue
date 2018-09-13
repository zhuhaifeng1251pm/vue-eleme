<template>
  <div class="menu">
    <ul v-show="goodsNameList.length">
      <!-- <li @click="handleToGoods('hot',0)" :class='{active:activeTabType===0}'>{{goodsNameList}}</li>
            <li @click="handleToGoods('discount',1)" :class='{active:activeTabType===1}'>优惠</li>
            <li @click="handleToGoods('new',2)" :class='{active:activeTabType===2}'>新品</li> -->
      <li v-for="(good,index) in goodsNameList" :key="good" 
      @click="handleToGoods(`tab${index}`,index)" 
      :class='{active:activeTabType===index}'
      >{{good}}</li>
    </ul>
  </div>

</template>
<script>
export default {
  name: "menus",
  props: ["handleClick", "activeTabType"],
  methods: {
    handleToGoods(str, num) {
      console.log(str,num)
      this.handleClick(str, num);
    }
  },
  computed: {
    goodsNameList() {
      return this.$store.getters.goodsNameList.length?this.$store.getters.goodsNameList:[];
      // return this.$store.getters.goodsNameList
      // return console.log(this.$store.getters.goodsNameList)
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 30vw;
  padding: 3vw;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #1992ff;
    li {
      width: 100%;
      line-height: 20vw;
      text-align: center;
      font-size: 5vw;
      color: #fff;
    }
  }
  .active {
    color: red;
  }
}
</style>
