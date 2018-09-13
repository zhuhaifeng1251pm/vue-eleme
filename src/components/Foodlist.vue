<template>
    <div class="food-list" ref='foodList'>
        <div class='connet' v-show="goods.length">
            <div class="tab" v-for="(good,index) in goods" :key="good.id" :ref="`tab${index}`">

                <h3>{{good.name}}</h3>
                <div v-for="food in good.foods" :key="food.id" class="show-good">
                    <img :src="food.icon" alt="">
                    <div class="information">
                        <div class="top">

                            <h4>{{food.name}}</h4>
                            <p>{{food.info}}</p>
                        </div>

                        <div class="price">
                            <span>￥{{food.price.toFixed(2)}}</span>
                            <button>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "foodlist",
  props: ["handleChangeNum"],

  mounted() {
    // let tabArr = document.querySelectorAll(".tab");
    // let heightArr = [];
    // const foodListHeight = document.querySelector(".food-list");
    // for (let i = 0; i < tabArr.length; i++) {
    //   heightArr.push(tabArr[i].offsetTop);
    // }
    // console.log(heightArr);
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.foodList, { probeType: 3 });
      this.scroll.on("scroll", pos =>
        this.handleChangeNum(this.currentIndex(-pos.y))
      );
    });
  },
  computed: {
    goods() {
      return this.$store.state.goods.goods;
    },
    scrollToMenu() {
      let tabArr = document.querySelectorAll(".tab");
      let heightArr = [];
      const foodListHeight = document.querySelector(".food-list");
      for (let i = 0; i < tabArr.length; i++) {
        heightArr.push(tabArr[i].offsetTop - tabArr[0].offsetTop);
      }
      return heightArr;
    }
  },
  methods: {
    currentIndex(y) {
      for (let i = 0; i < this.scrollToMenu.length; i++) {
        const currentIndex1 = this.scrollToMenu[i];
        const currentIndex2 = this.scrollToMenu[i + 1];
        if (!currentIndex2 || (y >= currentIndex1 && y < currentIndex2)) {
          return i;
        }
        // else if(this.scrollToMenu[i]<=0){
        //     return 0
        // }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.food-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 70vw;
  .connet {
    .tab {
      h3 {
        margin: 0;
      }
      .show-good {
        display: flex;
        width: 55%;
        img {
            width: 45%;
            height: 21vw;
            margin-right: 5px;
          }
          .information{
              width: 100%;
        .top {
          width: 100%;
          display: flex;
          flex-direction: column;
          h4,
          p {
            margin: 0;
          }
          p{
              font-size: 12px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }
        }
         .price {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
       }
      }
    }
    .tab:last-child {
      box-sizing: content-box;
      padding-bottom: 10vw;
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
}
</style>
