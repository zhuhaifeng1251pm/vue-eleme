<template>
  <div class="top">
    <header>
      <div class="header-bg">
        <div class="header-bg-wrap"></div>
      </div>
      <div class="information">
        <img src="../assets/logo.webp" alt="">
        <h2 @click="handleClick">
          <span>叫了只炸鸡</span>
          <!-- <i></i> -->
        </h2>
        <p>
          <span>评价4.7</span>
          <span>月售433单</span>
          <span>蜂鸟专送约30分钟</span>
                      

        </p>
      </div>
    </header>
    <transition name="fade">
      <div class="mask" ref='mask' @click="handleClose" v-show="show">
      </div>
    </transition>
    <transition name="fade1">
      <div class="box1" ref='box1' v-show="show">
        <div class="show-mask">
          <h2>叫了只炸鸡</h2>
          <ul>
            <li>
              <b>4.7</b>
              <span>评分</span>
            </li>
            <li>
              <b>433单</b>
              <span>月售</span>
            </li>
            <li>
              <b>蜂鸟专送</b>
              <span>约36分钟</span>
            </li>
            <li>
              <b>1元</b>
              <span>配送费</span>
            </li>
            <li>
              <b>2.4km</b>
              <span>距离</span>
            </li>
          </ul>
          <span style='margin-top:5vw'>公告</span>
          <p>欢迎光临，用餐高峰期请提前下单，谢谢。
          </p>
        </div>
        <u></u>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    name: "headers",
    methods: {
        handleClick() {
            //   this.$refs.mask.style.display='block';
            //   this.$refs.box1.style.display='flex'
            this.show = true;
        },
        handleClose() {
            //   this.$refs.mask.style.display='none';
            //   this.$refs.box1.style.display='none'
            this.show = false;
        }
    },
    data: () => ({
        show: false
    })
};
</script>

<style lang="scss">
.top {
    width: 100vw;
    height: 30%;
    flex-shrink: 0;
    header {
        width: 100%;
        //   position: relative;

        .header-bg {
            background-image: url(../assets/bg.webp);
            background-size: cover;
            background-position: 50%;
            width: 100%;
            background-repeat: no-repeat;
            height: 26.666667vw;
            .header-bg-wrap {
                width: 100%;
                height: 100%;
               background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
            }
        }
        .information {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 26vw;
            img {
                position: absolute;
                width: 20%;
                border-radius: 0.8vw;
                top: 6%;
                left: 50%;
                z-index: 10;
                margin-left: -10%;
            }
            h2 {
                display: flex;
                margin: 0;
                padding: 0;
                margin-top: 6%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                span {
                    font-size: 5vw;
                    font-weight: 700;
                    white-space: nowrap;
                }
                // i {
                //   width: 4vw;
                //   height: 6.533333vw;
                //   font-size: 0.546667rem;
                //   font-weight: 700;
                //   font-style: italic;
                //   user-select: none;
                //   -webkit-font-smoothing: antialiased;
                //   white-space: nowrap;
                //   line-height: 1.2;
                // }
                // i::after {
                //   content: "";
                //   border-style: solid;
                //   border-width: 1.466667vw 0 1.466667vw 1.733333vw;
                //   border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
                //   box-sizing: inherit;
                //   -webkit-tap-highlight-color: transparent;
                // }
            }
            p {
                white-space: nowrap;
                height: 3.2vw;
                margin-top: 1.733333vw;
                font-size: 2.53333vw;
                color: #666;
                text-align: center;
                margin: 0;
            }
            span + span {
                margin: 0 3% 0 3%;
            }
        }
    }
    .mask {
        // display: none;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .box1 {
        // display: none;
        .show-mask {
            width: 80%;
            height: 53vw;
            position: absolute;
            top: 30%;
            left: 9.5%;
            z-index: 99;
            background-color: #fff;
            border-radius: 1.066667vw;
            overflow: hidden;
            padding: 7.066667vw 6.666667vw 7.466667vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform-origin: center;
            span {
                font-size: 3.293333vw;
                color: #999;
            }
            h2 {
                margin: 0;
                line-height: 6.666667vw;
                color: #333;
                text-align: center;
                font-weight: bolder;
            }
            ul {
                display: flex;
                width: 100%;
                margin: 0;
                padding: 0;
                list-style: none;
                align-items: center;
                justify-content: space-around;
                li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 1vw;
                    text-align: center;
                    b {
                        font-size: 3.45vw;
                        font-weight: 600;
                        color: #333;
                    }
                }
            }
            p {
                font-size: 2.346667vw;
                line-height: 1.54%;
                color: #333;
                margin: 0;
            }
        }
        u {
            background-image: url("../assets/x.webp");
            width: 8.5%;
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.7s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .fade1-enter-active,
    .fade1-leave-active {
        transition: all 0.3s linear;
    }
    .fade1-enter,
    .fade1-leave-to {
        transform: scale(0);
    }
}
</style>

