<template>
  <div class="main">
    <Sidebar link = 'Главная' mainpage = true />
    <MainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    MainPage
  }
}
</script>
