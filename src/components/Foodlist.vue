<template>
    <div class="food-list" ref='foodList'> 
        <div>
        <div class="hot" ref="hot">
            <button @click="handleClickTo">跳转</button>
            <h3>热销</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </div>
        <div class="discount" ref="discount">
            <h3>折扣</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </div>
        <div class="new" ref="new">
            <h3>新品</h3>
            <ul>
               <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'foodlist',
   mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.foodList, {})
      })
    },methods:{
    handleClickTo(){
        this.scroll.scrollToElement(this.$refs.new,500)
    }
    }
}
</script>

<style lang="scss" scoped>
.food-list{
    display: flex;
    flex-direction: column;
        overflow:auto;
        width: 70vw;
        ul{
            margin: 0;
            padding: 0;
        }
}
</style>
