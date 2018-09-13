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
              <img src="../assets/+.svg" alt="" class="kidfly_animation">
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
            this.scroll = new Bscroll(this.$refs.foodList, {
                probeType: 3,
                bounceTime: 100
            });
            this.scroll.on(
                "scrollEnd",
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
                width: 55%;
                margin: 3.5vw 0;
                img {
                    width: 70%;
                    // height: 21vw;
                    margin-right: 5vw;
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
                        height: 14vw;
                        flex-direction: column;
                        h4,
                        p {
                            margin: 0;
                        }
                        p {
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
                        img {
                            width: 5.866667vw;
                            height: 5.866667vw;
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
    position: relative;
    animation: myfirst 1s;
}

@keyframes myfirst {
    0% {
        left: 0;
        bottom: 0;
    }
    50% {
        left: -10vw;
        bottom: -20vw;
    } /* 定位飞走的位置 */
    100% {
        left: -1rem;
        bottom: -50vw;
    } /* 定位飞走的位置 */
}
</style>
