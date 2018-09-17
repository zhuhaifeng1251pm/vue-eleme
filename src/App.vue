<template>
  <div class="wrap">
    <Header/>
    <Main />
    <!-- <Footer/> -->
  </div>
</template>
<script>
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";

export default {
  name: "app",
  // data:()=>{
  //   showFooter:''
  // },
  components: {
    Header,
    Main
    
  }
  ,mounted(){
    this.$store.dispatch('getGoods')
    // this.$store.dispatch("getContents");
  }
  ,methods:{
    changeFooter(str){
        this.showFooter=str
    }
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
      overflow: auto;
  // justify-content: space-between;
}
</style>
