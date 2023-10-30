<template>
  <div class="menu_card rounded space-y-3">
    <div class="menu_img h-64 w-full rounded-lg">
      <img
        @load="showImg(index)"
        :ref="index"
        :data-img="meal.strMealThumb"
        class="object-cover h-full rounded filter blur-sm contrast-200"
        src="../../assets/nav_logo.png"
        alt
      />
    </div>
    <div class="menu_content space-y-3">
      <p class="text-green-600 text-sm font-bold tracking-wider">
        {{ meal.strMeal }}
      </p>
      <p class="line-clamp-2 text-slate-800 font-semibold text-normal/5">
        {{
          meal.strInstructions ||
          "Pls click detail to get more information and you will get the following"
        }}
      </p>
      <div class="flex justify-between items-center">
        <span class="flex gap-2">
          <h6>{{ meal.strCategory  }}</h6>
        </span>
        <span>
          <a class="cursor-pointer" @click.prevent="$emit('detailRoute',meal.idMeal)">
            <i class="fa-solid fa-eye"></i> Detail
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meal", "index"],
  methods: {
    showImg(index) {
      // get selected element

      const img = this.$refs[index];
      if (img) {
        const realImg = img.getAttribute("data-img");
        img.src = realImg;
        img.classList.add("filter-none");
      }
    },
  },
};
</script>
