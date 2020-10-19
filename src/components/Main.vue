<template>
  <div class="wrapper">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default {
  components: {
    Header,
    Body,
    Footer
  }
}
</script>
<style lang="scss">
  $textColor: #fefefe;
  $bgColor: #181818;
  .wrapper{
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    background-color: $bgColor;
    color: $textColor;
    display: flex;
    flex-direction: column;
  }
</style>