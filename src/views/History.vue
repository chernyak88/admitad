<template>
  <div class="main">
    <Sidebar link = 'История' />
    <HistoryPage />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import HistoryPage from '@/components/HistoryPage.vue'

export default {
  name: 'History',
  components: {
    Sidebar,
    HistoryPage
  }
}
</script>
