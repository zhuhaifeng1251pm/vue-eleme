<template>
  <div class="change-num" >
    <img src="../assets/-.svg" alt="" @click.stop="$store.commit('subCarts',food.id)" v-show="$store.getters.showGoodsNum(food.id)">
    <span v-show="$store.getters.showGoodsNum(food.id)">{{$store.getters.showGoodsNum(food.id)}}</span>
    <img src="../assets/+.svg" alt="" @click.stop="handleAddCarts(food);changeisRun()">
    <!-- <b ref='b'></b> -->
  </div>
</template>
<script>
export default {
  name: "cale",
  props: ["food",'changeisRun'],
  methods: {
    handleAddCarts(food) {
      this.$store.commit("addCarts", food);
      // this.$refs.b.style.transform('translate(20px,20px)')
      //   this.$refs.b.offset({top:'1',left:'1'})
      // console.log(this.$refs.b.offsetTop, this.$refs.b.offsetLeft);
    }
  }
};
</script>

<style lang="scss" scoped>
.change-num {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20vw;
  margin-right: 1vw;

  > img {
    width: 5.866667vw;
    height: 5.866667vw;
    margin: 0;
  }
  > span {
    text-align: center;
    line-height: 5.866667vw;
    margin: 0 3vw;
  }
  b {
    width: 5vw;
    height: 5vw;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    right: 5.8vw;
  }
}
</style>
