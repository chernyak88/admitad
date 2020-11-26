<template>
  <div class="sidebar">
    <router-link to="/" v-if="!mainpage"><span class="arrow"></span></router-link>
    <span>{{ link }}</span>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['link', 'mainpage']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar {
    width: 20%;
  }
  .arrow {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-image: url('../assets/left-arrow.svg');
    margin-right: 15px;
  }
  .arrow:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 768px) {
    .sidebar {
      display: flex;
      margin-bottom: 20px;
    }
  }
</style>
