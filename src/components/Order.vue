<template>
    <div class='order-wrap'>
        <div class="order">
            <Menu ref='menu' :handleClick="handleClick" :activeTabType="activeTabType" />
            <Foodlist ref='foodList' :activeTabType="activeTabType" :handleChangeNum='handleChangeNum' :getFoodDetail='getFoodDetail' :changeisRun='changeisRun' :handleMenu='handleMenu'/>
        </div>
        <transition name="fades">
            <div class="food-detail" v-if="showsFood">
                <img :src="showsFood.image" alt="">
                <div class="food-info">
                    <h3>{{showsFood.name}}</h3>
                    <p>月售{{showsFood.sellCount}}份 好评率{{showsFood.rating}}</p>
                    <div class="price">
                        <span v-if="$store.getters.showGoodsNum(showsFood.id)">￥{{showsFood.price*$store.getters.showGoodsNum(showsFood.id)}}</span>
                        <span v-else></span>
                        <Cale :food='showsFood' :changeisRun='changeisRun' />
                    </div>
                </div>
                <div id="closess" @click='getFoodDetail(null)'></div>
            </div>
        </transition>
        <Footer :isRun='isRun' :changeisRun='changeisRun'/>
    </div>
</template>
<script>
import Cale from "./Cale";
import Menu from "../components/Menu";
import Foodlist from "../components/Foodlist";
import axios from "axios";
import Footer from "../components/Footer";
export default {
  name: "order",
  components: {
    Menu,
    Foodlist,
    Footer,
    Cale
  },
  data: () => ({
    activeTabType: 0,
    showsFood: null,isRun:false
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
    handleMenu(str){
        this.$refs.menu.scroll.scrollToElement(this.$refs.menu.$refs[str][0],200,0,-50)
        // console.log(1)
    },
    handleChangeNum(num) {
      // console.log(num)
      this.activeTabType = num;
    },
    getFoodDetail(food) {
      this.showsFood = food;
    },
    changeisRun(){
        this.isRun=true
        setTimeout(
          ()=>{
          this.isRun=false
          },500
        )
    }
  }

  // mounted() {
  //        console.log(this.showsFoo)
  // }
};
</script>
<style lang="scss" scoped>
.order-wrap {
  height: 100%;
  // position: relative;
  .order {
    display: flex;
    height: 100%;
    // height: 100vw;
    overflow: auto;
    width: 100%;
  }
  .food-detail {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
    .food-info {
      padding: 5vw;
      h3 {
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 10px;
        color: #666;
      }
      .price {
        width: 100%;
        color: rgb(255, 83, 57);
        font-size: 22px;
        display: flex;
        justify-content: space-between;
        span {
          width: 50vw;
          height: 10vw;
          line-height: 10vw;
          background-color: #fff;
        }
      }
    }
    #closess {
      width: 10vw;
      height: 10vw;
      background-image: url("../assets/关闭.svg");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 60;
    }
  }
}
.fades-enter-active,
.fades-leave-active {
  transition: all 1s;
}
.fades-enter,
.fades-leave-to {
  transform: translateY(100vh);
}
</style>
