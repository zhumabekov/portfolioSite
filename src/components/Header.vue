<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link to="/" tag="div" class="logo">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve"
          >
            <g>
              <g>
                <polygon
                  class="logo_svg"
                  points="0.4,0.32 0.4,12.27 15.32,12.27 0.4,27.19 0.4,45.97 46.05,0.32 		"
                />
                <polygon
                  class="logo_svg"
                  points="49.6,49.68 49.6,37.73 34.68,37.73 49.6,22.81 49.6,4.03 3.95,49.68 		"
                />
              </g>
            </g>
          </svg>
        </router-link>
        <nav>
          <div class="nav__burger" @click="isActive = !isActive">
            <span
              class="nav__burger-button"
              :class="{ 'nav__burger-button_active': isActive }"
            ></span>
          </div>
          <div class="nav__content" :class="{ nav__content_active: isActive }">
            <ul>
              <router-link tag="li" to="/aboutme">Работы</router-link>
              <router-link tag="li" to="/skills">Навыки</router-link>
              <router-link tag="li" to="/contacts">Контакты</router-link>
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
      isActive: false,
    };
  },
};
</script>
<style lang="scss">
$textColor: #fefefd;
$hoverColor: #b2a57a;
header {
  flex-basis: 100px;
  min-height: 50px;
}
header .container {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.header {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
  }
  .logo_svg {
    fill: $textColor;
  }
  &:hover .logo_svg {
    transition: fill 0.2s linear;
    fill: $hoverColor;
  }
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
}
.nav__burger {
  width: 30px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  &:hover > span {
    background-color: $hoverColor;
    &::before {
      background-color: $hoverColor;
    }
    &::after {
      background-color: $hoverColor;
    }
  }
}
.nav__content {
  width: 0%;
  transition: width 0.3s linear;
  overflow: hidden;
  white-space: nowrap;
  order: 1;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  text-transform: uppercase;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    li {
      cursor: pointer;
      &:hover {
        color: $hoverColor;
        transition: color 0.2s linear;
      }
    }
  }
}
.nav__content_active {
  width: 100%;
}
.nav__burger-button {
  display: block;
  position: relative;
  width: 30px;
  height: 4px;
  background-color: $textColor;
  &::before {
    position: absolute;
    left: 0;
    top: -10px;
    content: "";
    display: block;
    width: 30px;
    height: 4px;
    background-color: $textColor;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
  }
  &::after {
    position: absolute;
    left: 0;
    top: 10px;
    content: "";
    display: block;
    width: 30px;
    height: 4px;
    background-color: $textColor;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
  }
}
.nav__burger-button_active {
  background-color: transparent !important;
  &::before {
    background-color: $hoverColor;
    transform: rotate(45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
  &::after {
    background-color: $hoverColor;
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
}
.router-link-exact-active {
  color: $hoverColor;
}
@media screen and (max-width: 600px) {
}
</style>
