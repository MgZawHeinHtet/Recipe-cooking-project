
<template>
  <div class="dark:bg-black transition-all duration-500">
    <!-- nav section  -->
    <navbar/>

    <router-view/>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
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
  components : {Navbar}
}
</script>

