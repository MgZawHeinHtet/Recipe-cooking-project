<template>
  <div>
    <!-- menu hero section  -->
    <section class="px-32 my-16">
      <div
        class="rounded-lg w-full h-96 bg-[url('../assets/menu_page/menu_bg.jpg')] bg-cover bg-no-repeat bg-bottom flex justify-center items-center"
      >
        <div>
          <h2
            class="text-center antialiased font-sans text-4xl font-bold capitalize text-slate-50 tracking-wide mb-10 shadow-lg"
          >
            Let's cook delicious food.
          </h2>
          <!-- search input and filter category  -->
          <form
            action
            class="w-[700px] h-14 p-1 bg-slate-50 rounded-lg flex gap-1"
          >
            <div class="col-span-2 flex grow gap-1">
              <img class="w-10 h-10" src="../assets/menu_page/burger.png" alt />
              <!-- search  -->
              <input
                v-model="searchText"
                type="text"
                placeholder="search more than 100"
                class="rounded-lg p-2 w-full bg-slate-100 placeholder-grey-500 h-full focus:ring-green-500 focus:ring-2 focus-visible:outline-none"
              />
            </div>

            <!-- filter  -->
            <select
              @change="filterByCategory(selectedCategory)"
              v-model="selectedCategory"
              class="p-2 bg-slate-100 text-gray-500 rounded-lg focus:ring-green-500 focus:ring-2 focus-visible:outline-none"
              name
              id
            >
              <option disabled value>Please select one</option>

              <option
                v-for="(categorie, index) in categories"
                :value="categorie.strCategory"
                :key="index"
              >
                {{ categorie.strCategory }}
              </option>
            </select>
            <div>
              <button
                @click.prevent="find(searchText)"
                class="h-full w-16 text-slate-50 bg-green-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- menu-card-section paginat and show error and item  -->
    <menu-items
      :meals="meals"
      :err-msg="errMsg"
      :loading="loading"
    ></menu-items>
  </div>
</template>

<script>
import MenuItems from "../components/menu/MenuItems.vue";
export default {
  components: { MenuItems },
  data() {
    return {
      searchText: "",
      categories: null,
      meals: null,
      selectedCategory: "",
      preMeals: null,
      errMsg: null,
      loading: false,
      key : 'history'
    };
  },
  watch: {
    searchText(n, o) {
      if (!n.length) {
        this.selectedCategory = "";
        this.meals = null;
        this.errMsg = null;
      }
      
    },
  },

  created() {
    this.getCategoriesForOption();
    this.memorizeData()
  },
  methods: {
    memorizeData(){
      const memoData =  JSON.parse(localStorage.getItem(this.key))
      console.log(memoData)
      if(!memoData)return;
      this.meals = memoData['meals']
      this.selectedCategory = memoData['category']
      this.searchText = memoData['search']
      localStorage.removeItem(this.key)
      
    },

    timeOut(second) {
      return new Promise(function (_, reject) {
        setTimeout(function () {
          reject(new Error(`Request took too long,Timeout after ${second}`));
        }, second * 1000);
      });
    },

    async find(input) {
      if (!input) {
        this.meals = null;
        return;
      }
      this.findBySearch(input);
    },

    async findBySearch(nameInput) {
      try {
        this.loading = true;
        this.meals = null;
        this.selectedCategory = "";

        const inputLength = nameInput.length;
        // detect input data length is one or more
        const detectInput =
          inputLength > 1 ? `s=${nameInput}` : `f=${nameInput}`;
        const data = fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?${detectInput}`
        );
        const response = await Promise.race([data, this.timeOut(10)]);
        const foods = await response.json();
        const { meals } = foods;
        //throw error meals is null
        if (!meals) {
          this.meals = null;
          this.errMsg = `There is no item with ${nameInput}`;
        }
        this.meals = meals;
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    },

    async findByCategory(catName) {
      // get data through category
      this.loading = true;
      this.meals = null;
      this.loading = true;
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`
      );
      this.loading = false;
      const foods = await response.json();
      const { meals } = foods;
      this.meals = meals;
      this.loading = false;
    },

    async getCategoriesForOption() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );
      const lists = await response.json();
      const { meals } = lists;

      this.categories = meals;
    },

    filterByCategory(input) {
      this.currPage = 1;
      //1 there is no input in form
      if (!this.searchText) {
        this.findByCategory(input);
        this.preMeals = null;
      }

      //2 aleady have data and to get data before filter
      if (this.preMeals) {
        this.meals = this.preMeals;
        this.preMeals = null;
      }

      //3 this condtion is already have data and filter
      if (this.selectedCategory && this.searchText && this.meals) {
        this.preMeals = this.meals;
        const item = this.meals.filter(
          (meal) => meal.strCategory === this.selectedCategory
        );
        
        this.meals = item;
      }
    },
  },
  beforeUnmount(){
    const items = {'meals':this.meals,'category':this.selectedCategory,'search':this.searchText}
    localStorage.setItem(this.key,JSON.stringify(items))
  }
};
</script>
