
<template>
    <main>
        <!-- hero section  -->
        <hero-section></hero-section>

        <!-- popular section  -->
       <popular-dishes></popular-dishes>
    </main>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import PopularDishes from '../components/home/PopularDishes.vue';
export default {
    components: { HeroSection,PopularDishes }
}
</script>

<style scoped>
    
</style>