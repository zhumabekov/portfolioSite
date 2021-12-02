<template>
  <section class="contact">
    <div class="contact__section">
      <div class="contact__data">
        <div class="contact__title">Есть интересные предложения, пишите)</div>
        <div class="contact__info">
          <div>
            <i class="fas fa-map-marker-alt ml-5"></i
            ><span>г. Астана ул. Акмешит 9/1</span>
          </div>
          <div>
            <i class="fas fa-phone-alt"></i
            ><span
              ><a href="https://wa.me/+77761230405">+7 776 123 04 05</a></span
            >
          </div>
          <div>
            <i class="fas fa-envelope"></i
            ><span
              ><a href="mailto:askar.zhumabekovv@gmail.com"
                >askar.zhumabekovv@gmail.com</a
              ></span
            >
          </div>
        </div>
        <div class="contact__link">
          <a href="https://www.instagram.com/asqar_zhumabekov"
            ><i class="fab fa-instagram fa-2x"></i
          ></a>
          <a href="https://vk.me/askar.zhumabekov"
            ><i class="fab fa-vk fa-2x"></i
          ></a>
          <a href="https://telegram.me/zhumabekkov"
            ><i class="fab fa-telegram-plane fa-2x"></i
          ></a>
          <a href="https://github.com/zhumabekov"
            ><i class="fab fa-github fa-2x"></i
          ></a>
        </div>
      </div>
      <div class="contact__form"><img src="../../assets/1.jpg" /></div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
$textColor: #fefefd;
$hoverColor: #b2a57a;
.contact {
  width: 100%;
  height: 100%;
  font-size: 1.3em;
  font-weight: bold;
}
.contact__title {
  height: 30%;
  display: flex;
  align-items: center;
  font-size: 1.8em;
}
.contact__section {
  display: flex;
  flex-direction: row;
  .contact__data,
  .contact__form {
    width: 50%;
  }
}
.contact__data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact__info {
  > div {
    margin-bottom: 10px;
  }
  i {
    margin-right: 10px;
  }
}
.contact__link {
  margin-top: 30px;
  a {
    cursor: pointer;
    color: $textColor;
    margin-right: 20px;
    &:hover {
      color: $hoverColor;
      transition: color 0.2s linear;
    }
  }
}
a {
  color: #fefefd;
  text-decoration: none;
}
.ml-5 {
  margin-left: 3px;
}
</style>
