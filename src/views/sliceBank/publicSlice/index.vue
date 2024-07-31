<template>
  <div
    class="grid grid-cols-1 gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
  >
    <div
      v-for="item in 50"
      :key="item"
      class="w-full h-[100px] bg-theme-color mr-[10px] mb-[10px] 2xl:h-[200px] xl:h-[150px] lg:h-[130px]"
    ></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
