<template>
    <!-- paginator button  -->
  <div v-if="meals" class="flex justify-center items-center my-10 space-x-8">
    <button class v-show="currPage > 1" @click.prevent="$emit('prevPaginate')">
      <i class="fa-solid fa-chevron-left text-3xl text-green-500 font-bold"></i>
    </button>
    <div class="text-xl font-normal text-slate-500">
      {{ currPage }} / {{ numOfPage }}
    </div>
    <button
      class
      v-show="currPage != numOfPage"
      @click.prevent="$emit('nextPaginate')"
    >
      <i
        class="fa-solid fa-chevron-right text-3xl text-green-500 font-bold"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["meals", "currPage","itemPerPage"],
  computed: {
    numOfPage() {
      return Math.ceil(this.meals.length / this.itemPerPage);
    },
  },
};
</script>
