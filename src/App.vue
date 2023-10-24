
<template>
  <div class="dark:bg-black transition-all duration-500 overflow-x-hidden">
    <!-- nav section  -->
    <navbar/>

    <router-view/>

    <!-- footer section  -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  created(){
    const mode = JSON.parse(localStorage.getItem('mode'))
    this.getSelectedTheme(mode);
  },
  methods:{
    getSelectedTheme(mode){
      
      if(mode){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
    }
  },
  components : {Navbar,Footer}
}
</script>

