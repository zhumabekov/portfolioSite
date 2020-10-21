<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo"><img src="../assets/za.png"></div>
        <nav>
          <div class="nav__burger" @click="isActive = !isActive">
            <span class="nav__burger-button" :class="{'nav__burger-button_active': isActive}"></span>
          </div>
          <div class="nav__content" :class="{'nav__content_active': isActive}">
            <ul>
              <li>asas</li>
              <li>asas</li>
              <li>asas</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>
<style lang="scss">
  $textColor: #fefefe;
  header{
    flex-basis: 100px;
  }
  .container{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .header{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 30px;
    }
  }
  nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40%;
  }
  .nav__burger{
    width: 30px;
    height: 24px;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
  }
  .nav__content{
    width: 0%;
    transition: width .3s linear;
    overflow: hidden;
    white-space: nowrap;
    order: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    ul{
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
  }
  .nav__content_active{
   
    width: 100%;
  }
  .nav__burger-button{
    display: block;
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
      transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
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
      transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
    }
  }
  .nav__burger-button_active{
    
    background-color: transparent;
    &::before{
      transform: rotate(45deg);
      top: 0;
      transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
    }
    &::after{
      transform: rotate(-45deg);
      top: 0;
      transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
    }
  }
</style>