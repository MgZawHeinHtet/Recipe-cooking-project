<template>
     <section class="testimonial px-32 py-16">
      <div class="space-y-14">
        <h2
          class="text-center antialiased font-sans text-5xl font-bold capitalize text-slate-700 tracking-wide mb-10"
        >testimonial by customers</h2>
        <p class="mx-auto w-[800px] text-center text-xl font-normal text-slate-500 mb-10">In order to convince a total stranger to buy a product you are offering or purchase a service from <span class="bg-green-500 text-slate-200 py-0.5">your business</span> , some social proof might be necessary.</p>

        <Carousel   :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
          <Slide v-for="(review,index) in reviews" :key="index">
            <testimonial-card :review="review"></testimonial-card>
          </Slide>
        </Carousel>
      </div>
    </section>
</template>

<script>
import TestimonialCard from "../card/TestimonialCard.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide} from "vue3-carousel";
export default{
    components : {TestimonialCard ,Carousel,
    Slide},
    data(){
        return {
            reviews : [
                {name:'zaw hein htet',body:'This is very nice and your the final one', img: '../src/assets/home_page/service_icon/cook-books.png'},
                {name:'nadi',body:'This is very nice and your the final two', img: '../src/assets/home_page/service_icon/payment.png'},
                {name:'baby',body:'This is very nice and your the final three', img: '../src/assets/home_page/service_icon/ingredient.png'},
                {name:'super hein htet',body:'This is very nice and your the final four', img: '../src/assets/home_page/service_icon/clock.png'},
                {name:'mini honey',body:'This is very nice and your the final five', img: '../src/assets/home_page/service_icon/cook-books.png'},
                {name:'shwe oo kyaw',body:'This is very nice and your the final six', img: '../src/assets/home_page/service_icon/cook-books.png'}
            ]
        }
    }
}
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>