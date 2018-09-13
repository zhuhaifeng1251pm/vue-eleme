<template>
  <div class="wrap">
    <Header/>
    <Main/>
  </div>
</template>
<script>
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  name: "app",
  components: {
    Header,
    Main
  },mounted(){
    this.$store.dispatch('getGoods')
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
}
</style>
