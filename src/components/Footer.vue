<template>
    <footer>
        <p>
            <span style="color: #333333;">满25减15元，满45减20元，满75减30元，满100减40元</span>
        </p>

        <div class="toPay">
            <div>
                <span></span>
            </div>
            <div class="total">
                <p>为选购商品</p>
                <p>另需配送费3元</p>
            </div>
            <span>￥15元起送</span>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100%;
    flex-shrink: 0;
    height: 10%;
    position: fixed;
    bottom: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
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
                bottom: -4vw;
                width: 13.333333vw;
                margin-left: -6.6vw;
                box-sizing: border-box;
                border-radius: 100%;
                border: 1.333333vw solid #444;
                box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
                height: 13.333333vw;
                background-image: url('../assets/shopingCart.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 85%;
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
            p:last-child {
                font-size: 10px;
            }
        }
        span:last-child {
            background-color: #535356;
            color: #fff;
            font-size: 14px;
            font-weight: bolder;
        }
    }
}
</style>
