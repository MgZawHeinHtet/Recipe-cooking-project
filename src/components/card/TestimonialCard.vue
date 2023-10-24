<template>
          <div
          class="ring-1  ring-slate-100 overflow-hidden testimonial-card flex flex-col w-64 h-80 shadow-xl pb-2 px-7 rounded-xl"
        >
          <div class="testimonial-content h-[75%] relative pt-5 backdrop-blur-lg">
            <p class="overflow-hidden text-slate-600 italic tracking-wider text-lg font-normal">
              {{ review.body }}
            </p>
          </div>
          <div class="h-[25%]">
            <hr class="my-3 h-0.5 bg-slate-300" />
            <div class="testimonial-head flex justify-between items-center">
              <img
                class="w-12 h-12 shadow-sm object-cover rounded-full"
                :src="review.img"
                
              />
              <h5 class="text-lg font-normal italic text-slate-500 capitalize">{{ review.name }}</h5>
            </div>
          </div>
        </div>
</template>

<script>
  export default{
    props : ['review']
  }
</script>

<style scoped>
.testimonial-content::before {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  content: "\201C";
  display: block;
  font-size: 300px;
  color: rgba(25, 209, 25, 0.195);
  font-weight: bold;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -20;
}
</style>