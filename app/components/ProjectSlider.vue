<template>
  <v-slide-group
    v-model="model"
    center-active
    show-arrows
  >
    <v-slide-group-item
      v-for="(item, index) in items"
      :key="index"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        :class="['ma-4', 'bg-transparent', 'text-center']"
        color="bg-transparent"
        :width="item.scaleImage ? '95' : '250'"
        height="200"
        @click="toggle();"
      >
        <v-responsive :aspect-ratio="4/5">
          <v-img
            :src="getImagePath(item.image)"
            :alt="item.title"
            cover
            height="100%"
            class="rounded-lg"
          >

          </v-img>
        </v-responsive>
        <v-btn
          :class="['text-none', item.scaleImage ? 'scale-action-demo' : 'action-demo']"
          color="primary"
          variant="flat"
          text="Live Demo"
          size="x-small"
          :href="item.links.demo"
          target="_blank"
        />
        <v-btn
          :class="['text-none', item.scaleImage ? 'scale-action-source' : 'action-source']"
          color="badge"
          variant="flat"
          text="Source Code"
          size="x-small"
          :href="item.links.source"
          target="_blank"
        />
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
<script setup lang="ts">
const model = ref(0);
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>
<style scoped>
.action-demo {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.action-source {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.scale-action-demo {
  position: absolute;
  bottom: 35px;
  left: 10px;
}
.scale-action-source {
  position: absolute;
  bottom: 10px;
  left: 5px;
}
</style>