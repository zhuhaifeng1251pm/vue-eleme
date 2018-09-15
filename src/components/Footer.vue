<template>
    <footer>

        <div class="toPay" @click="changeShow">
            <span class="nums" v-show='totalNum'>{{totalNum}}</span>
            <!-- {{$store.state.carts.carts}} -->
            <div>
                <span :style="`background-color:${!goodsNum?'rgba(61, 61, 63, 0.9)':'#00b3d4'}`" :class="{runner:totalNum}">
                    <img src="../assets/shopingCart.svg" alt="" :style="`display:${goodsNum?'none':'flex'}`">
                    <img src="../assets/shoppingCart2.svg" alt="" :style="`display:${goodsNum?'flex':'none'}`">
                </span>
            </div>
            <div class="total">
                <p :class="{activecolor:totalPrice}">{{totalPrice?`￥${totalPrice}`:'为选购商品'}}</p>
                <p>另需配送费3元</p>
                <!-- <span style='color:#000'>{{$store.state.carts.carts}}</span> -->
            </div>
            <span v-if="totalPrice<15" class="last-child">
                <i>{{totalPrice?'差':''}}￥{{15-totalPrice}}元起送</i>
            </span>
            <span v-else class="to-pay">
                <i>去结算</i>
            </span>
        </div>
        <!-- <p>
            <span style="color: #333333;">满25减15元，满45减20元，满75减30元，满100减40元</span>
        </p> -->
          <transition name="fade">
        <div class="show-buy-goods" v-if='show'>
            <!-- <p>已减0.9元</p> -->
            <div class="box1" v-show="goodsNum">
                <b>已选商品</b>
                <span @click="$store.commit('clearCarts')">清空</span>
            </div>
            <ul>
                <li v-for=" food in this.$store.state.carts.carts" :key='food.id'>
                    <b>{{food.name}}</b>
                    <span>{{food.price*$store.getters.showGoodsNum(food.id)}}</span>
                   <Cale :food='food'/>
                </li>
            </ul>

        </div>
          </transition>

    </footer>
</template>
<script>
import Cale from './Cale'
export default {
  name: "fooders",
  data: () => ({ show: false }),
  components:{
    Cale
  },
  computed: {
    goodsNum() {
      return this.$store.state.carts.carts.length;
    },
    totalNum() {
      return this.$store.getters.totalObj.allCount;
    },
    totalPrice() {
      return this.$store.getters.totalObj.allPrice;
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  flex-shrink: 0;
  height: 9%;
  position: absolute;
  bottom: 0;
  z-index: 50;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  p {
    line-height: 5.333333vw;
    text-align: center;
    font-size: 12px;
    background-color: #f9e8a3;
    margin: 0;
    padding: 0;
  }

  .toPay {
    background-color: rgba(61, 61, 63, 0.9);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    .nums {
      position: absolute;
      top: -4vw;
      left: 14vw;
      font-size: 8px;
      color: #fff;
      z-index: 999;
      background-color: red;
      width: 6vw;
      line-height: 6vw;
      border-radius: 50%;
    }
    span {
      width: 20%;
      text-align: center;
    }
    > div {
      width: 20%;
      text-align: center;
      position: relative;

      span {
        position: absolute;
        left: 50%;
        bottom: -2vw;
        width: 13.333333vw;
        margin-left: -6.6vw;
        box-sizing: border-box;
        border-radius: 100%;
        border: 1.333333vw solid #444;
        box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
        height: 13.333333vw;
        display: flex;
        justify-content: center;
        align-items: center;

        // background-image: url('../assets/shopingCart.svg');
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: 85%;

        // ::before{
        //         content: "";
        // }
        img {
          width: 10vw;
        }
      }
    }
    .total {
      width: 60%;
      background-color: rgba(61, 61, 63, 0.9);
      padding: 5px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;

      p {
        background-color: rgba(61, 61, 63, 0.9);
        color: #999;
        font-size: 16px;
        text-align: left;
      }
      p.activecolor {
        color: #fff;
        font-weight: bolder;
        font-size: 20px;
      }
      p:last-child {
        font-size: 10px;
      }
    }
    .last-child {
      background-color: #535356;
      color: #fff;
      font-size: 14px;
      font-weight: bolder;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .to-pay {
      background-color: #38ca73;
      color: #fff;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .show-buy-goods {
    width: 100vw;
    height: 100vh;
  
    //   z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);

    > p {
      background-color: #f9e8a3;
    }
    .box1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #eceff1;
      color: #666;
      line-height: 10vw;
    }
    > ul {
      margin: 0;
      padding: 0;
      background-color: #fff;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3vw 0;
        b {
          width: 40vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

.runner {
  animation: run 2s;
}
@keyframes run {
  0% {
    transform: scale(0.7);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(0.7);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
transition: all 1s;
}
.fade-enter, .fade-leave-to  {
  transform: translateY(100vh);
}
</style>
