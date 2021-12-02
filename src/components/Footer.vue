<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="info">
          <span v-show="commandAnswer">
            <i class="fas fa-chevron-right"></i>{{ commandAnswer }}
            <p>{{ answer }}</p>
          </span>
        </div>
        <div class="input">
          <input type="text" v-model="command" @keyup.enter="submit" />
          <div class="input__icon">
            <i class="fas fa-chevron-right"></i>
            <span class="input__data">
              <span class="underscore" v-show="!infoText && !command">_</span>
              <span class="input__text" v-show="infoText"
                >навигация по сайту через команды: контакты, ...</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      infoText: true,
      command: "",
      commandAnswer: "",
      answer: "",
    };
  },
  methods: {
    submit() {
      this.commandAnswer = this.command;
      switch (this.command) {
        case "clear":
          this.answer = "";
          this.commandAnswer = "";
          break;
      }
      this.command = "";
    },
  },
  mounted() {
    setTimeout(() => {
      this.infoText = false;
    }, 15000);
  },
};
</script>
<style lang="scss">
$textColor: #fefefd;
footer {
  flex-basis: 100px;
}
footer .container {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.info {
  flex: 1 1 auto;
  overflow: hidden;
  font-size: 0.8em;
  font-family: monospace;
  .fas {
    margin-right: 2px;
  }
}
.input {
  width: 100%;
  height: 35px;
  position: relative;
  input {
    display: block;
    font-family: monospace;
    width: 100%;
    font-size: 1.1em;
    background-color: transparent;
    padding-left: 14px;
    color: $textColor;
    border: none;
    &:focus + .input__icon > .input__data {
      display: none;
    }
  }
  .input__icon {
    display: flex;
    position: absolute;
    top: -1px;
  }
  .input__text {
    display: inline-block;
    width: 47ch;
    color: rgba(254, 254, 253, 0.8);
    font-size: 1.1em;
    overflow: hidden;
    margin-left: 5px;
    font-family: monospace;
    white-space: nowrap;
    border-right: 2px solid $textColor;
    animation: printedText 8s steps(47), flashingBorder 0.75s step-end infinite;
  }
}
.underscore {
  font-weight: bold;
  margin-left: 2px;
  animation: flashing 0.75s step-end infinite;
}
@keyframes flashing {
  0% {
    color: $textColor;
  }
  50% {
    color: transparent;
  }
  100% {
    color: $textColor;
  }
}
@keyframes flashingBorder {
  0% {
    border-color: $textColor;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: $textColor;
  }
}
@keyframes printedText {
  from {
    width: 0%;
  }
}
</style>
