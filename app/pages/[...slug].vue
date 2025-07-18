<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <v-card
      v-else
      class="elevation-0 mx-auto my-15 rounded-lg py-10"
      width="50%"
    >
      <v-card-title class="text-center">
        <v-avatar
          size="100"
          class="pa-1 bg-white rounded-circle"
          variant="elevated"
        >
          <v-icon color="warning" size="90">mdi-account-hard-hat-outline</v-icon>
        </v-avatar>
      </v-card-title>
      <v-card-text class="text-center my-4">
        <p class="text-body-1">Page is not existed</p>
      </v-card-text>
      <v-card-title class="text-center">
        <v-btn
          color="primary"
          variant="flat"
          class="text-none rounded-lg"
          to="/"
          size="large"
        >
          <template #append>
            <v-icon size="large">mdi-home-heart</v-icon>
          </template>
          Visit my home
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Get the current path
const path = route.path

const { data: page } = await useAsyncData(`content-${path}`, () => {
  return queryCollection('content').path(path).first()
})

// Set SEO meta tags
useSeoMeta({
  title: (page.value as any)?.title || 'Page Not Found',
  description: (page.value as any)?.description || 'This page could not be found'
})
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 2rem;
}

.error-page h1 {
  color: #ef4444;
  margin-bottom: 1rem;
}

.error-page a {
  color: #3b82f6;
  text-decoration: none;
}

.error-page a:hover {
  text-decoration: underline;
}
</style>
