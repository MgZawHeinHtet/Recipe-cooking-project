<template>
    <header class=" min-w-full">
        <nav class="mx-auto px-32 flex justify-between items-center">
            <!-- logo  -->
            <div class="logo flex items-center">
                <img class="w-24 h-24" loading="eager" src="../assets/nav_logo.png" alt="Logo" />
            </div>

            <!-- nav link  -->
            <ul class="flex space-x-14 font-serif">
                <li class="text-lg font-medium hover:underline decoration-green-500 decoration-4 underline-offset-8">
                    <router-link to="/" active-class="text-green-500">Home</router-link>
                </li>
                <li class="text-lg font-medium hover:underline decoration-green-500 decoration-4 underline-offset-8">
                    <router-link to="/menu" active-class="text-green-500">Menu</router-link>
                </li>
               
            </ul>

            <!-- feature btn  -->
            <div>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox"  class="sr-only peer" v-model="darkMode" @click="switchMode" :checked="darkMode" />
                    <div
                        class="w-11 h-6 bg-green-100 rounded-full peer dark:bg-slate-400 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-green-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                    </div>
                    <span class="ml-3 text-base font-normal text-green-500">Toggle Mode</span>
                </label>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    props : ['theme'],
   created(){
        this.darkMode = JSON.parse(localStorage.getItem('dark'));
   },
    methods: {
        switchMode(){
            if(!this.darkMode){
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('mode',JSON.stringify(!this.darkMode))
            this.darkMode = !this.darkMode;
        }
    },
    data(){
        return{
            darkMode : false
        }
    }
}
</script>