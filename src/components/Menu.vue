<template>
    <div class="menu">
        <ul>
            <li>热销</li>
            <li>优惠</li>
            <li>新品</li>
        </ul>
    </div>

</template>
<style lang="scss" scoped>
.menu {
  width: 30vw;
  padding: 3vw;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #1992ff;
    li {
      width: 100%;
      line-height: 20vw;
      text-align: center;
      font-size: 5vw;
      color: #fff;
    }
  }
}
</style>
