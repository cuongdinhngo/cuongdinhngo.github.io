<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="elevation-0 rounded-lg"
        :class="{ 'on-hover': isHovering }"
      >
        <v-responsive :aspect-ratio="16/9" class="overflow-hidden">
          <v-img
            :src="getImagePath(project.image)"
            cover
            class="transition-transform"
            :class="{ 'image-hover': isHovering }"
          ></v-img>
        </v-responsive>
        <v-card-title class="text-subtitle-1 font-weight-bold">{{ project.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-wrap ml-4">
          <div v-html="parseToBulletPoints(project.description)"></div>
        </v-card-subtitle>
        <v-card-title class="d-flex flex-wrap">
          <v-chip
            v-for="tag in project.tech"
            :key="tag"
            class="ma-1"
            :color="isHovering ? 'warning' : 'badge'"
            :variant="isHovering ? 'elevated' : 'tonal'"
          >
            {{ tag }}
          </v-chip>
        </v-card-title>
        <v-card-actions class="justify-end">
          <v-btn
            color="primary"
            text prepend-icon="mdi-web"
            class="text-none"
            :href="project.links.demo"
            target="_blank"
          >
            <span :class="[isHovering ? 'font-weight-bold' : 'font-italic']">Live Demo</span>
          </v-btn>
          <v-btn
            color="faceoff"
            text prepend-icon="mdi-application-brackets-outline"
            class="text-none"
            :href="project.links.source"
            target="_blank"
          >
            <span :class="[isHovering ? 'font-weight-bold' : 'font-italic']">Source Code</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>
<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    source: string;
    demo: string;
  };
}

const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
});
</script>
<style scoped>
.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.image-hover {
  transform: scale(1.05);
}

.on-hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
  transition: box-shadow 0.3s ease-in-out;
}
</style>