<template>
  <router-view v-slot="{ Component }">
    <div class="content">
      <transition name="fade">
        <component :is="Component" :key="$route.path" />
      </transition>
    </div>
  </router-view>
</template>
