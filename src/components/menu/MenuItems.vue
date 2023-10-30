<template>
  <section class="px-32 mb-16">
    <div v-if="meals" class="grid grid-cols-5 w-full gap-3">
      <div
        v-for="(meal, index) in getPaginatedItem"
        :key="index"
        class="rounded"
      > 
      <!-- menu showcase -->
        <menu-card :meal="meal" :index="index" @detail-route="detailRoute"></menu-card>
      
      </div>
    </div>

    <err-box v-else :loading="loading" :err="errMsg">
      <template v-slot:welcome> Welcome bro,You didn't search anything 😁</template>
      <template v-slot:errMsg>{{ errMsg }}</template>
    </err-box>
   

    <!-- paginator  -->
    <Pagination :meals="meals" :item-per-page="itemPerPage" :curr-page="currPage"  @prev-paginate="prevPaginate" @next-paginate="nextPaginate "></Pagination>
   
  </section>
</template>

<script>
import Pagination from '../Pagination.vue';
import MenuCard from './MenuCard.vue';
import ErrBox from '../ErrBox.vue';
export default {
    components:{ MenuCard, Pagination,ErrBox },
  props: ["meals",'errMsg','loading'],
  data() {
    return {
      itemPerPage: 10,
      currPage: 1,
      key : 'current-page'
    };
  },
  created(){
    this.currPage = JSON.parse(localStorage.getItem(this.key)) || 1;
  },
  computed: {
    getPaginatedItem() {
      const start = (this.currPage - 1) * this.itemPerPage;
      const end = this.currPage * this.itemPerPage;
      return this.meals.slice(start, end);
    },
    
  },
  methods: {
    detailRoute(id) {
      this.$router.push(`/menu/${id}`);
    },

    nextPaginate() {
      if (this.currPage != this.numOfPage) this.currPage++;
    },
    prevPaginate() {
      if (this.currPage > 1) this.currPage--;
    },
   
  },
  beforeUnmount(){
    localStorage.setItem(this.key,JSON.parse(this.currPage))
  }
};
</script>
