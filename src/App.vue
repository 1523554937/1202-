<template>
  <div id="app">
    <router-link to="/"></router-link> 
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"app",
  components:{

  }
}

</script>

<style lang="scss">
*{padding: 0;margin: 0;list-style: none;box-sizing: border-box;}
#app,html,body{
  width:100%;
  height:100%;
}
</style>
