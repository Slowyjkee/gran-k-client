<template>
  <div class="home" :style="{ backgroundImage: 'url(' + require('../assets/grass-on-golf-backgrounds.jpg') + ')' }">
    <div class="overlay" />
    <div class="content__section">
      <div class="header">
        <h1>Organic Food</h1>
        <p>GreenDay provides local citizens and guests of our town with quality organic fruits, vegetables, and other products.</p>
        <md-button class="md-raised md-primary">Подробнее</md-button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    background-repeat: repeat;
    background-size: cover;
    z-index: 9;
    background-position: center;
    position: relative;
    .overlay {
      z-index: 10;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      top: 0;
      position: absolute;
      background-color: #000000;
    }
    .content__section {
      display: flex;
      align-items: center;
      justify-content: center;
      .header {
        display: flex;
        flex-direction: column;
        margin-left: 20vh;
        z-index: 10;
        p, h1 {
          text-align: left;
          color:#ffffff;
          z-index: 1000 ;
        }
        .md-button {
          margin: 0;
          width: 100px;
          color:#ffffff;
        }
      }
    }
  }
</style>
