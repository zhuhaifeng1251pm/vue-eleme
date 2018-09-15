<template>
    <div class="change-num">
        <img src="../assets/-.svg" alt="" @click.stop="$store.commit('subCarts',food.id)" v-show="$store.getters.showGoodsNum(food.id)">
        <span v-show="$store.getters.showGoodsNum(food.id)">{{$store.getters.showGoodsNum(food.id)}}</span>
        <img src="../assets/+.svg" alt="" @click.stop="$store.commit('addCarts',food)">
    </div>
</template>
<script>
export default {
    name:'cale',
    props:['food']
}
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
}
</style>
