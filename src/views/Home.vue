<template>
  <div class="home">
    <header class="header">
      <router-link to="/first1">first1</router-link>
      <router-link to="/first2">first2</router-link>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data(){
    return {
      curIndex:0
    }
  }
}
</script>
<style lang="scss">
.home{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  .header{
    height: 46px;
    background: #eee;
    display: flex;
    a{
      flex:1;
      text-align: center;
      line-height: 46px;
      text-decoration: none;
      color:#000;
      &:hover{
        background: #fff;
        color:#f90;
      }
    }
  }
  .main{
    flex:1;
    width:100%;
    overflow: auto;
  }
}
</style>