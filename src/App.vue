<template>
  <div id="app">
    <Main></Main>
  </div>
</template>
<script>
import Main from './components/Main'
export default {
  components: {
    Main
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
 