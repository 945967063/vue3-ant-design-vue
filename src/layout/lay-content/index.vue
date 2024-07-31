<template>
  <a-layout-content class="h-[calc(100vh-64px)] overflow-y-auto">
    <a-card class="m-[10px]">
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" v-if="route.meta?.keepAlive" :key="route.path" />
        </keep-alive>
        <component :is="Component" v-if="!route.meta?.keepAlive" :key="route.path" />
      </router-view>
    </a-card>
  </a-layout-content>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped></style>
