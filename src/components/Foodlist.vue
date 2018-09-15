<template>
  <div class="food-list" ref='foodList'>
    <div class='connet' v-show="goods.length">
      <div class="tab" v-for="(good,index) in goods" :key="good.id" :ref="`tab${index}`">

        <h3>{{good.name}}</h3>
        <div v-for="food in good.foods" :key="food.id" class="show-good" @click="getFoodDetail(food)">
          <img :src="food.icon" alt="">
          <div class="information">
            <div class="top">

              <h4>{{food.name}}</h4>
              <p>{{food.info}}</p>
            </div>

            <div class="price">
              <span>￥{{food.price.toFixed(2)}}</span>
              <Cale  :food='food'/>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Cale from './Cale'
import Bscroll from "better-scroll";
export default {
    name: "foodlist",
    props: ["handleChangeNum",'getFoodDetail'],
    components:{
      Cale
    },
    mounted() {
        // let tabArr = document.querySelectorAll(".tab");
        // let heightArr = [];
        // const foodListHeight = document.querySelector(".food-list");
        // for (let i = 0; i < tabArr.length; i++) {
        //   heightArr.push(tabArr[i].offsetTop);
        // }
        // console.log(heightArr);
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.foodList, {
                probeType: 3,
                click: true
            });
            this.scroll.on(
                "scroll",
                pos => this.handleChangeNum(this.currentIndex(-pos.y))
                // console.log(pos)
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
        // goodsNum(){
        //     return this.
        // }
    },
    methods: {
        currentIndex(y) {
            for (let i = 0; i < this.scrollToMenu.length; i++) {
                const currentIndex1 = this.scrollToMenu[i];
                const currentIndex2 = this.scrollToMenu[i + 1];
                if (y >= 0) {
                    if (
                        !currentIndex2 ||
                        (y >= currentIndex1 && y < currentIndex2)
                    ) {
                        return i;
                    }
                } else {
                    return 0;
                }
                // else if(this.scrollToMenu[i]<=0){
                //     return 0
                // }
            }
        },
        handleClick() {
            console.log(1);
        }
    }
};
</script>

<style lang="scss" scoped>
.food-list {
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 80vw;
    .connet {
        .tab {
            margin: 5vw 0 5vw 0;
            h3 {
                margin: 0;
            }
            .show-good {
                display: flex;
                width: 59%;
                margin: 3.5vw 0;
                img {
                    width: 70%;
                    // height: 21vw;
                    margin-right: 2vw;
                }
                .information {
                    width: 100%;
                    height: 27vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .top {
                        width: 100%;
                        display: flex;
                        height: 17vw;
                        flex-direction: column;
                        h4,
                        p {
                            margin: 0;
                        }
                        h4 {
                            width: 90%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        p {
                            font-size: 12px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                    .price {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        // justify-content: space-between;
                        span{
                          margin-right: 5vw;
                        }
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
.kidfly_animation {
    position: fixed;
    animation: myfirst 1s;
}

@keyframes myfirst {
    0% {
        left: 0;
        bottom: 0;
    }
    // 20% {
    //     left: -10vw;
    //     bottom: -10vw;
    // }
    // 40% {
    //     left: -20vw;
    //     bottom: -20vw;
    // }
    // 60% {
    //     left: -30vw;
    //     bottom: -30vw;
    // }
    // 80% {
    //     left: -40;
    //     bottom: -40vw;
    // }
    100% {
        left: 50vw;
        bottom: 50vw;
    }
}
</style>
