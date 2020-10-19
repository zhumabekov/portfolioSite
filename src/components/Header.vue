<template>
  <header>
    <div class="container">
      <div class="logo"><img src="../assets/za.png"></div>
      <nav>
        <div class="nav__burger nav__burger_active"></div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  $textColor: #fefefe;
  header{
    flex-basis: 100px;
  }
  .container{
    width: 95%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .logo img{
    width: 30px;
  }
  .nav__burger{
    position: relative;
    width: 30px;
    height: 4px;
    background-color: $textColor;
    &::before{
      position: absolute;
      left: 0;
      top: -10px;
      content: '';
      display: block;
      width: 30px;
      height: 4px;
      background-color: $textColor;
    }
    &::after{
      position: absolute;
      left: 0;
      top: 10px;
      content: '';
      display: block;
      width: 30px;
      height: 4px;
      background-color: $textColor;
    }
  }
  .nav__burger_active{
    background-color: transparent;
    &::before{
      transform: rotate(45deg);
      top: 0;
    }
    &::after{
      transform: rotate(-45deg);
      top: 0;
    }
  }
</style>