<template>
  <section class="main">
    <div class="main__inf">
      Привет <img src="../../assets/hello.png" />, я Аскар, фронтенд
      разработчик. Работал программистом <span>(fullstack)</span> в Казахском
      университете экономики, финансов и международной торговли. Участвовал в
      разработке АИС “euniversity”. В данный момент работаю в АО “Транстелеком”
      в должности <span>эксперта</span>. Увлекаюсь графическим, веб дизайном.
    </div>
    <div class="main__img">
      <img src="../../assets/i.jpg" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  & > div {
    width: 50%;
  }
}
.main__inf {
  font-size: 1.8em;
  font-weight: bold;
  img {
    width: 30px;
    transform-origin: center bottom;
    animation: waving 1s linear 2s 2;
  }
  img:hover {
    animation: waving 1s ease-in-out 2s 3;
  }
  span {
    color: #b2a57a;
  }
}
.main__img {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
}
@keyframes waving {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media screen and (max-width: 700px) {
  .main {
    flex-direction: column-reverse;
    height: auto;
    & > div {
      width: 100%;
    }
  }
  .main__img {
    height: 40vh;
  }
  .main__inf {
    text-align: center;
  }
}
</style>
