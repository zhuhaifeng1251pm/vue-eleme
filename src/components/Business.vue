<template>
    <div class="business">
        <div class="distribution-info">
            <h4>
                <b>配送信息</b>
            </h4>
            <p>
                <span>蜂鸟专送</span> 约35分钟送达，距离2.6km</p>
            <p>配送费￥2.5</p>
        </div>
        <div class="activity">
            <ul>
                <li>
                    <span>满减</span> 满20减10，满40减30</li>
                <li>
                    <span>特价</span>单品定价</li>
                <li>
                    <span>特价</span>单品定价</li>
                <li>
                    <span>特价</span>单品定价</li>
                <li>
                    <span>特价</span>单品定价</li>
                <li>
                    <span>特价</span>单品定价</li>
            </ul>
            <p> <span>保</span> 该商户食品安全已由国泰产险承担，食品安全有保障</p>
        </div>
        <div class="shop">
            <div class="shop-top">
                <h4>商家实景</h4>
                <div class="show-img"><img src="../assets/shop1.webp" alt="">
                <span>门店</span>
                <img src="../assets/shop2.webp" alt=""></div>
                <span>大堂</span>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.business {
  width: 100%;
  height: 100%;
  overflow:auto;
  .distribution-info {
    padding: 3vw 3vw;
    border-bottom: 5px solid #f1f1f1;

    p {
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #666;
      margin-bottom: 2vw;
      span {
        background-color: #0097ff;
        color: #fff;
        border-radius: 3px;
        width: 15vw;
        font-size: 10px;
        margin-right: 3vw;
        line-height: 5vw;
        text-align: center;
      }
    }
  }
  .activity{
      width: 98%;
      ul{
          margin: 0;padding: 0;
          padding: 3vw 2vw;
          li{
              font-size: 12px;
              color:#666;
              display: flex;
              align-items: center;
              padding: 3vw 0;
              span{
                  background-color: rgb(241, 136, 79);
                  color:#fff;
                  width: 8vw;
                  text-align: center;
                  margin-right: 2vw;
              }
          }
          li:first-child span{
              background-color: rgb(240, 115, 115);
          }
      }
    p{
            color: #666;
            font-size: 12px;
            display: flex;
            margin: 0;
            padding: 0 7vw;
            span{
                border:1px solid #ccc;
                width: 7vw;
                text-align: center;
            }
    }
  }
}
</style>
