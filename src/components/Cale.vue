<template>
  <div class="change-num">
    <img src="../assets/-.svg" alt="" @click.stop="$store.commit('subCarts',food.id)" v-show="$store.getters.showGoodsNum(food.id)">
    <span v-show="$store.getters.showGoodsNum(food.id)">{{$store.getters.showGoodsNum(food.id)}}</span>
    <img src="../assets/+.svg" alt="" @click.stop="handleAddCarts(food);changeisRun();handleShowBall()">
    <b ref='b' v-show='ball' :class='{balls:ball}'></b>
  </div>
</template>
<script>
export default {
  name: "cale",
  data: () => ({
    ball: false
  }),
  props: ["food", "changeisRun"],
  methods: {
    handleAddCarts(food) {
      this.$store.commit("addCarts", food);
      // this.$refs.b.style.transform('translate(20px,20px)')
      //   this.$refs.b.offset({top:'1',left:'1'})
      console.log(this.$refs.b.offsetTop, this.$refs.b.offsetLeft);
    },
    handleShowBall() {
      console.log(1);
      this.ball = true;
      setTimeout(() => {
        this.ball = false;
      }, 500);
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
    z-index: 20;
    right: 5.8vw;
    // top: 2vw;
  }
  .balls {
    animation: ball 0.5s;
  }
  @keyframes ball {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-100px, 0);
    }
    20%{
      transform: translate(-150px,20px)
    }
    30%{
      transform: translate(-200px,50px)
    }
    40%{
      transform: translate(-250px,100px)
    }
    50%{
      transform: translate(-260px,150px)
    }
    60%{
      transform: translate(-300px,200px)
    }
    70%{
      transform: translate(-300px,250px)
    }
    80%{
      transform: translate(-300px,260px)
    }
    90%{
      transform: translate(-300px,270px)
    }
    100% {
      transform: translate(-300px, 300px);
    }
  }
}
</style>
