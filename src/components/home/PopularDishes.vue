<template>
     <section class="popular my-9 px-32">
            <div>
                <h2 class="antialiased font-sans text-5xl font-bold capitalize text-slate-700 tracking-wide">popular dishes
                </h2>
                <div class="grid grid-cols-4 gap-5 my-24">
                    <shop-card></shop-card>
                    <shop-card></shop-card>
                    <shop-card></shop-card>
                    <shop-card></shop-card>
                </div>
            </div>
        </section>
</template>

<script>
import ShopCard from '../card/ShopCard.vue';
export default {
    components : {ShopCard}
}
</script>