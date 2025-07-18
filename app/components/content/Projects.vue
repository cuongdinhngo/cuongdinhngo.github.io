<template>
  <v-row>
    <v-col cols="12" sm="12" md="9" lg="9" class="mx-auto">
      <v-card class="mt-10 elevation-0 bg-transparent" tile width="">
        <ProfileCard />

        <v-card-title class="text-center">
          <p class="text-h6 font-weight-bold text-highlight">Projects</p>
          <p class="text-subtitle-1">A list of projects I've worked on</p>
        </v-card-title>

        <v-card-text class="mt-5">
          <v-row>
            <v-col
              v-for="(column, columnIndex) in columns"
              :key="`column-${columnIndex}`"
              :cols="12"
              :md="6"
              class="py-2 px-4"
            >
              <div
                v-for="project in column"
                :key="project.title"
                class="mb-6"
              >
                <ProjectCard :project="project" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const { data:projects, status} = await useAsyncData(
  'projects',
  async() => await queryCollection('projects').select('meta').all(),
  {
    transform: (data: any) => data.map((item: any) => item.meta.body)
  }
);

// Create masonry columns
const columns = computed(() => {
  if (!projects.value) return [[], []];
  
  const columnCount = 2;
  const cols: any[][] = Array(columnCount).fill(null).map(() => []);
  
  projects.value.forEach((project: any, index: number) => {
    const columnIndex = index % columnCount;
    if (cols[columnIndex]) {
      cols[columnIndex].push(project);
    }
  });
  
  return cols;
});
</script>