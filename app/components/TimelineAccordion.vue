<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(item, index) in items"
      :key="index"
    >
      <template #title>
        <v-list-item class="px-0">
          <template #prepend>
            <v-chip
              variant="flat"
              :text="item.year"
              color="badge"
              class="mr-2"
            />
          </template>
          <template #title>
            <span class="text-subtitle-2 font-weight-bold text-wrap">{{ item.title }}</span>
          </template>
          <template #subtitle>
            <span class="text-caption">{{ item.subtitle }}</span>
          </template>
        </v-list-item>
      </template>

      <template #text>
        <v-card-text class="text-body-2 px-0">
          {{ item.description }}
        </v-card-text>
        <v-card-title
          v-if="item.skills"
          class="px-0"
        >
          <span class="text-subtitle-2 font-italic">Tech stack:</span>
          <span class="font-weight-bold text-subtitle-2 ml-2">{{ item.skills.toString() }}</span>
        </v-card-title>
      </template>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script setup lang="ts">
type TimelineItem = {
  year: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
};
type Collections = {
  timeline: TimelineItem[];
};

const props = defineProps({
  items: {
    type: Object as () => Collections['timeline'],
  }
});

</script>