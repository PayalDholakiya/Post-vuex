<template>
  <div v-if="detail" class="flex flex-wrap md:flex sm:flex mx-32">
    <div class="bg-gray-100 md:w-2/3 ">
      <h1 class="mb-6 text-2xl font-bold">
        {{ detail.title }}
      </h1>
      <div>
        <a
          v-for="(tag, index) in detail.tags"
          class="p-1 m-1 font-bold bg-gray-100 border rounded shadow-xl cursor-pointer hover:shadow-2xl"
          >#{{ tag }}</a
        >
      </div>
      <img :src="detail.cover_image" class="block mt-3 rounded" />
      <div class="flex flex-row justify-between my-4 p-3">
        <div class="flex flex-row justify-between ">
          <img src="../assets/like.png" class="h-6" /><span class="ml-1 mr-2">{{
            detail.positive_reactions_count
          }}</span>
          <img src="../assets/comments.png" class="h-5 mr-1" />
          <span>{{ detail.comments_count }}</span>
        </div>
        <p>{{ detail.readable_publish_date }}</p>
      </div>
      <div v-html="detail.body_html"></div>
    </div>
    <div
      v-if="data"
      class="mr-10 rounded-lg md:fixed bg-blue-50 left-2/3 md:w-1/3 mt-10"
    >
      <div class="flex ml-2 md:relative">
        <a>
          <img :src="data.profile_image" class="h-20 mb-2 rounded-full " />
        </a>
        <div class="flex flex-col mt-2 ml-6 font-semibold">
          <a
            ><span class="uppercase hover:text-blue-500">{{
              data.username
            }}</span></a
          >
          <a
            ><span class="text-gray-400">@{{ data.username }}</span></a
          >
        </div>
      </div>
      <button
        v-model="data.id"
        @click="profile()"
        style="box-shadow:  4px 4px 8px #ced2db;"
        class="block h-10 mx-4 font-semibold text-center uppercase rounded-lg w-80 "
      >
        SEE PROFILE
      </button>
      <div class="block px-6 ">
        <div class="block pb-2 text-left">
          <div class="text-gray-500 ">About</div>
          <div class="font-semibold">{{ data.summary }}.</div>
        </div>
        <div class="block pb-2 text-left">
          <div class="text-gray-500 ">Location</div>
          <div class="font-semibold ">{{ data.location }}</div>
        </div>
        <div class="block text-left">
          <div class="text-gray-500 ">joined</div>
          <div class="font-semibold">{{ data.joined_at }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Index from './Index'
import axios from 'axios'
export default {
  components: {
    Index,
  },
  data() {
    return {
      detail: null,
      data: null,
    }
  },
  created() {
    axios
      .get(`https://dev.to/api/articles/${this.$route.params.id}`)
      .then((response) => {
        this.detail = response.data
        console.log(response.data)
      })
      .then(() => {
        axios
          .get(
            `https://dev.to/api/users/by_username?url=${this.detail.user.username}`
          )
          .then((res) => {
            this.data = res.data
            // console.log(this.data)
          })
      })
  },
  methods: {
    profile() {
      this.$router.push(`/profile/${this.data.id}/${this.data.username}`)
    },
  },
}
</script>
