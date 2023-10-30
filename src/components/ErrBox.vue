<template>
     <div class="w-full h-40 rounded-lg flex justify-center items-center">
      <p v-if="loading">
        <i class="fa-solid fa-spinner text-green-500 animate-spin text-5xl"></i>
      </p>
      <p
        v-else-if="err"
        class="text-orange-700 uppercase text-base font-semibold tracking-wider"
      >💥<slot  name="errMsg"></slot></p>
      <p
        v-else
        class="text-slate-700 uppercase text-xl font-semibold tracking-wider"
      ><slot name="welcome"></slot></p>
    </div>
</template>

<script>
export default {
    props : ['loading','err']
}
</script>