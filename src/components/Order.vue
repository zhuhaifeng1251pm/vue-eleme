<template>
    <div class="order">
        <Menu :handleClick="handleClick" :activeTabType="activeTabType" />
        <Foodlist ref='foodList' :activeTabType="activeTabType" :handleChangeNum='handleChangeNum' />
    </div>
</template>
<script>
import Menu from "../components/Menu";
import Foodlist from "../components/Foodlist";
import axios from "axios";
export default {
  name: "order",
  components: {
    Menu,
    Foodlist
  },
  data: () => ({
    activeTabType: 0
  }),
  methods: {
    handleClick(str, num) {
      // console.log(this.$refs.foodList)
      this.activeTabType = num;
      this.$refs.foodList.scroll.scrollToElement(
        this.$refs.foodList.$refs[str][0],
        700
      );
    },
    handleChangeNum(num) {
      // console.log(num)
      this.activeTabType = num;
    }
  },
  mounted() {
    //    console.log(this.$store.state.goods.goods)
  }
};
</script>
<style lang="scss" scoped>
.order {
  display: flex;
  height: 100%;
  // height: 100vw;
  overflow: auto;
  width: 100%;
}
</style>
