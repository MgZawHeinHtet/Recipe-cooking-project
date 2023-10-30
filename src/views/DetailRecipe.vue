<template>
  <div>
    <!-- showing recipe detail  -->
    <section class="px-32 my-16">
      <div class="grid grid-cols-2 items-center">
        <div class="detail_img w-[80%]">
          <iframe
            class="rounded-xl h-[100vh] object-contain"
            width="100%"
            :src="youtube"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>

        <div class="detail_content  space-y-10">
          <!-- content title  -->
          <div class="flex justify-between items-center">
            <div class="">

            <h2
              class="antialiased font-sans text-2xl font-bold uppercase text-slate-800 tracking-wide mb-3"
            >{{ title }}</h2>
            <span class="uppercase text-slate-700 tracking-wide">
              <i class="fa-regular fa-clock"></i>
              {{ date || '??' }} minutes
            </span>
            <span class="uppercase ms-5 text-slate-700 tracking-wide">
              <i class="fa-solid fa-border-none"></i>
              {{ filterIngNull.length }} ingredients
            </span>
            </div>
            <div>
              <button class="w-20 h-20"><i class="fa-regular fa-bookmark fa-2x"></i></button>
            </div>
          </div>

          <!-- <div class="col-span-1 h-40 w-[50%]">
            <img
              class="w-full h-full object-cover rounded-lg ring-2 ring-green-500 mb-2"
              :src="img"
              alt
            />
          </div> -->

          <div>
            <h2 class="antialiased font-sans text-xl font-bold text-slate-800 tracking-wide mb-5">
              Ingredients
              <span class="text-slate-400 font-normal">| Steps</span>
            </h2>
            <div class="ingredient grid grid-cols-2 w-full gap-x-32 space-y-2">
              <div
                v-for="(ing,index) in filterIngNull"
                :key="index"
                class="flex justify-between text-lg font-normal tracking-wide"
              >
                <p>{{ ing }}</p>
                <span>{{ filterRatioNull[index] }}</span>
              </div>
            </div>
          </div>

          <div>
            <p
              class="text-lg/8 tracking-wide text-slate-700"
              :class="{'line-clamp-6':isCompressed}"
            >{{ content }}</p>
            <button
              @click="isCompressed=!isCompressed"
              class="text-green-500"
            >{{ isCompressed ? 'See More' : 'Less More' }}</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      ingredients: [],
      ratio: [],
      data: null,
      isCompressed: true,
      youtube: "",
      title: "",
      content: "",
      img: "",
      date: ""
    };
  },
  created() {
    this.getDataFromApi();
  },
  computed: {
    filterIngNull() {
      return this.ingredients.filter(ing => ing != null || ing != "");
    },
    filterRatioNull() {
      return this.ratio.filter(r => r != null || r != "");
    }
  },
  methods: {
    async getDataFromApi() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
      );
      const recipe = await response.json();
      const { meals } = recipe;
      const meal = meals[0];
      this.title = meal.strMeal;
      this.content = meal.strInstructions;
      this.img = meal.strMealThumb;
      this.date = meal.dateModified;

      this.youtube = `https://www.youtube.com/embed/${
        meal.strYoutube.split("=")[1]
      }`;
      for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const ratio = meal[`strMeasure${i}`];
        this.ingredients.push(ing);
        this.ratio.push(ratio);
      }
    }
  }
};
</script>