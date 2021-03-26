<template>
  <div
    class="rounded-lg shadow-2xl cursor-pointer hover:shadow-xl"
    @click="openViewDetails"
    :cardData="cardData"
  >
    <img
      alt="image"
      :src="cardData.cover_image"
      class="w-full h-40 rounded-lg"
    />
    <div class="p-6">
      <a
        ><h1 class="mb-6 text-2xl font-bold hover:text-blue-500">
          {{ cardData.title }}
        </h1></a
      >
      <div class="flex flex-wrap ">
        <a
          v-for="(tag, index) in cardData.tag_list"
          class="p-1 m-1 font-bold bg-gray-100 border rounded shadow-xl hover:shadow-2xl"
          >#{{ tag }}</a
        >
      </div>
      <div class="flex flex-row justify-between mt-6">
        <div class="flex flex-row justify-between ">
          <img src="../assets/like.png" class="h-6" /><span class="ml-1 mr-2">{{
            cardData.positive_reactions_count
          }}</span>
          <img src="../assets/comments.png" class="h-5 mr-1" />
          <span>{{ cardData.comments_count }}</span>
        </div>
        <p>{{ cardData.readable_publish_date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardDetail',
  props: {
    cardData: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  methods: {
    openViewDetails() {
      this.$router.push(`/detail/${this.cardData.id}`)
    },
  },
}
</script>
