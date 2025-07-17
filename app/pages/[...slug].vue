<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else class="error-page">
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <NuxtLink to="/">← Back to Home</NuxtLink>
    </div>
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
