<template>
  <v-app>
    <v-app-bar app elevation="0" class="header-nav">
      <div class="mx-auto">
        <v-btn text to="/" class="rounded-pill text-none font-weight-bold">About me</v-btn>
        <v-btn text to="/projects" class="rounded-pill text-none ">Works</v-btn>
        <v-btn
          variant="flat"
          color="faceoff"
          class="ml-15"
          :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="toggleTheme"
        ></v-btn>
      </div>
    </v-app-bar>
    <v-main class="bg-background">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme();

onMounted(() => {
  theme.change('dark');
});

function toggleTheme() {
  theme.global.current.value.dark ? theme.change('light') : theme.change('dark');
}
</script>
<style scoped>
.header-nav {
  position: fixed;
  z-index: 2;
  backdrop-filter: blur(15px);
  background: transparent;
}
</style>