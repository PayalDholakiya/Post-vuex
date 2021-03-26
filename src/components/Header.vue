<template>
  <div class="container flex flex-row justify-between py-12 mx-auto ">
    <div>
      <img
        alt="Vue logo"
        src="../assets/p.png"
        class="top-0 object-cover h-10"
      />
    </div>
    <div class="">
      <button
        @click="newPost"
        class="w-20 mr-4 font-bold bg-gray-100 border rounded shadow-xl "
      >
        New
      </button>
      <button
        class="w-20 font-bold bg-gray-100 border rounded shadow-xl hover:shadow-2xl"
      >
        Top
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    newPost() {
      this.$router.push('/')
    },
  },
}
</script>
