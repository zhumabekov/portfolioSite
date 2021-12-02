<template>
  <div class="wrapper">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>
<style lang="scss">
$textColor: #fefefd;
$bgColor: #1c1c1c;
.wrapper {
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  background-color: $bgColor;
  color: $textColor;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 700px) {
  .wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
