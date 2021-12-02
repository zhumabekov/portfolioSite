<template>
  <section class="skills">
    <div class="skills__edu">
      Учился <span>(бакалавриат)</span> в Евразийском национальном университете
      им. Л.Н.Гумилева в факультете «Информационные технологий», специальность
      «Информационные системы». Дальше <span>(магистратура)</span> в Казахском
      университете экономики, финансов и международной торговли в факультете
      «Прикладных наук» специальность «Информационные системы». Имеется
      следующие навыки <img src="../../assets/letter.png" />
    </div>
    <div class="skills__list">
      <!-- <div
        class="skills__bg"
        :style="{ 'background-image': `url(${url})` }"
      ></div>
      <ul @mouseleave="clearBg()" class="skills__items">
        <li
          v-for="(skil, index) in skils"
          :key="index"
          @mouseover="changeBg(skil.img)"
        >
          <span>{{ skil.name }}</span>
        </li>
      </ul> -->
      <div class="skills__container">
        <div
          class="cube"
          :style="{
            transform:
              'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)',
          }"
        >
          <div class="side front">
            <li>CSS</li>
            <li>Flexbox</li>
            <li>Grid Layout</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
          </div>
          <div class="side back">
            <li>REST API</li>
            <li>Git</li>
            <li>Intersystems Cache</li>
            <li>Sql</li>
            <li>WordPress</li>
          </div>
          <div class="side right">
            <li>JavaScript</li>
            <li>VueJS</li>
            <li>Vuex</li>
            <li>TypeScript</li>
            <li>AngularJS</li>
            <li>Angular 7</li>
          </div>
          <div class="side left">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Corel Draw</li>
            <li>Figma</li>
          </div>
          <div class="side top">
            <li>REST API</li>
            <li>Git</li>
            <li>Intersystems Cache</li>
            <li>Sql</li>
            <li>WordPress</li>
          </div>
          <div class="side bottom">
            <li>REST API</li>
            <li>Git</li>
            <li>Intersystems Cache</li>
            <li>Sql</li>
            <li>WordPress</li>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      url: "/src/assets/letter.png",
      rotateY: -36,
      rotateX: -28,
      skils: [
        {
          name: "HTML",
          img: "https://www.flaticon.com/svg/static/icons/svg/732/732212.svg",
        },
        {
          name: "CSS , Flexbox, Grid Layout",
          img: "https://www.flaticon.com/svg/static/icons/svg/732/732190.svg",
        },
        {
          name: "SCSS",
          img:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png",
        },
        {
          name: "Bootstrap",
          img:
            "https://them.es/starter-bootstrap/wp-content/uploads/sites/7/2015/03/icon-bootstrap.png",
        },
        {
          name: "JavaScript",
          img:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png",
        },
        {
          name: "AngularJS, Angular 7",
          img:
            "https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png",
        },
        {
          name: "VueJS, Vuex",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
        },
        {
          name: "TypeScript",
          img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        },
        {
          name: "Git",
          img:
            "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png",
        },
        {
          name: "REST API",
          img:
            "https://asterisk-pbx.ru/wiki/_media/asterisk/ari/swaggerlogo360.png",
        },
        {
          name: "Intersystems Cache",
          img:
            "https://d27z76th86wcg3.cloudfront.net/config/assets/8b866e1d-2ff8-4756-94ad-46206dfade54/d2ddb36d-8ecf-4aea-9f34-adc2f418a24f/icon.png",
        },
        {
          name: "Sql",
          img: "https://www.flaticon.com/svg/static/icons/svg/1265/1265531.svg",
        },
        {
          name: "WordPress",
          img: "https://www.flaticon.com/svg/static/icons/svg/174/174881.svg",
        },
        {
          name: "Adobe Photoshop",
          img: "https://www.flaticon.com/svg/static/icons/svg/688/688062.svg",
        },
        {
          name: "Adobe Illustrator",
          img: "https://www.flaticon.com/svg/static/icons/svg/688/688064.svg",
        },
        {
          name: "Corel Draw",
          img:
            "https://cdn2.iconfinder.com/data/icons/coreldraw-graphics-suite-x6-icons/256/Corel_Draw_1.png",
        },
      ],
    };
  },
  methods: {
    changeBg(url) {
      this.url = url;
    },
    clearBg() {
      this.url = "";
    },
  },
  mounted() {
    let self = this;
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 37) {
        self.rotateY -= 4;
      } else if (event.keyCode === 38) {
        self.rotateX += 4;
      } else if (event.keyCode === 39) {
        self.rotateY += 4;
      } else if (event.keyCode === 40) {
        self.rotateX -= 4;
      }
    });
  },
};
</script>
<style lang="scss">
.skills {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  & > div {
    width: 50%;
  }
}
.skills__edu {
  font-size: 1.8em;
  font-weight: bold;
  img {
    width: 30px;
    transform-origin: left center;
    animation: waving 1s ease-in-out 2s 1;
  }
  span {
    color: #b2a57a;
  }
}
.skills__list {
  margin-left: 100px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skills__bg {
  width: 50%;
  height: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px;
  filter: sepia(3) blur(2px);
  transition: 0.5s;
  position: fixed;
}
// .skills__items {
//   top: 0;
//   position: relative;
//   z-index: 2;
// }
.skills__items li {
  position: relative;
  left: 0;
  margin: 4px 0;
  list-style: none;
  border-left: 5px solid #b2a57a;
  transition: 0.5s;
  cursor: pointer;
}
.skills__items li::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #b2a57a;
  opacity: 0.5;
  transition: 0.5s;
  transform: scaleX(0);
  transform-origin: left;
}
.skills__items li:hover::before {
  transform: scaleX(1);
}
.skills__items li:hover {
  left: 10px;
}
.skills__items li:hover span {
  color: #1c1c1c;
}
.skills__items li span {
  position: relative;
  padding: 2px 15px;
  // display: inline-block;
  z-index: 1;
  transition: 0.5s;
}
@keyframes waving {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  84% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.skills__container {
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 500px;
}
.cube {
  width: inherit;
  height: inherit;
  transform-style: preserve-3d;
}
.side {
  position: absolute;
  width: inherit;
  height: inherit;
  // border: 2px solid #fff;
  color: #b2a57a;
  font-weight: bold;
  padding: 5px;
  backface-visibility: hidden;
  li {
    list-style: none;
  }
}
.front {
  li:nth-child(1) {
    font-size: 90px;
    line-height: 50px;
    letter-spacing: 10px;
  }
  li:nth-child(2) {
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 10px;
  }
  li:nth-child(3) {
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 2px;
  }
  li:nth-child(4) {
    font-size: 40px;
    line-height: 30px;
    letter-spacing: 2px;
  }
  li:nth-child(5) {
    font-size: 40px;
    line-height: 30px;
  }
}
.right {
  li:nth-child(1) {
    font-size: 30px;
    line-height: 20px;
    letter-spacing: 5px;
  }
  li:nth-child(2) {
    font-size: 60px;
    line-height: 47px;
    letter-spacing: 5px;
  }
  li:nth-child(3) {
    font-size: 35px;
    line-height: 30px;
    letter-spacing: 2px;
  }
  li:nth-child(4) {
    font-size: 33px;
    line-height: 30px;
    letter-spacing: 2px;
  }
  li:nth-child(6) {
    font-size: 40px;
    line-height: 25px;
  }
}
.top {
  li:nth-child(1) {
    font-size: 40px;
    line-height: 30px;
    letter-spacing: 2.1px;
  }
  li:nth-child(2) {
    font-size: 60px;
    line-height: 50px;
    letter-spacing: 10px;
  }
  li:nth-child(3) {
    font-size: 20px;
    line-height: 20px;
  }
  li:nth-child(4) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  li:nth-child(5) {
    font-size: 37px;
    line-height: 35px;
  }
}
.bottom {
  li:nth-child(1) {
    font-size: 40px;
    line-height: 30px;
    letter-spacing: 2.1px;
  }
  li:nth-child(2) {
    font-size: 60px;
    line-height: 50px;
    letter-spacing: 10px;
  }
  li:nth-child(3) {
    font-size: 20px;
    line-height: 20px;
  }
  li:nth-child(4) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  li:nth-child(5) {
    font-size: 37px;
    line-height: 35px;
  }
}
.back {
  li:nth-child(1) {
    font-size: 40px;
    line-height: 30px;
    letter-spacing: 2.1px;
  }
  li:nth-child(2) {
    font-size: 60px;
    line-height: 50px;
    letter-spacing: 10px;
  }
  li:nth-child(3) {
    font-size: 20px;
    line-height: 20px;
  }
  li:nth-child(4) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }
  li:nth-child(5) {
    font-size: 37px;
    line-height: 35px;
  }
}
.left {
  li:nth-child(1) {
    font-size: 22px;
    line-height: 22px;
    // letter-spacing: 3px;
  }
  li:nth-child(2) {
    font-size: 40px;
    line-height: 35px;
  }
  li:nth-child(3) {
    font-size: 35px;
    line-height: 30px;
  }
  li:nth-child(4) {
    font-size: 65px;
    line-height: 50px;
  }
}
.front {
  transform: translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
@media screen and (max-width: 1000px) {
  .skills__edu {
    font-size: 1.5em;
    font-weight: bold;
    img {
      width: 30px;
      transform-origin: left center;
      animation: waving 1s ease-in-out 2s 1;
    }
    span {
      color: #b2a57a;
    }
  }
}
</style>
