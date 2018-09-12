<template>
    <div class="main">
        <nav>
            <ul>
                <li>
                    <router-link exact-active-class='active' class='tips' to='/'>点餐</router-link>
                </li>
                <li>
                    <router-link active-class='active' class='tips' to='/evaluate'>评价</router-link>
                </li>
                <li>
                    <router-link active-class='active' class='tips' to='/business'>商家</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
.main {
    height: 70vw;
    width: 100vw;
  nav {
    width: 100vw;
    border-bottom: 1px solid #ccc;
    height: 11vw;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      list-style: none;
      li {
        width: 33.3333333vw;
        display: flex;
        align-items: center;
        justify-content: center;
        .tips {
          border-bottom: 3px solid #fff;
          color:#999;
        }
        .active {
          color: #000;
          font-weight: bold;
          line-height: 10vw;
          border-bottom: 3px solid #2395ff;
        }
      }
    }
  }
}
</style>
