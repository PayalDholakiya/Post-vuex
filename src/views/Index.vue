<template>
  <div class="grid grid-cols-1 gap-10 mx-10 xl:grid-cols-3 sm:grid-cols-2 ">
    <CardDetail
      v-if="detail <= details"
      v-for="(detail, index) in details"
      :cardData="detail"
    />
    <button class="w-20 h-10 bg-blue-200 border " @click="lazyLoadArticles">
      Load More
    </button>
  </div>
</template>
<script>
import axios from 'axios'
import CardDetail from '../components/CardDetail.vue'

export default {
  name: 'Index',
  components: {
    CardDetail,
  },
  data() {
    return {
      currentPage: 1,
      details: [],
    }
  },

  created() {
    this.display()
  },
  methods: {
    display() {
      axios
        .get(
          `https://dev.to/api/articles?tag=nuxt&state=rising&page=${this.currentPage}`
        )
        .then((response) => {
          this.details = this.details.concat(response.data)
        })
    },
    lazyLoadArticles() {
      if (this.currentPage < 5) {
        this.currentPage++
        this.display()
      }
    },
  },
}
</script>
