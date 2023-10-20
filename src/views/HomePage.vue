
<template>
    <main>
        <!-- hero section  -->
        <hero-section></hero-section>

        <!-- popular section  -->
        <popular-dishes></popular-dishes>

        <!-- service section  -->
        <service-section></service-section>
    
    </main>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import PopularDishes from '../components/home/PopularDishes.vue';
import ServiceSection from '../components/home/ServiceSection.vue';
export default {
    components: { HeroSection, PopularDishes,ServiceSection },
   
}
</script>

<style scoped></style>