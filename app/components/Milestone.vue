<template>
  <v-stepper-vertical
    hide-actions
    color="badge"
    v-model="selectedStepper"
    flat
    rounded="lg"
  >
    <v-stepper-vertical-item
      v-for="(item, index) in items"
      :key="index"
      :complete="selectedStepper > (index + 1)"
      complete-icon="mdi-crown-outline"
      :value="index + 1"
      icon="mdi-school-outline"
      readonly
      @click="selectedStepper = (index + 1)"
    >
      <template #title>
        <span class="text-body-2">{{ `[${item.year}] ${item.title}`}}</span>
      </template>
      <template #subtitle>
        <span class="text-caption text-medium-emphasis">{{ item.subtitle}}</span>
      </template>
      <p>{{ item.description }}</p>
    </v-stepper-vertical-item>
  </v-stepper-vertical>
</template>
<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array as () => {
      year: string | number;
      title: string;
      subtitle?: string;
      description?: string;
    }[],
    required: true
  }
});
const selectedStepper = ref(props.items.length)
</script>