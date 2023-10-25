<template>
  <div>
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
                class="p-2 w-full bg-slate-100 placeholder-grey-500 h-full col-span-1"
              />
            </div>

            <select @change="filterByCategory()" v-model="selectedCategory" class="p-2 bg-slate-100 text-gray-500" name id>
            <option disabled value="">Please select one</option>
              <option  v-for="(categorie,index) in categories" :value="categorie.strCategory" :key="index">{{ categorie.strCategory }}</option>
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

    <section class="px-32 mb-16">
      <div class="grid grid-cols-5 w-full gap-3">
        <div v-for="(meal,index) in meals" :key="index" class="rounded">
          <div class="menu_card rounded space-y-3">
            <div class="menu_img h-64 w-full bg-green-600 rounded-lg">
              <img class="object-cover h-full rounded" :src="meal.strMealThumb" alt />
            </div>
            <div class="menu_content space-y-3">
              <p class="text-green-400 text-sm font-bold">{{ meal.strMeal }}</p>
              <p
                class="line-clamp-2 text-slate-800 font-semibold text-normal/5"
              >{{ meal.strInstructions }}</p>
              <div class="flex justify-between items-center">
                <span class="flex gap-2">
                  <h6>{{ meal.strCategory }}</h6>
                </span>
                <span>
                  <a href class="text-lg">
                    <i class="fa-solid fa-eye"></i> Detail
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      categories : null,
      meals: null,
      selectedCategory : null,
      preMeals : null
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    async find(input) {
     this.meals = [];
      this.selectedCategory = null;
      const iToArr = input.split("");
      const detectInput = iToArr.length > 1 ? `s=${input}` : `f=${input}`;
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?${detectInput}`
      );
      const foods = await response.json();
      const { meals } = foods;

      this.meals = meals;
      this.searchText = ''
    },
    async getCategories() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );
      const lists = await response.json();
      const {meals} = lists;
      
      this.categories = meals;
      
    },
    filterByCategory(){
        if(this.preMeals){
            this.meals = this.preMeals;
            this.preMeals = null
        }

        if(this.selectedCategory){
            this.preMeals = this.meals;
            const item = this.meals.filter((meal) => meal.strCategory === this.selectedCategory);
            this.meals = item
        }

    }
  }
};
</script>