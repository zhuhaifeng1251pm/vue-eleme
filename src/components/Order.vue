<template>
    <div class="order">
        <Menu/>
        <Foodlist/>
            </div>
</template>
<script>
import Menu from "../components/Menu";
import Foodlist from "../components/Foodlist";
export default {
    name:'order',components:{
        Menu,
        Foodlist
    }
}
</script>
<style lang="scss" scoped>
.order{
    display: flex;
    // overflow: hidden;
    height: 100%;
    width: 100%;

}
</style>
