<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="info">
          <span v-show="commandAnswer">
            <font-awesome-icon class="icon" icon="chevron-right"/>{{commandAnswer}}
            <p>{{answer}}</p>
          </span>
        </div>
        <div class="input">
          <input type="text" v-model="command" @keyup.enter="submit">
          <div class="input__icon">
            <font-awesome-icon class="icon" icon="chevron-right"/>
            <span class="input__data">
              <span class="underscore" v-show="!infoText && !command">_</span>
              <span class="input__text" v-show="infoText">навигация по сайту через команды (контакты, ...)</span>
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
      answer: ""
    }
  },
  methods: {
    submit() {
      this.commandAnswer = this.command;
    }
  },
  mounted() {
    setTimeout(()=>{this.infoText = false},15000);
  }
}
</script>
<style lang="scss">
  footer{
    flex-basis: 100px;
  }
  .container{
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
  .footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .info{
    flex: 1 1 auto;
    overflow: hidden;
    font-size: 1em;
    font-family: monospace;
    .icon{
      margin-right: 2px;
    }
  }
  .input{
    width: 100%;
    height: 35px;
    position: relative;
    input{
      font-family: monospace;
      width: 100%;
      font-size: 1.1em;
      background-color: transparent;
      padding-left: 14px;
      color: #fefefe;
      border: none;
      &:focus + .input__icon>.input__data{
        display: none;
      }
    }
    .input__icon{
      display: flex;
      position: absolute;
      top: 2px;
    }
    .input__text{
      display: inline-block;
      width: 48ch;
      color: rgba(247, 247, 247, 0.8);
      font-size: 1.1em;
      overflow: hidden;
      margin-left: 5px;
      font-family: monospace;
      white-space: nowrap;
      border-right: 2px solid #fefefe;
      animation: printedText 10s steps(48), flashingBorder .75s step-end infinite;
    }
  }
  .underscore{
    font-weight: bold;
    margin-left: 2px;
    animation: flashing .75s step-end infinite;
  }
  @keyframes flashing{
    0% {color: #fefefe;}
    50% {color: transparent;}
    100% {color: #fefefe;}
  }
  @keyframes flashingBorder{
    0% {border-color: #fefefe;}
    50% {border-color: transparent;}
    100% {border-color: #fefefe;}
  }
  @keyframes printedText{
    from {width: 0%;}
  }
</style>