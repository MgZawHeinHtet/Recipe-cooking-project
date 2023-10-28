<template>
  <div>
    <router-view></router-view>
    <!-- menu hero section  -->
    <section class="px-32 my-16">
      <div
        class="rounded-lg w-full h-96 bg-[url('../assets/menu_page/menu_bg.jpg')] bg-cover bg-no-repeat bg-bottom flex justify-center items-center"
      >
        <div>
          <h2
            class="text-center antialiased font-sans text-4xl font-bold capitalize text-slate-50 tracking-wide mb-10 shadow-lg"
          >Let's cook delicious food.</h2>
          <form action class="w-[700px] h-14 p-1 bg-slate-50 rounded-lg flex gap-1">
            <div class="col-span-2 flex grow gap-1">
              <img class="w-10 h-10" src="../assets/menu_page/burger.png" alt />
              <input
                v-model="searchText"
                type="text"
                placeholder="search more than 100"
                class="rounded-lg p-2 w-full bg-slate-100 placeholder-grey-500 h-full focus:ring-green-500 focus:ring-2 focus-visible:outline-none"
              />
            </div>

            <select
              @change="filterByCategory(selectedCategory)"
              v-model="selectedCategory"
              class="p-2 bg-slate-100 text-gray-500 rounded-lg focus:ring-green-500 focus:ring-2 focus-visible:outline-none"
              name
              id
            >
              <option disabled value>Please select one</option>

              <option
                v-for="(categorie,index) in categories"
                :value="categorie.strCategory"
                :key="index"
              >{{ categorie.strCategory }}</option>
            </select>
            <div>
              <button
                @click.prevent="find(searchText)"
                class="h-full w-16 text-slate-50 bg-green-500"
              >Search</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- menu card section  -->
    <section class="px-32 mb-16">
      <div v-if="meals" class="grid grid-cols-5 w-full gap-3">
        <div v-for="(meal,index) in getPaginatedItem" :key="index" class="rounded">
          <div class="menu_card rounded space-y-3">
            <div
              class="menu_img h-64 w-full bg-[url('../assets/nav_logo.png')] bg-center bg-contain bg-no-repeat rounded-lg"
            >
              <img
                @load="showImg(index)"
                :ref="index"
                :data-img="meal.strMealThumb"
                class="object-cover h-full rounded filter blur-sm contrast-200"
               src="../assets/nav_logo.png"
                alt
              />
            </div>
            <div class="menu_content space-y-3">
              <p class="text-green-600 text-sm font-bold tracking-wider">{{ meal.strMeal }}</p>
              <p
                class="line-clamp-2 text-slate-800 font-semibold text-normal/5"
              >{{ meal.strInstructions || "Pls click detail to get more information and you will get the following" }}</p>
              <div class="flex justify-between items-center">
                <span class="flex gap-2">
                  <h6>{{ meal.strCategory || this.selectedCategory }}</h6>
                </span>
                <span>
                 
                  <a @click.prevent="detailRoute(meal.idMeal)">
                    <i class="fa-solid fa-eye"></i> Detail
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="w-full h-40 rounded-lg flex justify-center items-center">
        <p v-if="loading">
          <i class="fa-solid fa-spinner animate-spin text-5xl"></i>
        </p>
        <p
          v-else-if="errMsg"
          class="text-orange-700 uppercase text-base font-semibold tracking-wider"
        >💥{{errMsg}}</p>
        <p
          v-else
          class="text-slate-700 uppercase text-xl font-semibold tracking-wider"
        >Welcome bro,You didn't search anything 😁</p>
      </div>

      <div v-if="meals" class="flex justify-center items-center my-10 space-x-8">
        <button class v-show="(currPage>1)" @click.prevent="prevPaginate">
          <i class="fa-solid fa-chevron-left text-3xl text-green-500 font-bold"></i>
        </button>
        <div class="text-xl font-normal text-slate-500">{{ currPage }} / {{ numOfPage }}</div>
        <button class v-show="(currPage!=numOfPage)" @click.prevent="nextPaginate">
          <i class="fa-solid fa-chevron-right text-3xl text-green-500 font-bold"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  watch: {
    searchText(n, o) {
      if (!n.length) {
        this.selectedCategory = "";
        this.meals = null;
        this.errMsg = null;
      }
      if (o === "") {
        this.selectedCategory = "";
        
      }
    }
  },
  data() {
    return {
      searchText: "",
      categories: null,
      meals: null,
      selectedCategory: "",
      preMeals: null,
      errMsg: null,
      loading: false,
      imgLoading: false,
      itemPerPage: 10,
      currPage: 1,
    };
  },
  computed: {
    getPaginatedItem() {
      const start = (this.currPage - 1) * this.itemPerPage;
      const end = this.currPage * this.itemPerPage;
      return this.meals.slice(start, end);
    },
    numOfPage() {
      return Math.ceil(this.meals.length / this.itemPerPage);
    },
    
  },
  created() {
    this.getCategoriesForOption();
  },
  methods: {
    detailRoute(id){
      this.$router.push(`/menu/${id}`)
    },
    timeOut(second) {
      return new Promise(function(_, reject) {
        setTimeout(function() {
          reject(new Error(`Request took too long,Timeout after ${second}`));
        }, second * 1000);
      });
    },
    nextPaginate() {
      if (this.currPage != this.numOfPage) this.currPage++;
     
    },
    prevPaginate() {
      if (this.currPage > 1) this.currPage--;
   
    },
    showImg(index) {
      const img = this.$refs[index];
      if (img[0]) {
        const realImg = img[0].getAttribute("data-img");
        img[0].src = realImg;
        img[0].classList.add('filter-none')
      }
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
      this.currPage = 1
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
          meal => meal.strCategory === this.selectedCategory
        );
        this.meals = item;
      }
    }
  }
};
</script>


