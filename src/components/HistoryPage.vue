<template>
  <div class="historypage">
    <ul>
      <li v-for="(item, index) in paginatedData" :key="item.url">
        <div class="img-wrap">
          <img :src="item.url" alt="Динамическая картинка">
          <span class="img-delete" @click="deleteImage(index)"></span>
        </div>
        <div class="img-desc">
          <div class="img-title" v-if="item.title && item.title !== ' '">{{ item.title }}</div>
          <div class="img-title" v-else>Без названия</div>
          <div class="img-time">{{ new Date(item.date) | formatDate }}</div>
        </div>
      </li>
    </ul>
      <button @click="prevPage" :disabled="pageNumber == 0">
        назад
      </button>
      <button @click="nextPage" :disabled="pageNumber >= pageCount -1">
        вперед
      </button>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
  data() {
    return {
      pageNumber: 0,
      listData: this.$store.state.history,
      size: 5
    }
  },
  filters: {
    formatDate: date => {
      const d = date.toLocaleString().replace(',', '').replaceAll('.', '-').split('')
      const formatDate = d[6] + d[7] + d[8] + d[9] + d[5] + d[3] + 
                         d[4] + d[2] + d[0] + d[1] + d[10]  + d[11] + 
                         d[12] + d[13] + d[14] + d[15] + d[16] + d[17] + d[18]
      return formatDate
    }
  },
  methods: {
    deleteImage(index) {
      this.$store.commit('deleteImage', index)
    },
    nextPage(){
      this.pageNumber++
    },
    prevPage(){
      this.pageNumber--
    }
  },
  computed: {
    pageCount(){
      let l = this.listData.length
      let s = this.size
      return Math.ceil(l/s)
    },
    paginatedData(){
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.listData.slice(start, end)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li {
    display: flex;
    margin-bottom: 30px;
    font-size: 22px;
  }
  .img-wrap {
    position: relative;
    width: 169px;
    height: 88px;
    margin-right: 25px;
  }
  .img-wrap img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .img-delete {
    position: absolute;
    right: -20px;
    bottom: 2px;
    width: 14px;
    height: 18px;
    background-image: url('../assets/delete.svg');
    background-repeat: no-repeat;
    margin-right: 25px;
    cursor: pointer;
  }
  .img-delete:hover {
    transform: scale(1.3);
  }
  .img-title {
    font-weight: bold;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }
  button:not([disabled]):hover {
    opacity: .6;
  }
  button:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    ul li {
      font-size: 16px;
    }
  }
</style>
