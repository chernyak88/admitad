<template>
  <div class="mainpage">
    <div class="img-wrap">
      <img :src="this.$store.state.currentUrl" alt="Динамическая картинка">
      <img id="preloader" src="../assets/preloader.gif" alt="preloader">
    </div>
    <button @click="nextImage">Загрузить</button>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  mounted() {
    const preloader = document.querySelector('#preloader')
    preloader.style.display = 'none'
  },
  methods: {
    nextImage() {
      this.$store.dispatch('nextImage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainpage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-wrap {
    position: relative;
    width: 450px;
    height: 250px;
    margin-bottom: 40px;
  }
  .img-wrap img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .img-wrap img#preloader {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }
  button {
    font-size: 16px;
    width: 168px;
    height: 36px;
    background: #006896;
    color: #fff;
    cursor: pointer;
    border: none;
  }
    button:hover {
    opacity: .8;
  }
@media screen and (max-width: 768px) {
  .mainpage, .img-wrap {
    width: 100%;
  }
  .img-wrap {
    max-height: 300px;
  }
}
</style>
