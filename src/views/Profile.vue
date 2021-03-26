<template>
  <div class="mx-28">
    <div
      class="flex items-center justify-center flex-wrap bg-blue-50 rounded-lg p-8 m-2"
    >
      <!-- <div class="p-10 rounded-lg md:flex sm:flex-row bg-blue-50 "> -->
      <div class="flex items-center"></div>
      <img class="flex rounded-full  sm:h-32" :src="data.profile_image" />

      <div class="flex flex-col w-1/2 mt-2 font-semibold  ">
        <h1>
          <span class="text-2xl text-center uppercase">
            {{ data.name }}
          </span>
        </h1>
        <button
          style="box-shadow:4px 4px 8px #ced2db;"
          class="block h-10  mt-10 font-semibold text-center uppercase rounded-lg"
        >
          FOLLOW
        </button>
        <p class="pt-10 text-2xl font-normal">{{ data.summary }}</p>
      </div>
      <div class="block p-6">
        <div class="block pb-2 text-left">
          <div class="text-gray-500 ">Location</div>
          <div class="text-xl font-semibold ">{{ data.location }}</div>
        </div>
        <div class="block text-left">
          <div class="text-gray-500 ">joined</div>
          <div class="text-xl font-semibold">{{ data.joined_at }}</div>
        </div>
      </div>
    </div>

    <div
      v-for="data in user"
      class=" rounded-lg shadow-2xl cursor-pointer hover:shadow-xl  mt-10 w-143 "
    >
      <img alt="image" :src="data.cover_image" class="w-full h-40 rounded-lg" />
      <div class="p-6">
        <a
          ><h1 class="mb-6 text-2xl font-bold hover:text-blue-500">
            {{ data.title }}
          </h1></a
        >
        <div class="flex flex-wrap ">
          <a
            v-for="(tag, index) in data.tag_list"
            class="p-1 m-1 font-bold bg-gray-100 border rounded shadow-xl hover:shadow-2xl"
            >#{{ tag }}</a
          >
        </div>
        <div class="flex flex-row justify-between mt-6">
          <div class="flex flex-row justify-between ">
            <img src="../assets/like.png" class="h-6" /><span
              class="ml-1 mr-2"
              >{{ data.positive_reactions_count }}</span
            >
            <img src="../assets/comments.png" class="h-5 mr-1" />
            <span>{{ data.comments_count }}</span>
          </div>
          <p>{{ data.readable_publish_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import CardDetail from '../components/CardDetail'
export default {
  components: {
    CardDetail,
  },
  data() {
    return {
      user: null,
      data: null,
    }
  },
  created() {
    axios
      .get(`https://dev.to/api/articles?username=${this.$route.params.user}`)
      .then((res) => {
        this.user = res.data
        console.log(res.data)
      })
      .then(() => {
        axios
          .get(
            `https://dev.to/api/users/by_username?url=${this.$route.params.user}`
          )
          .then((res) => {
            this.data = res.data
            console.log(res.data)
          })
      })
  },
}
</script>
